import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
// Production is served from cake.lenovo.com/dataviz (GitHub Pages sub-path), so
// the build is based at /dataviz/. Dev server + gallery stay at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dataviz/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Keep ECharts in its own chunk so it doesn't bloat the app chunk.
        manualChunks: {
          echarts: ['echarts/core', 'echarts/charts', 'echarts/components', 'echarts/renderers'],
          color: ['culori', 'd3-array'],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
  },
}));
