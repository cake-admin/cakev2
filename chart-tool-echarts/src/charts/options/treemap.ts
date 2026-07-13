import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import { animationOpts, EDGE_PAD, FONT, fs, headerGraphic, headerLeftReserve, headerTopReserve, px, readableText, seriesColors, tooltipFor, type ChartContext } from './common';

/** Treemap — flat slices sized by value (squarified). */
export function buildTreemap(ctx: ChartContext): EChartsOption {
  const data = isPartition(ctx.data) ? ctx.data : { kind: 'partition' as const, slices: [] };
  const slices = data.slices;
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, slices.length);

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { ...tooltipFor(theme), trigger: 'item', formatter: '{b}: {c}' },
    graphic: headerGraphic(ctx),
    series: [
      {
        type: 'treemap',
        roam: false,
        nodeClick: false,
        breadcrumb: { show: false },
        top: headerTopReserve(ctx) || px(ctx, EDGE_PAD),
        left: headerLeftReserve(ctx) || px(ctx, EDGE_PAD),
        right: px(ctx, EDGE_PAD),
        bottom: px(ctx, EDGE_PAD),
        itemStyle: { borderColor: theme.surface.card, borderWidth: px(ctx, 2), gapWidth: px(ctx, 2) },
        label: {
          show: true,
          fontFamily: FONT,
          fontSize: fs(ctx, 12),
          formatter: style.showDirectLabels ? '{b}\n{c}' : '{b}',
        },
        data: slices.map((s, i) => {
          const color = colors[i % colors.length];
          const st = theme.color.states(ctx.color, color);
          return {
            name: s.label,
            value: s.value,
            itemStyle: { color },
            label: { color: readableText(color) },
            emphasis: { itemStyle: { color: st.hover } },
          };
        }),
      },
    ] as EChartsOption['series'],
  };
}
