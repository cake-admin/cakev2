import type { EChartsOption } from 'echarts';
import { categoriesOf, isSeries } from '../../data/dataModel';
import { CORNER_RADIUS, SEGMENT_GAP } from '../types';
import {
  animationOpts,
  axisCommon,
  FONT,
  fs,
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
import { stackSegmentRadius } from './stackRadius';
import { fillStyle } from './wireframe';

/** Bar / Column — vertical|horizontal × single|grouped|stacked. */
export function buildBar(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series;
  const categories = categoriesOf(data);
  const { style, theme } = ctx;
  const horizontal = style.orientation === 'horizontal';
  const mode = series.length > 1 ? style.barMode : 'single';
  const stacked = mode === 'stacked';
  const colorCount = mode === 'single' ? categories.length : series.length;
  const colors = seriesColors(ctx, colorCount);
  const legendShown = style.showLegend && mode !== 'single';

  const r = px(ctx, CORNER_RADIUS);
  const gap = px(ctx, SEGMENT_GAP);
  // Half-gap border on each stacked segment → SEGMENT_GAP between fills.
  const stackBorder = stacked
    ? { borderColor: theme.surface.card, borderWidth: gap / 2 }
    : {};
  const radius: number[] = horizontal ? [0, r, r, 0] : [r, r, 0, 0];
  const valAt = (cat: string, si: number) => series[si]?.points.find((p) => p.x === cat)?.y ?? 0;

  const label = style.showDirectLabels
    ? {
        show: true,
        position: (stacked ? 'inside' : horizontal ? 'right' : 'top') as 'inside' | 'right' | 'top',
        color: theme.text.secondary,
        fontFamily: FONT,
        fontSize: fs(ctx, 11),
        fontWeight: 600 as const,
        formatter: '{c}',
      }
    : { show: false };

  const echSeries =
    mode === 'single'
      ? [
          {
            type: 'bar' as const,
            name: series[0]?.name ?? '',
            barMaxWidth: px(ctx, 52),
            selectedMode: SELECTED_MODE,
            label,
            data: categories.map((cat, i) => {
              const color = colors[i % colors.length];
              return {
                value: valAt(cat, 0),
                itemStyle: fillStyle(ctx, color, i, { borderRadius: radius }),
                ...markStates(ctx, color),
              };
            }),
          },
        ]
      : series.map((s, si) => {
          // Series-level color so the legend swatch matches the bars (ECharts
          // legend reads series color / itemStyle, not per-datum fills).
          const color = colors[si % colors.length];
          return {
            type: 'bar' as const,
            name: s.name,
            color,
            stack: stacked ? 'total' : undefined,
            barMaxWidth: 52,
            selectedMode: SELECTED_MODE,
            itemStyle: fillStyle(ctx, color, si),
            label: stacked ? label : { ...label, position: horizontal ? 'right' : 'top' },
            data: categories.map((cat) => {
              const stackVals = series.map((_, j) => valAt(cat, j));
              const borderRadius = stacked
                ? stackSegmentRadius(stackVals, si, horizontal, r)
                : radius;
              return {
                value: valAt(cat, si),
                itemStyle: { borderRadius, ...stackBorder },
                ...markStates(ctx, color),
              };
            }),
          };
        });

  const catAxis = {
    type: 'category' as const,
    data: categories,
    ...axisCommon(ctx, style.showAxes),
    splitLine: { show: false },
  };
  const valAxis = {
    type: 'value' as const,
    ...axisCommon(ctx, style.showAxes),
    splitLine: { show: style.showGrid, lineStyle: { color: theme.grid.line } },
  };

  return {
    textStyle: { fontFamily: FONT },
    // Palette order mirrors series so auto-legend / theme consumers stay aligned.
    ...(mode !== 'single' ? { color: colors } : {}),
    ...animationOpts(ctx),
    grid: gridFor(ctx, legendShown),
    tooltip: { ...tooltipFor(theme), trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: legendFor(
      ctx,
      legendShown,
      legendShown ? series.map((s) => s.name) : undefined,
    ),
    graphic: headerGraphic(ctx),
    xAxis: horizontal ? valAxis : catAxis,
    yAxis: horizontal ? catAxis : valAxis,
    series: echSeries as EChartsOption['series'],
  };
}
