/**
 * Copy the chart-tool-echarts Vite build into the CRA Pages output at
 * /datavis/, and add a /dataviz/ redirect for old bookmarks.
 *
 * Invoked from `.github/workflows/deploy.yml` after the Vite build.
 * Root `npm run build` / `npm run deploy` do NOT run this — only the
 * Actions workflow (or a manual nest after building chart-tool) ships
 * cake.lenovo.com/datavis.
 */
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const src = join('chart-tool-echarts', 'dist');
const dest = join('build', 'datavis');
const redirectDir = join('build', 'dataviz');

if (!existsSync(src)) {
  console.error(
    `nest-datavis: missing ${src} — build chart-tool-echarts first ` +
      '(tsc + vite build; skip prebuild token regen in CI)',
  );
  process.exit(1);
}
if (!existsSync('build')) {
  console.error('nest-datavis: missing build/ — run the CRA build first');
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log(`nest-datavis: copied ${src} → ${dest}`);

mkdirSync(redirectDir, { recursive: true });
writeFileSync(
  join(redirectDir, 'index.html'),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=/datavis/">
  <link rel="canonical" href="https://cake.lenovo.com/datavis/">
  <title>Redirecting…</title>
  <script>location.replace('/datavis/' + location.search + location.hash);</script>
</head>
<body>
  <p>Moved to <a href="/datavis/">/datavis/</a>.</p>
</body>
</html>
`,
);
console.log(`nest-datavis: wrote ${redirectDir}/index.html → /datavis/`);
