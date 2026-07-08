import type { EChartsOption } from 'echarts';
import { categoriesOf, isSeries } from '../../data/dataModel';
import {
  animationOpts,
  axisCommon,
  FONT,
  fs,
  gridFor,
  headerGraphic,
  legendFor,
  px,
  SELECTED_MODE,
  seriesColors,
  tooltipFor,
  type ChartContext,
} from './common';

function lineOption(ctx: ChartContext, area: boolean): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const series = data.series;
  const categories = categoriesOf(data);
  const { style, theme } = ctx;
  const colors = seriesColors(ctx, series.length);
  const legendShown = style.showLegend && series.length > 1;
  const smooth = style.lineStyle === 'smooth';
  const step: false | 'middle' = style.lineStyle === 'step' ? 'middle' : false;

  const echSeries = series.map((s, si) => {
    const color = colors[si % colors.length];
    const st = theme.color.states(ctx.color, color);
    return {
      type: 'line' as const,
      name: s.name,
      data: categories.map((cat) => s.points.find((p) => p.x === cat)?.y ?? 0),
      smooth,
      step,
      symbol: 'circle',
      symbolSize: px(ctx, 7),
      showSymbol: true,
      selectedMode: SELECTED_MODE,
      lineStyle: { width: px(ctx, style.strokeWidth), color },
      itemStyle: { color, borderColor: theme.surface.card, borderWidth: px(ctx, 1.5) },
      areaStyle: area ? { color, opacity: 0.18 } : undefined,
      emphasis: {
        focus: 'series' as const,
        lineStyle: { color: st.hover, width: px(ctx, style.strokeWidth + 1) },
        itemStyle: { color: st.hover },
        areaStyle: area ? { color: st.hover, opacity: 0.24 } : undefined,
      },
      select: {
        lineStyle: { color: st.press },
        itemStyle: { color: st.press },
        areaStyle: area ? { color: st.press, opacity: 0.28 } : undefined,
      },
      label: style.showDirectLabels
        ? { show: true, color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 11), position: 'top' as const }
        : { show: false },
    };
  });

  return {
    textStyle: { fontFamily: FONT },
    ...animationOpts(ctx),
    grid: gridFor(ctx, legendShown),
    tooltip: { ...tooltipFor(theme), trigger: 'axis' },
    legend: legendFor(ctx, legendShown),
    graphic: headerGraphic(ctx),
    xAxis: {
      type: 'category',
      data: categories,
      boundaryGap: false,
      ...axisCommon(ctx, style.showAxes),
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      ...axisCommon(ctx, style.showAxes),
      splitLine: { show: style.showGrid, lineStyle: { color: theme.grid.line } },
    },
    series: echSeries as EChartsOption['series'],
  };
}

export function buildLine(ctx: ChartContext): EChartsOption {
  return lineOption(ctx, false);
}

export function buildArea(ctx: ChartContext): EChartsOption {
  return lineOption(ctx, true);
}
