import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import { CORNER_RADIUS, SEGMENT_GAP } from '../types';
import {
  animationOpts,
  FONT,
  fs,
  headerGraphic,
  legendFor,
  markStates,
  px,
  radialFit,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  type ChartContext,
} from './common';
import { fillStyle } from './wireframe';

/** Pie family — pie | donut | half | nested | polar(rose). */
export function buildPie(ctx: ChartContext): EChartsOption {
  const data = isPartition(ctx.data) ? ctx.data : { kind: 'partition' as const, slices: [] };
  const slices = data.slices;
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, slices.length);
  const legendShown = style.showLegend && slices.length > 0;
  const fit = radialFit(ctx, legendShown);
  const center = fit.center;
  const variant = style.circularStyle;
  // Cap the outer radius so a top header never crowds the ring; scale the whole
  // family (inner rings, nested/polar radii) by the same factor to keep shape.
  const rOut = Math.min(70, fit.outer);
  const k = rOut / 70;
  const ratio = Math.min(0.85, Math.max(0, style.donutInnerRatio));
  const inner = `${Math.round(ratio * rOut)}%`;
  const gap = px(ctx, SEGMENT_GAP);
  const corner = px(ctx, CORNER_RADIUS);

  const items = slices.map((s, i) => {
    const color = colors[i % colors.length];
    return {
      name: s.label,
      value: s.value,
      itemStyle: fillStyle(ctx, color, i),
      ...markStates(ctx, color),
    };
  });

  const label = style.showDirectLabels
    ? { show: true, color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 11), formatter: '{b}: {c}' }
    : { show: false };
  // SEGMENT_GAP via card-colored border (~2px seam). padAngle is degrees and
  // radius-dependent, so borderWidth is the reliable pixel gap.
  const common = {
    type: 'pie' as const,
    center,
    avoidLabelOverlap: true,
    selectedMode: SELECTED_MODE,
    selectedOffset: px(ctx, 6),
    label,
    labelLine: { show: style.showDirectLabels, lineStyle: { color: theme.axis.line } },
    itemStyle: {
      borderColor: theme.surface.card,
      borderWidth: gap,
      borderRadius: corner,
    },
    emphasis: { focus: 'self' as const },
  };

  const pct = (n: number) => `${Math.round(n * k)}%`;
  let series: unknown;
  if (variant === 'pie') {
    series = [{ ...common, radius: `${rOut}%`, data: items }];
  } else if (variant === 'donut') {
    series = [{ ...common, radius: [inner, `${rOut}%`], data: items }];
  } else if (variant === 'half') {
    series = [
      {
        ...common,
        radius: [inner, `${rOut}%`],
        center: [center[0], '78%'],
        startAngle: 180,
        endAngle: 360,
        data: items,
      },
    ];
  } else if (variant === 'nested') {
    series = [
      { ...common, radius: [pct(25), pct(42)], label: { show: false }, labelLine: { show: false }, data: items },
      { ...common, radius: [pct(50), `${rOut}%`], data: items },
    ];
  } else {
    // polar rose
    series = [{ ...common, radius: [pct(18), pct(72)], roseType: 'area', data: items }];
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
