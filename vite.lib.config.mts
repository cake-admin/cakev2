import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Library build for the publishable design-system package (@cake-admin/cakeand).
 *
 * This is deliberately separate from the app's Create React App build and from
 * `.storybook/main.ts` — it only compiles `src/cakeand` into a distributable,
 * and never touches the site build.
 *
 * Notes:
 *  - Every runtime dependency the consumer also owns is EXTERNAL. styled-components
 *    especially must stay a singleton: two copies in one app means two separate
 *    ThemeProviders/stylesheets and components silently lose their theme.
 *  - CSS is emitted as one file (`cakeand.css`) that carries the token layer and
 *    the @font-face rules; `scripts/build-package.mjs` then prepends an import of
 *    it to the entry so consumers get styles without a second import.
 *  - The Rookery woff2 files are emitted to `assets/` and their URLs rewritten,
 *    which is why fonts.css references them relatively.
 */
export default defineConfig({
  plugins: [react()],
  // Vite's default publicDir is `public/`, which here holds the CRA site's
  // deploy files (index.html, CNAME, 404.html). Without this they get copied
  // into the package.
  publicDir: false,
  build: {
    outDir: 'dist-package',
    emptyOutDir: true,
    sourcemap: true,
    // One stylesheet for the whole library rather than per-chunk fragments.
    cssCodeSplit: false,
    // Library mode inlines referenced assets by default, which base64s all three
    // woff2 into the CSS (~300 kB, and base64'd woff2 barely gzips). Emit them as
    // real files instead so the fonts stay cacheable and the stylesheet stays small.
    assetsInlineLimit: 0,
    lib: {
      entry: path.resolve(dirname, 'src/cakeand/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'styled-components',
        'radix-ui',
        'lucide-react',
        /^@radix-ui\//,
      ],
      output: {
        assetFileNames: (asset) =>
          asset.name && asset.name.endsWith('.css') ? 'cakeand.css' : 'assets/[name][extname]',
      },
    },
  },
});
