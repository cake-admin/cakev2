import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import { animationOpts, FONT, fs, headerGraphic, px, seriesColors, type ChartContext } from './common';

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
  const zones = ramp.map(
    (c, i) => [Math.round(((i + 1) / ramp.length) * 100) / 100, c] as [number, string],
  );

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { show: false },
    graphic: headerGraphic(ctx),
    series: [
      {
        type: 'gauge',
        center: [cx, cy],
        radius: '76%',
        min: 0,
        max: total,
        startAngle: 210,
        endAngle: -30,
        progress: { show: !rampMode, width: px(ctx, 14), roundCap: true, itemStyle: { color: accent } },
        axisLine: { lineStyle: { width: px(ctx, 14), color: rampMode ? zones : [[1, theme.grid.line]] } },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { color: theme.text.helper, fontFamily: FONT, fontSize: fs(ctx, 10), distance: px(ctx, 18) },
        pointer: rampMode
          ? { show: true, width: px(ctx, 4), length: '62%', itemStyle: { color: theme.text.primary } }
          : { show: false },
        anchor: { show: false },
        title: { color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 13), offsetCenter: [0, '78%'] },
        detail: {
          valueAnimation: true,
          color: theme.text.primary,
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: fs(ctx, 28),
          offsetCenter: [0, '8%'],
          formatter: '{value}',
        },
        data: [{ value, name: slices[0]?.label ?? '' }],
      },
    ] as EChartsOption['series'],
  };
}
