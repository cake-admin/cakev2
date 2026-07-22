/**
 * Copy the Storybook static build into the CRA Pages output at /storybook/.
 * Invoked from `postbuild` so the existing deploy.yml "Build" step ships
 * cake.lenovo.com/storybook without needing extra workflow steps.
 */
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const src = 'storybook-static';
const dest = join('build', 'storybook');

if (!existsSync(src)) {
  console.error(`nest-storybook: missing ${src} — run build-storybook first`);
  process.exit(1);
}
if (!existsSync('build')) {
  console.error('nest-storybook: missing build/ — run the CRA build first');
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log(`nest-storybook: copied ${src} → ${dest}`);
