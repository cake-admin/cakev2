/**
 * Side-effect registration for echarts-gl (globe / scatter3D).
 * Kept separate so SVG SSR paths never import WebGL (it references `self`).
 *
 * `echarts-gl` registers against `echarts/lib/echarts`. Vite `dedupe: ['echarts']`
 * keeps that the same singleton as our `echarts/core` import in echartsSetup.
 */
import 'echarts-gl';

export const echartsGlReady = true;
