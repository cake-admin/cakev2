import type { EChartsOption } from 'echarts';
import { categoriesOf, isSeries } from '../../data/dataModel';
import {
  animationOpts,
  FONT,
  fs,
  headerGraphic,
  markStates,
  radialCenter,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  type ChartContext,
} from './common';

/** Radial (polar) bar — categories radiate around a circle, value = bar length. */
export function buildRadialBar(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series;
  const categories = categoriesOf(data);
  const first = series[0];
  const { theme } = ctx;
  const colors = seriesColors(ctx, categories.length);

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { ...tooltipFor(theme), trigger: 'item' },
    graphic: headerGraphic(ctx),
    polar: { center: radialCenter(ctx, false), radius: ['20%', '74%'] },
    angleAxis: {
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: theme.axis.line } },
      axisTick: { show: false },
      axisLabel: { color: theme.axis.label, fontFamily: FONT, fontSize: fs(ctx, 11) },
      splitLine: { show: false },
      z: 10,
    },
    radiusAxis: {
      type: 'value',
      // A few clean reference rings instead of one per value (which crowd into the
      // donut hole); drop the 0 label that sits awkwardly on the inner edge.
      splitNumber: 4,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: theme.text.helper, fontFamily: FONT, fontSize: fs(ctx, 10), showMinLabel: false },
      splitLine: { lineStyle: { color: theme.grid.line } },
    },
    series: [
      {
        type: 'bar',
        coordinateSystem: 'polar',
        roundCap: true,
        selectedMode: SELECTED_MODE,
        data: categories.map((cat, i) => ({
          value: first?.points.find((p) => p.x === cat)?.y ?? 0,
          itemStyle: { color: colors[i % colors.length] },
          ...markStates(ctx, colors[i % colors.length]),
        })),
      },
    ] as EChartsOption['series'],
  };
}
