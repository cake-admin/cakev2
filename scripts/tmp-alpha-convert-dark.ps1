Add-Type -AssemblyName System.Drawing

function Convert-BlackToAlpha {
  param(
    [string]$InPath,
    [string]$OutPath,
    [int]$Threshold = 0
  )

  $src = [System.Drawing.Bitmap]::FromFile($InPath)
  $bmp = New-Object System.Drawing.Bitmap $src.Width, $src.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($src, 0, 0, $src.Width, $src.Height)
  $g.Dispose()
  $src.Dispose()

  $w = $bmp.Width
  $h = $bmp.Height
  $visited = New-Object 'bool[,]' $w, $h
  $queue = New-Object System.Collections.Generic.Queue[object]

  $seeds = @(
    @(0, 0), @(($w - 1), 0), @(0, ($h - 1)), @(($w - 1), ($h - 1)),
    @([int]($w / 2), 0), @([int]($w / 2), ($h - 1)), @(0, [int]($h / 2)), @(($w - 1), [int]($h / 2))
  )

  foreach ($s in $seeds) {
    $x = $s[0]
    $y = $s[1]
    $c = $bmp.GetPixel($x, $y)
    if ($c.R -le $Threshold -and $c.G -le $Threshold -and $c.B -le $Threshold -and $c.A -gt 0) {
      $queue.Enqueue(@($x, $y))
      $visited[$x, $y] = $true
    }
  }

  $cleared = 0
  $dirs = @(@(1, 0), @(-1, 0), @(0, 1), @(0, -1))
  while ($queue.Count -gt 0) {
    $p = $queue.Dequeue()
    $x = $p[0]
    $y = $p[1]
    $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    $cleared++
    foreach ($d in $dirs) {
      $nx = $x + $d[0]
      $ny = $y + $d[1]
      if ($nx -lt 0 -or $ny -lt 0 -or $nx -ge $w -or $ny -ge $h) { continue }
      if ($visited[$nx, $ny]) { continue }
      $nc = $bmp.GetPixel($nx, $ny)
      if ($nc.R -le $Threshold -and $nc.G -le $Threshold -and $nc.B -le $Threshold -and $nc.A -gt 0) {
        $visited[$nx, $ny] = $true
        $queue.Enqueue(@($nx, $ny))
      }
    }
  }

  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output ("OUT={0} cleared={1} threshold={2}" -f $OutPath, $cleared, $Threshold)
}

$dark = "C:\Users\chris_f40v4nt\Documents\GitHub\cakev2\src\assets\home\win-canvas-dark.png"
$tmpD = Join-Path $env:TEMP "win-canvas-dark-alpha.png"
Convert-BlackToAlpha -InPath $dark -OutPath $tmpD -Threshold 0
Copy-Item -Force $tmpD $dark
Write-Output "done"
