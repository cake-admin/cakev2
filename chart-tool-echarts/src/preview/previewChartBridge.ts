import type { ECharts } from 'echarts/core';

/** Live preview chart instance — used for WebGL PNG export (globe). */
let live: ECharts | null = null;

export const previewChartBridge = {
  set(chart: ECharts | null) {
    live = chart;
  },
  get(): ECharts | null {
    return live;
  },
  getDataURL(pixelRatio = 2, backgroundColor: string | null = '#ffffff'): string | null {
    if (!live) return null;
    try {
      return live.getDataURL({
        type: 'png',
        pixelRatio,
        ...(backgroundColor == null ? {} : { backgroundColor }),
      });
    } catch {
      return null;
    }
  },
};
