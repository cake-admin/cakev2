/**
 * Assemble the GitHub Pages output: Vite site + nested Storybook + dataviz.
 * Replaces the CRA build step in deploy.yml.
 */
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const siteDist = 'site/dist';
const buildRoot = 'build';
const storybookSrc = 'storybook-static';
const storybookDest = join(buildRoot, 'storybook');

if (!existsSync(siteDist)) {
  console.error(`assemble-pages: missing ${siteDist} — run "npm run build" in site/ first`);
  process.exit(1);
}

rmSync(buildRoot, { recursive: true, force: true });
mkdirSync(buildRoot, { recursive: true });
cpSync(siteDist, buildRoot, { recursive: true });

if (existsSync(storybookSrc)) {
  rmSync(storybookDest, { recursive: true, force: true });
  mkdirSync(storybookDest, { recursive: true });
  cpSync(storybookSrc, storybookDest, { recursive: true });
  console.log(`assemble-pages: nested ${storybookSrc} → ${storybookDest}`);
} else {
  console.warn(`assemble-pages: skipping Storybook — ${storybookSrc} not found`);
}

console.log(`assemble-pages: copied ${siteDist} → ${buildRoot}`);
