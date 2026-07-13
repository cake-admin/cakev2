import type { EChartsOption } from 'echarts';
import { isSeries } from '../../data/dataModel';
import {
  animationOpts,
  axisCommon,
  FONT,
  gridFor,
  headerGraphic,
  legendFor,
  markStates,
  px,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  withSource,
  type ChartContext,
} from './common';

/** Stable pseudo-random in [-0.5, 0.5] so export matches the live preview. */
function jitterFrac(seed: number): number {
  const r = Math.sin(seed * 12.9898) * 43758.5453;
  return r - Math.floor(r) - 0.5;
}

/**
 * Jitter / strip plot — categorical scatter. X is a value axis padded to band
 * centers (integer ticks relabeled with category names); points are jittered
 * horizontally within each band. Reuses the `series` data shape.
 */
export function buildJitter(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series;
  const categories = Array.from(new Set(series.flatMap((s) => s.points.map((p) => p.x))));
  const idx = new Map(categories.map((c, i) => [c, i]));
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, series.length);
  const legendShown = style.showLegend && series.length > 0;
  const n = Math.max(1, categories.length);

  const echSeries = series.map((s, si) => ({
    type: 'scatter' as const,
    name: s.name,
    symbolSize: px(ctx, style.pointRadius * 2),
    selectedMode: SELECTED_MODE,
    itemStyle: { color: colors[si % colors.length], opacity: 0.85, borderColor: theme.surface.card, borderWidth: px(ctx, 1) },
    data: s.points.map((p, pi) => [(idx.get(p.x) ?? 0) + jitterFrac(si * 131 + pi * 17 + 1) * 0.72, p.y]),
    ...markStates(ctx, colors[si % colors.length], 'series'),
  }));

  const base = axisCommon(ctx, style.showAxes);
  // Map integer tick → category name; tagged with inlined categories so the
  // code-snippet export stays self-contained.
  const labelFormatter = withSource(
    (v: number | string) => categories[Number(v)] ?? '',
    `(v) => ([${categories.map((c) => JSON.stringify(c)).join(', ')}])[Number(v)] ?? ''`,
  );
  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    grid: gridFor(ctx, legendShown),
    tooltip: { ...tooltipFor(theme), trigger: 'item' },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    xAxis: {
      type: 'value',
      min: -0.5,
      max: n - 0.5,
      interval: 1,
      alignTicks: false,
      ...base,
      axisLabel: { ...base.axisLabel, formatter: labelFormatter },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      alignTicks: false,
      ...base,
      splitLine: { show: style.showGrid, lineStyle: { color: theme.grid.line } },
    },
    series: echSeries as EChartsOption['series'],
  };
}
