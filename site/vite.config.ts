import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    open: false,
    port: 3000,
    fs: {
      allow: [path.resolve(dirname, '..')],
    },
  },
  resolve: {
    alias: {
      '@/cakeand': path.resolve(dirname, '../src/cakeand'),
      react: path.resolve(dirname, 'node_modules/react'),
      'react-dom': path.resolve(dirname, 'node_modules/react-dom'),
      'styled-components': path.resolve(dirname, 'node_modules/styled-components'),
      'radix-ui': path.resolve(dirname, 'node_modules/radix-ui'),
      'lucide-react': path.resolve(dirname, 'node_modules/lucide-react'),
    },
    dedupe: ['styled-components', 'react', 'react-dom'],
  },
});
