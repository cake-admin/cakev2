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
 * Waterfall — accumulates a series of deltas into a running total, with each step
 * colored by sign from the semantic palette (positive = success, negative =
 * error). Built from a transparent stacked "base" + the visible delta bar.
 */
export function buildWaterfall(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series[0];
  const categories = categoriesOf(data);
  const { style, theme } = ctx;
  const sem = theme.color.semantic;
  const r = px(ctx, CORNER_RADIUS);

  const base: number[] = [];
  const delta: Array<Record<string, unknown>> = [];
  let cum = 0;
  for (const cat of categories) {
    const d = series?.points.find((p) => p.x === cat)?.y ?? 0;
    const start = cum;
    const end = cum + d;
    base.push(Math.min(start, end));
    const color = d >= 0 ? sem.positive : sem.negative;
    const st = theme.color.states(ctx.color, color);
    delta.push({
      value: Math.abs(d),
      itemStyle: { color, borderRadius: r },
      emphasis: { itemStyle: { color: st.hover } },
      select: { itemStyle: { color: st.press } },
    });
    cum = end;
  }

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    grid: gridFor(ctx, false),
    tooltip: { ...tooltipFor(theme), trigger: 'item' },
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
        stack: 'waterfall',
        silent: true,
        itemStyle: { color: 'transparent' },
        emphasis: { disabled: true },
        data: base,
      },
      {
        type: 'bar',
        stack: 'waterfall',
        barMaxWidth: px(ctx, 52),
        data: delta,
        label: style.showDirectLabels
          ? { show: true, position: 'top', color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 11) }
          : { show: false },
      },
    ] as EChartsOption['series'],
  };
}
