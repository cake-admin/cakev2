import type { EChartsOption } from 'echarts';
import { categoriesOf, isSeries } from '../../data/dataModel';
import { CORNER_RADIUS } from '../types';
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
            data: categories.map((cat, i) => ({
              value: valAt(cat, 0),
              itemStyle: { color: colors[i % colors.length], borderRadius: radius },
              ...markStates(ctx, colors[i % colors.length]),
            })),
          },
        ]
      : series.map((s, si) => ({
          type: 'bar' as const,
          name: s.name,
          stack: stacked ? 'total' : undefined,
          barMaxWidth: 52,
          selectedMode: SELECTED_MODE,
          label: stacked ? label : { ...label, position: horizontal ? 'right' : 'top' },
          data: categories.map((cat) => valAt(cat, si)),
          itemStyle: { color: colors[si % colors.length], borderRadius: stacked ? 0 : radius },
          ...markStates(ctx, colors[si % colors.length], 'series'),
        }));

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
    ...animationOpts(ctx),
    grid: gridFor(ctx, legendShown),
    tooltip: { ...tooltipFor(theme), trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    xAxis: horizontal ? valAxis : catAxis,
    yAxis: horizontal ? catAxis : valAxis,
    series: echSeries as EChartsOption['series'],
  };
}
