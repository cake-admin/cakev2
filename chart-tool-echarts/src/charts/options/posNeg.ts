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
  px,
  tooltipFor,
  type ChartContext,
} from './common';

/**
 * Positive / Negative bar — a single series whose bars are colored by sign using
 * the semantic palette (positive = success, negative = error). A reference for
 * how meaning-based (not categorical) theming reads on a chart.
 */
export function buildPosNeg(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series[0];
  const categories = categoriesOf(data);
  const { style, theme } = ctx;
  const sem = theme.color.semantic;
  const r = px(ctx, CORNER_RADIUS);

  const bars = categories.map((cat) => {
    const v = series?.points.find((p) => p.x === cat)?.y ?? 0;
    const color = v >= 0 ? sem.positive : sem.negative;
    const st = theme.color.states(ctx.color, color);
    return {
      value: v,
      // Round the growing end only (top for positive, bottom for negative).
      itemStyle: { color, borderRadius: v >= 0 ? [r, r, 0, 0] : [0, 0, r, r] },
      emphasis: { itemStyle: { color: st.hover } },
      select: { itemStyle: { color: st.press } },
    };
  });

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    grid: gridFor(ctx, false),
    tooltip: { ...tooltipFor(theme), trigger: 'axis', axisPointer: { type: 'shadow' } },
    graphic: headerGraphic(ctx),
    xAxis: {
      type: 'category',
      data: categories,
      ...axisCommon(ctx, style.showAxes),
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      ...axisCommon(ctx, style.showAxes),
      splitLine: { show: style.showGrid, lineStyle: { color: theme.grid.line } },
    },
    series: [
      {
        type: 'bar',
        barMaxWidth: px(ctx, 52),
        data: bars,
        label: style.showDirectLabels
          ? {
              show: true,
              position: 'top',
              color: theme.text.secondary,
              fontFamily: FONT,
              fontSize: fs(ctx, 11),
              formatter: '{c}',
            }
          : { show: false },
        // Zero baseline drawn from the stronger divider token.
        markLine: {
          silent: true,
          symbol: 'none',
          lineStyle: { color: theme.axis.line, width: px(ctx, 1) },
          data: [{ yAxis: 0 }],
          label: { show: false },
        },
      },
    ] as EChartsOption['series'],
  };
}
