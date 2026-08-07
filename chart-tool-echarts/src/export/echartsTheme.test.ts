// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { buildChartTheme } from '../theme/buildChartTheme';
import { TOKENS } from '../tokens/loadTokens';
import {
  buildEchartsTheme,
  echartsThemeName,
  echartsThemeToCode,
} from './echartsTheme';

describe('echarts theme export', () => {
  it('builds a registerTheme-ready object from mode + color variation', () => {
    const theme = buildChartTheme(TOKENS, 'dark');
    const color = { variation: 'categorical' as const };
    const obj = buildEchartsTheme(theme, color);

    expect(Array.isArray(obj.color)).toBe(true);
    expect((obj.color as string[]).length).toBeGreaterThanOrEqual(8);
    expect(obj.backgroundColor).toBe(theme.surface.card);
    expect((obj.textStyle as { fontFamily: string }).fontFamily).toContain('Rookery');
    expect(obj.tooltip).toBeTruthy();
    expect(obj.categoryAxis).toBeTruthy();
  });

  it('emits runnable registerTheme code', () => {
    const theme = buildChartTheme(TOKENS, 'light');
    const color = { variation: 'secondary' as const };
    const name = echartsThemeName('light', color.variation);
    const code = echartsThemeToCode(buildEchartsTheme(theme, color), name);

    expect(name).toBe('cake-light-secondary');
    expect(code).toContain('echarts.registerTheme');
    expect(code).toContain(name);
    expect(code).toContain('echarts.init');

    const body = code.replace(/^import .*$/m, '');
    expect(() => new Function('echarts', body)).not.toThrow();
  });
});
