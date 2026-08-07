import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import { SEGMENT_GAP } from '../types';
import { animationOpts, FONT, fs, headerGraphic, px, seriesColors, type ChartContext } from './common';

type ColorStop = [number, string];

/**
 * Insert card-colored seams between axisLine color stops so multi-zone gauges
 * read like pie slices (SEGMENT_GAP ≈ 2px). ECharts axisLine can't stroke
 * sectors, so gaps are modeled as thin stops of the card surface color.
 */
function zonesWithSeams(zones: ColorStop[], seamColor: string, gapFrac: number): ColorStop[] {
  if (zones.length <= 1 || gapFrac <= 0) return zones;
  const out: ColorStop[] = [];
  let prev = 0;
  for (let i = 0; i < zones.length; i++) {
    const [end, color] = zones[i];
    const clampedEnd = Math.min(1, Math.max(prev, end));
    if (i === zones.length - 1) {
      out.push([clampedEnd, color]);
      break;
    }
    const colorEnd = Math.max(prev, clampedEnd - gapFrac);
    out.push([colorEnd, color]);
    out.push([clampedEnd, seamColor]);
    prev = clampedEnd;
  }
  return out;
}

/**
 * Short silent gauge whose axisLine is a single-color Sausage (roundCap).
 * Used to paint rounded outer tips on top of a multi-stop Sector axisLine
 * (roundCap false), so zone seams stay sharp while arc ends read as caps.
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
    progress: { show: false },
    pointer: { show: false },
    anchor: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: { show: false },
    title: { show: false },
    detail: { show: false },
    data: [{ value: 1 }],
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
  const barWidth = px(ctx, 14);
  const gap = px(ctx, SEGMENT_GAP);
  // ~240° arc; gapFrac maps SEGMENT_GAP px onto the unit color-stop range.
  const gapFrac = Math.min(0.04, Math.max(0.004, gap / 280));
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
  const zones = rampMode
    ? zonesWithSeams(rawZones, theme.surface.card, gapFrac)
    : ([[1, theme.grid.line]] as ColorStop[]);
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
    axisLine: {
      // Multi-stop axisLine uses Sector (square seams). roundCap would turn
      // every stop into a Sausage and soften the 2px card gaps — keep false
      // in ramp mode; single-track gauges can round the whole arc.
      roundCap: !rampMode,
      lineStyle: { width: barWidth, color: zones },
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
  if (rampMode) {
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
