import type { EChartsOption } from 'echarts';
import { categoriesOf, isSeries } from '../../data/dataModel';
import {
  animationOpts,
  FONT,
  fs,
  headerGraphic,
  legendFor,
  px,
  radialCenter,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  type ChartContext,
} from './common';

/** Radar / spider — one indicator per category, one polygon per series. */
export function buildRadar(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series;
  const axes = categoriesOf(data);
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, series.length);
  const legendShown = style.showLegend && series.length > 0;
  const maxVal = Math.max(1, ...series.flatMap((s) => s.points.map((p) => p.y)));

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    tooltip: { ...tooltipFor(theme), trigger: 'item' },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    radar: {
      center: radialCenter(ctx, legendShown),
      radius: '66%',
      indicator: axes.map((name) => ({ name, max: maxVal })),
      axisName: { color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 11) },
      axisLine: { lineStyle: { color: theme.grid.line } },
      splitLine: { lineStyle: { color: theme.grid.line } },
      splitArea: { show: false },
    },
    series: [
      {
        type: 'radar',
        symbolSize: px(ctx, 5),
        selectedMode: SELECTED_MODE,
        emphasis: { focus: 'series' },
        data: series.map((s, si) => {
          const c = colors[si % colors.length];
          const st = theme.color.states(ctx.color, c);
          return {
            name: s.name,
            value: axes.map((a) => s.points.find((p) => p.x === a)?.y ?? 0),
            itemStyle: { color: c },
            lineStyle: { color: c, width: px(ctx, 2) },
            areaStyle: { color: c, opacity: 0.18 },
            emphasis: {
              itemStyle: { color: st.hover },
              lineStyle: { color: st.hover, width: px(ctx, 3) },
              areaStyle: { color: st.hover, opacity: 0.26 },
            },
            select: {
              itemStyle: { color: st.press },
              lineStyle: { color: st.press },
              areaStyle: { color: st.press, opacity: 0.3 },
            },
          };
        }),
      },
    ] as EChartsOption['series'],
  };
}
