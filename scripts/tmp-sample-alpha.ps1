Add-Type -AssemblyName System.Drawing
function Sample([string]$path) {
  $bmp = [System.Drawing.Bitmap]::FromFile($path)
  Write-Output ("FILE {0} {1}x{2}" -f $path, $bmp.Width, $bmp.Height)
  $transparent = 0
  $opaque = 0
  $semi = 0
  for ($y = 0; $y -lt $bmp.Height; $y += 3) {
    for ($x = 0; $x -lt $bmp.Width; $x += 3) {
      $a = $bmp.GetPixel($x, $y).A
      if ($a -eq 0) { $transparent++ }
      elseif ($a -eq 255) { $opaque++ }
      else { $semi++ }
    }
  }
  Write-Output ("sampled transparent={0} opaque={1} semi={2}" -f $transparent, $opaque, $semi)

  $pts = @(
    @(0, 0, 'cornerTL'),
    @(($bmp.Width - 1), 0, 'cornerTR'),
    @(0, ($bmp.Height - 1), 'cornerBL'),
    @(($bmp.Width - 1), ($bmp.Height - 1), 'cornerBR'),
    @([int]($bmp.Width / 2), [int]($bmp.Height / 2), 'center'),
    @(50, 50, 'nearTL'),
    @([int]($bmp.Width / 2), 80, 'titlebar'),
    @(80, [int]($bmp.Height / 2), 'sidebar')
  )
  foreach ($p in $pts) {
    $c = $bmp.GetPixel($p[0], $p[1])
    Write-Output ("  {0}: rgba({1},{2},{3},{4})" -f $p[2], $c.R, $c.G, $c.B, $c.A)
  }
  $bmp.Dispose()
}

Sample "C:\Users\chris_f40v4nt\Documents\GitHub\cakev2\src\assets\home\win-canvas-light.png"
Sample "C:\Users\chris_f40v4nt\Documents\GitHub\cakev2\src\assets\home\win-canvas-dark.png"
