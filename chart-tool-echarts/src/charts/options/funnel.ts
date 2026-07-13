import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import {
  animationOpts,
  FONT,
  fs,
  headerGraphic,
  headerTopReserve,
  legendFor,
  markStates,
  px,
  readableText,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  type ChartContext,
} from './common';

/** Funnel — partition slices as descending stages. */
export function buildFunnel(ctx: ChartContext): EChartsOption {
  const data = isPartition(ctx.data) ? ctx.data : { kind: 'partition' as const, slices: [] };
  const slices = data.slices;
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, slices.length);
  const legendShown = style.showLegend && slices.length > 0;
  const maxV = Math.max(1, ...slices.map((s) => s.value));

  const items = slices.map((s, i) => {
    const color = colors[i % colors.length];
    return {
      name: s.label,
      value: s.value,
      itemStyle: { color },
      label: { color: readableText(color) },
      ...markStates(ctx, color),
    };
  });

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { ...tooltipFor(theme), trigger: 'item', formatter: '{b}: {c}' },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    series: [
      {
        type: 'funnel',
        left: '12%',
        right: '12%',
        top: headerTopReserve(ctx) || px(ctx, 20),
        bottom: px(ctx, legendShown && style.legendPosition === 'bottom' ? 48 : 20),
        min: 0,
        max: maxV,
        sort: 'descending',
        gap: px(ctx, 2),
        selectedMode: SELECTED_MODE,
        label: { show: true, position: 'inside', fontFamily: FONT, fontSize: fs(ctx, 12), formatter: '{b}' },
        labelLine: { show: false },
        itemStyle: { borderColor: theme.surface.card, borderWidth: px(ctx, 1) },
        emphasis: { label: { fontSize: fs(ctx, 13) } },
        data: items,
      },
    ] as EChartsOption['series'],
  };
}
