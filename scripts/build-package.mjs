/**
 * Builds the publishable design-system package into `dist-package/`.
 *
 *   node scripts/build-package.mjs [--version 1.2.3]
 *
 * Steps:
 *  1. regenerate the CSS token layer so the build can never ship stale tokens;
 *  2. run the Vite library build (vite.lib.config.mts);
 *  3. prepend the stylesheet import to the entry, so consumers get the tokens +
 *     fonts just by importing the package (no second import to remember);
 *  4. emit a purpose-built package.json.
 *
 * The published manifest is written fresh here rather than reusing the repo's
 * root package.json: that one describes the Create React App site (react-scripts,
 * MUI, visx, …) and shipping its dependency list would drag the whole app into
 * every consumer.
 *
 * Binaries are invoked through `node` on purpose — this repo's path contains an
 * `&`, which breaks npm's generated .bin shims on Windows.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'dist-package');

const PACKAGE_NAME = '@cake-admin/cakeand';
const CSS_FILE = 'cakeand.css';

/** Read the version from the CLI (--version x.y.z) or fall back to the repo's. */
const versionFlag = process.argv.indexOf('--version');
const rootPkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const version = versionFlag !== -1 ? process.argv[versionFlag + 1] : rootPkg.version;

const run = (args, label) => {
  process.stdout.write(`\n▸ ${label}\n`);
  execFileSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
};

// 1. Tokens first — the CSS custom properties everything reads.
run([path.join(root, 'scripts', 'build-cakeand-css-vars.mjs')], 'building token CSS vars');

// 2. Library build.
run(
  [path.join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'build', '--config', 'vite.lib.config.mts'],
  'vite library build',
);

// 2b. Type declarations, emitted by the isolated TypeScript 5 in tools/dts.
//     react-scripts pins the root install to TypeScript 4.x (which cannot even
//     parse this repo's "moduleResolution": "bundler" tsconfig), so upgrading it
//     would put the cake.lenovo.com site build at risk. tsc exits non-zero on the
//     handful of pre-existing type errors elsewhere in src/cakeand, but those do
//     not block declaration emit — so this step warns instead of failing, and we
//     assert on the emitted entry point below.
process.stdout.write('\n▸ emitting type declarations (isolated TypeScript 5)\n');
try {
  execFileSync(
    process.execPath,
    [
      path.join(root, 'tools', 'dts', 'node_modules', 'typescript', 'bin', 'tsc'),
      '-p',
      path.join(root, 'tools', 'dts', 'tsconfig.json'),
    ],
    { cwd: root, stdio: 'inherit' },
  );
} catch {
  process.stdout.write('  (tsc reported pre-existing type errors; declarations still emitted)\n');
}

const typesEntry = path.join(outDir, 'types', 'index.d.ts');
if (!fs.existsSync(typesEntry)) {
  console.error(`\n✗ expected ${typesEntry} — the package would ship without types`);
  process.exit(1);
}

// 3. Make the stylesheet load itself. Vite extracts CSS in library mode and does
//    not re-import it, so without this the package would render unstyled unless
//    the consumer remembered a separate CSS import.
const entry = path.join(outDir, 'index.js');
if (!fs.existsSync(entry)) {
  console.error(`\n✗ expected ${entry} to exist after the Vite build`);
  process.exit(1);
}
const cssEmitted = fs.existsSync(path.join(outDir, CSS_FILE));
if (cssEmitted) {
  const code = fs.readFileSync(entry, 'utf8');
  if (!code.startsWith(`import './${CSS_FILE}'`)) {
    fs.writeFileSync(entry, `import './${CSS_FILE}';\n${code}`);
  }
} else {
  console.warn(`\n! ${CSS_FILE} was not emitted — the package would ship without tokens/fonts.`);
}

// 4. The published manifest.
const pkg = {
  name: PACKAGE_NAME,
  version,
  description: 'cake& design system — React components, tokens, and theming.',
  homepage: rootPkg.homepage,
  license: rootPkg.license ?? 'UNLICENSED',
  private: false,
  type: 'module',
  // Keep the CSS (and the entry that imports it) out of tree-shaking's reach.
  sideEffects: ['*.css', './index.js'],
  main: './index.js',
  module: './index.js',
  types: './types/index.d.ts',
  exports: {
    '.': { types: './types/index.d.ts', import: './index.js' },
    [`./${CSS_FILE}`]: `./${CSS_FILE}`,
    './package.json': './package.json',
  },
  files: ['index.js', 'index.js.map', 'types', CSS_FILE, 'assets', 'README.md'],
  peerDependencies: {
    react: '>=18',
    'react-dom': '>=18',
    'styled-components': '>=6',
    'radix-ui': '>=1.6',
    'lucide-react': '>=0.5',
  },
  repository: { type: 'git', url: 'git+https://github.com/cake-admin/cakev2.git' },
  // Scope must match the GitHub owner for GitHub Packages to accept the publish.
  // `access: public` because cake-admin/cakev2 is a public repository and GitHub
  // Packages inherits a package's visibility from its repo — declaring
  // `restricted` here contradicts that and can fail the publish. Note that the
  // GitHub npm registry still requires authentication to install, even for
  // public packages, so consumers keep the scoped .npmrc either way.
  publishConfig: { registry: 'https://npm.pkg.github.com', access: 'public' },
};

fs.writeFileSync(path.join(outDir, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`);

const readme = path.join(root, 'PACKAGE_README.md');
if (fs.existsSync(readme)) fs.copyFileSync(readme, path.join(outDir, 'README.md'));

const list = fs.readdirSync(outDir).sort();
process.stdout.write(`\n✓ ${PACKAGE_NAME}@${version} → dist-package/\n  ${list.join('\n  ')}\n`);
process.stdout.write(
  cssEmitted ? '' : '\n! no stylesheet emitted — investigate before publishing\n',
);
