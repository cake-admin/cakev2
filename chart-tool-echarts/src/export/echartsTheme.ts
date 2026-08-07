import type { ChartTheme, ColorConfig } from '../theme/chartTheme.types';
import { FONT } from '../charts/options/common';
import { CORNER_RADIUS } from '../charts/types';
import { serializeJs } from './optionToCode';

/** Palette length baked into a reusable theme (covers typical categorical charts). */
const THEME_COLOR_SLOTS = 12;

/**
 * Build a general (chart-agnostic) ECharts theme object suitable for
 * `echarts.registerTheme(name, theme)`. Structural chrome comes from the mode
 * (light / dark / hct); the `color` array is resolved from the panel's Color
 * theme variation.
 */
export function buildEchartsTheme(theme: ChartTheme, color: ColorConfig): Record<string, unknown> {
  const colors = theme.color.resolve(color, THEME_COLOR_SLOTS);
  const axis = {
    axisLine: { lineStyle: { color: theme.axis.line } },
    axisTick: { lineStyle: { color: theme.axis.line } },
    axisLabel: { color: theme.axis.label, fontFamily: FONT },
    splitLine: { lineStyle: { color: theme.grid.line } },
    nameTextStyle: { color: theme.text.secondary, fontFamily: FONT },
  };

  return {
    color: colors,
    backgroundColor: theme.surface.card,
    textStyle: { color: theme.text.primary, fontFamily: FONT },
    title: {
      textStyle: { color: theme.text.primary, fontFamily: FONT, fontWeight: 600 },
      subtextStyle: { color: theme.text.secondary, fontFamily: FONT },
    },
    legend: {
      textStyle: { color: theme.text.secondary, fontFamily: FONT },
      pageTextStyle: { color: theme.text.helper, fontFamily: FONT },
    },
    tooltip: {
      backgroundColor: theme.tooltip.bg,
      borderColor: theme.tooltip.border,
      borderWidth: 1,
      textStyle: { color: theme.tooltip.text, fontFamily: FONT },
      extraCssText: `border-radius:${theme.tooltip.radius}px;box-shadow:${theme.tooltip.shadow};`,
    },
    categoryAxis: { ...axis },
    valueAxis: { ...axis },
    logAxis: { ...axis },
    timeAxis: { ...axis },
    line: {
      itemStyle: { borderWidth: 1 },
      lineStyle: { width: theme.shape.strokeWidth },
      symbolSize: theme.shape.dotRadius * 2,
      symbol: 'circle',
      smooth: false,
    },
    bar: {
      itemStyle: { borderRadius: [CORNER_RADIUS, CORNER_RADIUS, 0, 0] },
    },
    pie: {
      itemStyle: {
        borderColor: theme.surface.card,
        borderWidth: 2,
        borderRadius: CORNER_RADIUS,
      },
    },
    scatter: {
      itemStyle: {},
      symbolSize: theme.shape.dotRadius * 2,
    },
    radar: {
      axisName: { color: theme.text.secondary, fontFamily: FONT },
      splitLine: { lineStyle: { color: theme.grid.line } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: theme.axis.line } },
    },
    gauge: {
      axisLine: { lineStyle: { color: [[1, theme.border.weak]] } },
      axisLabel: { color: theme.axis.label, fontFamily: FONT },
      detail: { color: theme.text.primary, fontFamily: FONT },
    },
  };
}

/** Theme name for `registerTheme` — e.g. `cake-light-categorical`. */
export function echartsThemeName(mode: string, variation: ColorConfig['variation']): string {
  return `cake-${mode}-${variation}`;
}

/**
 * Runnable snippet: register the theme, then init with it.
 * Chart-agnostic — pair with any option that omits hard-coded colors if desired.
 */
export function echartsThemeToCode(
  themeObj: Record<string, unknown>,
  name: string,
): string {
  const body = serializeJs(themeObj, '');
  return `import * as echarts from 'echarts';

const themeName = ${JSON.stringify(name)};

echarts.registerTheme(themeName, ${body});

// Mount: echarts.init(document.getElementById('chart'), themeName);
// Then chart.setOption(yourOption);`;
}
