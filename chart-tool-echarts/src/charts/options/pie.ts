import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import {
  animationOpts,
  FONT,
  fs,
  headerGraphic,
  legendFor,
  markStates,
  px,
  radialCenter,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  type ChartContext,
} from './common';

/** Pie family — pie | donut | half | nested | polar(rose). */
export function buildPie(ctx: ChartContext): EChartsOption {
  const data = isPartition(ctx.data) ? ctx.data : { kind: 'partition' as const, slices: [] };
  const slices = data.slices;
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, slices.length);
  const legendShown = style.showLegend && slices.length > 0;
  const center = radialCenter(ctx, legendShown);
  const variant = style.circularStyle;
  const ratio = Math.min(0.85, Math.max(0, style.donutInnerRatio));
  const inner = `${Math.round(ratio * 70)}%`;

  const items = slices.map((s, i) => ({
    name: s.label,
    value: s.value,
    itemStyle: { color: colors[i % colors.length] },
    ...markStates(ctx, colors[i % colors.length]),
  }));

  const label = style.showDirectLabels
    ? { show: true, color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 11), formatter: '{b}: {c}' }
    : { show: false };
  const common = {
    type: 'pie' as const,
    center,
    avoidLabelOverlap: true,
    selectedMode: SELECTED_MODE,
    selectedOffset: px(ctx, 6),
    label,
    labelLine: { show: style.showDirectLabels, lineStyle: { color: theme.axis.line } },
    itemStyle: { borderColor: theme.surface.card, borderWidth: px(ctx, 2) },
    emphasis: { focus: 'self' as const },
  };

  let series: unknown;
  if (variant === 'pie') {
    series = [{ ...common, radius: '70%', data: items }];
  } else if (variant === 'donut') {
    series = [{ ...common, radius: [inner, '70%'], data: items }];
  } else if (variant === 'half') {
    series = [
      {
        ...common,
        radius: [inner, '70%'],
        center: [center[0], '78%'],
        startAngle: 180,
        endAngle: 360,
        data: items,
      },
    ];
  } else if (variant === 'nested') {
    series = [
      { ...common, radius: ['25%', '42%'], label: { show: false }, labelLine: { show: false }, data: items },
      { ...common, radius: ['50%', '70%'], data: items },
    ];
  } else {
    // polar rose
    series = [{ ...common, radius: ['18%', '72%'], roseType: 'area', data: items }];
  }

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { ...tooltipFor(theme), trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    series: series as EChartsOption['series'],
  };
}
