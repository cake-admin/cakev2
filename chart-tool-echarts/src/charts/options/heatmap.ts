import type { EChartsOption } from 'echarts';
import { categoriesOf, isSeries } from '../../data/dataModel';
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

/** Heatmap — series matrix (columns = categories, rows = series, cell = value). */
export function buildHeatmap(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series;
  const categories = categoriesOf(data);
  const rows = series.map((s) => s.name);
  const { style, theme } = ctx;
  const legendShown = style.showLegend;

  const cells: Array<[number, number, number]> = [];
  const values: number[] = [];
  series.forEach((s, ri) =>
    categories.forEach((cat, ci) => {
      const v = s.points.find((p) => p.x === cat)?.y ?? 0;
      cells.push([ci, ri, v]);
      values.push(v);
    }),
  );
  const minV = Math.min(0, ...values);
  const maxV = Math.max(1, ...values);
  // Heatmap is value-encoded: use whichever ramp the variation selects.
  const v = ctx.color.variation;
  const ramp =
    v === 'diverging'
      ? theme.color.divergingRamp
      : v === 'semantic'
        ? theme.color.semanticRamp
        : theme.color.sequentialRamp;

  const grid = { ...(gridFor(ctx, false) as object), bottom: px(ctx, legendShown ? 56 : 24) };

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { ...tooltipFor(theme), trigger: 'item' },
    graphic: headerGraphic(ctx),
    grid,
    xAxis: {
      type: 'category',
      data: categories,
      ...axisCommon(ctx, true),
      splitArea: { show: true },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'category',
      data: rows,
      ...axisCommon(ctx, true),
      splitArea: { show: true },
      splitLine: { show: false },
    },
    visualMap: {
      show: legendShown,
      min: minV,
      max: maxV,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: px(ctx, 8),
      inRange: { color: ramp },
      textStyle: { color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 11) },
    },
    series: [
      {
        type: 'heatmap',
        data: cells,
        label: { show: style.showDirectLabels, color: theme.text.primary, fontFamily: FONT, fontSize: fs(ctx, 11) },
        itemStyle: { borderColor: theme.surface.card, borderWidth: px(ctx, 2) },
        emphasis: { itemStyle: { borderColor: theme.text.primary, borderWidth: px(ctx, 1) } },
      },
    ] as EChartsOption['series'],
  };
}
