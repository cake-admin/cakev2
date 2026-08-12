import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import { SEGMENT_GAP } from '../types';
import { animationOpts, FONT, fs, headerGraphic, px, seriesColors, type ChartContext } from './common';

type ColorStop = [number, string];

/** Hidden chrome shared by silent zone / end-cap overlay gauges. */
const SILENT_GAUGE_CHROME = {
  progress: { show: false },
  pointer: { show: false },
  anchor: { show: false },
  axisTick: { show: false },
  splitLine: { show: false },
  axisLabel: { show: false },
  title: { show: false },
  detail: { show: false },
  data: [{ value: 1 }],
} as const;

/**
 * One silent single-color arc for a ramp zone. roundCap stays false so seams
 * between zones stay square; outer tips are painted by roundEndCap overlays.
 */
function zoneArc(opts: {
  center: [string, string];
  radius: string;
  startAngle: number;
  endAngle: number;
  width: number;
  color: string;
}): Record<string, unknown> {
  return {
    type: 'gauge',
    center: opts.center,
    radius: opts.radius,
    min: 0,
    max: 1,
    startAngle: opts.startAngle,
    endAngle: opts.endAngle,
    clockwise: true,
    silent: true,
    z: 2,
    animation: false,
    axisLine: {
      roundCap: false,
      lineStyle: { width: opts.width, color: [[1, opts.color]] as ColorStop[] },
    },
    ...SILENT_GAUGE_CHROME,
  };
}

/**
 * Short silent gauge whose axisLine is a single-color Sausage (roundCap).
 * Used to paint rounded outer tips on top of square-seamed zone arcs.
 */
function roundEndCap(opts: {
  center: [string, string];
  radius: string;
  startAngle: number;
  endAngle: number;
  width: number;
  color: string;
}): Record<string, unknown> {
  return {
    type: 'gauge',
    center: opts.center,
    radius: opts.radius,
    min: 0,
    max: 1,
    startAngle: opts.startAngle,
    endAngle: opts.endAngle,
    clockwise: true,
    silent: true,
    z: 3,
    animation: false,
    axisLine: {
      roundCap: true,
      lineStyle: { width: opts.width, color: [[1, opts.color]] as ColorStop[] },
    },
    ...SILENT_GAUGE_CHROME,
  };
}

/** Gauge — first slice's value against the total (a KPI dial). */
export function buildGauge(ctx: ChartContext): EChartsOption {
  const data = isPartition(ctx.data) ? ctx.data : { kind: 'partition' as const, slices: [] };
  const slices = data.slices;
  const { theme, header, color } = ctx;
  const total = Math.max(1, slices.reduce((a, s) => a + s.value, 0));
  const value = slices[0]?.value ?? 0;
  const accent = seriesColors(ctx, 1)[0];
  const cx = header?.show && header.placement === 'left' ? '58%' : '50%';
  const cy = header?.show && header.placement === 'top' ? '62%' : '56%';
  const center: [string, string] = [cx, cy];
  const radius = '76%';
  const startAngle = 210;
  const endAngle = -30;
  const span = startAngle - endAngle; // 240° clockwise arc
  const barWidth = px(ctx, 14);
  const gapPx = px(ctx, SEGMENT_GAP);
  // Map SEGMENT_GAP px onto degrees along the arc (radius ≈ 76% of ~200px @1×).
  const radiusPx = Math.max(1, px(ctx, 152));
  const gapDeg = Math.min(4, Math.max(0.5, (gapPx / radiusPx) * (180 / Math.PI)));
  // ~4° tip overlays — enough for a Sausage cap without eating zone seams.
  const capDeg = 4;

  // A ramp variation turns the dial into a colored scale with a pointer;
  // otherwise it's a single-color progress arc on a grey track.
  const rampMode =
    color.variation === 'sequential' || color.variation === 'semantic' || color.variation === 'diverging';
  const ramp =
    color.variation === 'diverging'
      ? theme.color.divergingRamp
      : color.variation === 'semantic'
        ? theme.color.semanticRamp
        : theme.color.sequentialRamp;
  const rawZones: ColorStop[] = ramp.map(
    (c, i) => [Math.round(((i + 1) / ramp.length) * 100) / 100, c],
  );
  const startColor = rawZones[0]?.[1] ?? accent;
  const endColor = rawZones[rawZones.length - 1]?.[1] ?? accent;

  const main = {
    type: 'gauge' as const,
    center,
    radius,
    min: 0,
    max: total,
    startAngle,
    endAngle,
    progress: {
      show: !rampMode,
      width: barWidth,
      roundCap: true,
      itemStyle: { color: accent },
    },
    axisLine: rampMode
      ? {
          // Track is painted by per-zone silent series (true angular gutters).
          show: false,
        }
      : {
          roundCap: true,
          lineStyle: { width: barWidth, color: [[1, theme.grid.line]] as ColorStop[] },
        },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: { color: theme.text.helper, fontFamily: FONT, fontSize: fs(ctx, 10), distance: px(ctx, 18) },
    // Short needle + detail below the hub so the value is not covered.
    pointer: rampMode
      ? { show: true, width: px(ctx, 4), length: '48%', itemStyle: { color: theme.text.primary } }
      : { show: false },
    anchor: { show: false },
    title: { color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 13), offsetCenter: [0, '78%'] },
    detail: {
      valueAnimation: true,
      color: theme.text.primary,
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: fs(ctx, 28),
      offsetCenter: [0, rampMode ? '36%' : '8%'],
      formatter: '{value}',
    },
    data: [{ value, name: slices[0]?.label ?? '' }],
  };

  const series: unknown[] = [main];

  if (rampMode && rawZones.length > 0) {
    const gapFrac = rawZones.length > 1 ? gapDeg / span : 0;
    let prev = 0;
    for (let i = 0; i < rawZones.length; i++) {
      const [end, zoneColor] = rawZones[i];
      const clampedEnd = Math.min(1, Math.max(prev, end));
      const from = prev;
      const to = i < rawZones.length - 1 ? Math.max(from, clampedEnd - gapFrac) : clampedEnd;
      if (to > from) {
        series.push(
          zoneArc({
            center,
            radius,
            startAngle: startAngle - from * span,
            endAngle: startAngle - to * span,
            width: barWidth,
            color: zoneColor,
          }),
        );
      }
      prev = clampedEnd;
    }

    series.push(
      roundEndCap({
        center,
        radius,
        startAngle,
        endAngle: startAngle - capDeg,
        width: barWidth,
        color: startColor,
      }),
      roundEndCap({
        center,
        radius,
        startAngle: endAngle + capDeg,
        endAngle,
        width: barWidth,
        color: endColor,
      }),
    );
  }

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { show: false },
    graphic: headerGraphic(ctx),
    series: series as EChartsOption['series'],
  };
}
