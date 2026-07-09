import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Storybook configuration for the Cake Design System.
 *
 * Builder: Vite (independent of the app's Create React App build). This keeps
 * dev/HMR fast while the design-system components (styled-components, MUI icons,
 * JSON tokens, mixed .js/.tsx) render exactly as they do in the app.
 */
const config: StorybookConfig = {
  stories: [
    // cake& only — the new design system. Foundations/guides first, then components.
    '../src/cakeand/foundations/**/*.mdx',
    '../src/cakeand/**/*.mdx',
    '../src/cakeand/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // Serve Rookery font files from public/fonts in the Storybook preview + manager.
  staticDirs: ['../public'],

  // react-docgen reads BOTH JS PropTypes and TS prop types, which is required
  // for this mixed .js/.tsx codebase to get auto-generated props tables.
  typescript: {
    reactDocgen: 'react-docgen',
  },

  docs: {
    // Components opt into an auto-generated docs page via `tags: ['autodocs']`.
    defaultName: 'Docs',
  },

  async viteFinal(config, { configType }) {
    const { mergeConfig, transformWithEsbuild } = await import('vite');

    return mergeConfig(config, {
      plugins: [
        {
          // This design system authors JSX inside plain `.js` files (a
          // Create React App convention). Vite/esbuild only treats .jsx/.tsx
          // as JSX, so we transform src/*.js through esbuild's JSX loader.
          name: 'cake:load-src-js-as-jsx',
          enforce: 'pre',
          async transform(code: string, id: string) {
            const file = id.split('?')[0];
            if (!file.includes('/src/') || !file.endsWith('.js')) return null;
            return transformWithEsbuild(code, id, {
              loader: 'jsx',
              jsx: 'automatic',
            });
          },
        },
      ],
      optimizeDeps: {
        esbuildOptions: {
          loader: { '.js': 'jsx' },
        },
      },
      define: {
        // Several components (e.g. src/tokens/colorTokens.js) reference
        // process.env.NODE_ENV. Vite does not expose `process` in the browser,
        // so define it to avoid a "process is not defined" runtime error.
        'process.env.NODE_ENV': JSON.stringify(
          configType === 'PRODUCTION' ? 'production' : 'development'
        ),
      },
    });
  },
};

export default config;
