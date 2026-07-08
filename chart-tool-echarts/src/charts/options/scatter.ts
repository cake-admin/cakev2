import type { EChartsOption } from 'echarts';
import { isXY, type XYPoint } from '../../data/dataModel';
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
  type ChartContext,
} from './common';

/** Scatter (X/Y) with optional size-encoded bubbles and category coloring. */
export function buildScatter(ctx: ChartContext): EChartsOption {
  const data = isXY(ctx.data) ? ctx.data : { kind: 'xy' as const, points: [] };
  const points = data.points;
  const { style, theme } = ctx;
  const categories = Array.from(
    new Set(points.map((p) => p.category).filter((c): c is string => Boolean(c))),
  );
  const hasCat = categories.length > 0;
  const colors = seriesColors(ctx, hasCat ? categories.length : 1);
  const legendShown = style.showLegend && hasCat;

  const bubble = style.scatterStyle === 'bubble' && points.some((p) => typeof p.size === 'number');
  const sizes = points.map((p) => p.size ?? 0);
  const sMin = Math.min(0, ...sizes);
  const sMax = Math.max(1, ...sizes);
  // Per-point sizes (plain numbers) so the chart serializes to a clean code
  // snippet — no closure-bound symbolSize function.
  const sizeFor = (size: number) =>
    px(ctx, bubble ? 6 + ((size - sMin) / (sMax - sMin || 1)) * 22 : style.pointRadius * 2);

  const mkSeries = (name: string, pts: XYPoint[], color: string) => ({
    type: 'scatter' as const,
    name,
    selectedMode: SELECTED_MODE,
    data: pts.map((p) => ({ value: [p.x, p.y], symbolSize: sizeFor(p.size ?? 0) })),
    itemStyle: { color, opacity: 0.85, borderColor: theme.surface.card, borderWidth: px(ctx, 1) },
    ...markStates(ctx, color, 'series'),
  });

  const series = hasCat
    ? categories.map((c, i) => mkSeries(c, points.filter((p) => p.category === c), colors[i % colors.length]))
    : [mkSeries('', points, colors[0])];

  const valueAxis = (showSplit: boolean) => ({
    type: 'value' as const,
    scale: true,
    alignTicks: false,
    ...axisCommon(ctx, style.showAxes),
    splitLine: { show: showSplit, lineStyle: { color: theme.grid.line } },
  });

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    grid: gridFor(ctx, legendShown),
    tooltip: { ...tooltipFor(theme), trigger: 'item' },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    xAxis: valueAxis(style.showGrid),
    yAxis: valueAxis(style.showGrid),
    series: series as EChartsOption['series'],
  };
}
