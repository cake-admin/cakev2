// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { buildBar } from './bar';
import { DEFAULT_STYLE, DEFAULT_HEADER } from '../types';
import { buildChartTheme } from '../../theme/buildChartTheme';
import { TOKENS } from '../../tokens/loadTokens';
import { barPreset } from '../../data/presets';
import type { ChartContext } from './common';

const theme = buildChartTheme(TOKENS, 'light');

function ctx(overrides: Partial<ChartContext> = {}): ChartContext {
  return {
    type: 'bar',
    data: barPreset(),
    color: { variation: 'categorical' },
    style: { ...DEFAULT_STYLE, barMode: 'grouped', showLegend: true },
    header: { ...DEFAULT_HEADER },
    theme,
    ...overrides,
  };
}

describe('bar legend', () => {
  it('lists each series once with matching series colors', () => {
    const option = buildBar(ctx());
    const series = option.series as Array<{ name: string; color: string; itemStyle?: { color?: string } }>;
    const legend = option.legend as { show: boolean; data: string[] };

    expect(legend.show).toBe(true);
    expect(legend.data).toEqual(series.map((s) => s.name));
    expect(new Set(legend.data).size).toBe(legend.data.length);

    const palette = option.color as string[];
    expect(palette).toHaveLength(series.length);

    series.forEach((s, i) => {
      expect(s.color).toBe(palette[i]);
      expect(s.itemStyle?.color).toBe(palette[i]);
    });
  });

  it('hides the legend for single-series (per-category) bars', () => {
    const option = buildBar(
      ctx({
        data: {
          kind: 'series',
          series: [
            {
              id: 's1',
              name: 'Only',
              points: [
                { x: 'A', y: 1 },
                { x: 'B', y: 2 },
              ],
            },
          ],
        },
        style: { ...DEFAULT_STYLE, barMode: 'stacked', showLegend: true },
      }),
    );
    expect((option.legend as { show: boolean }).show).toBe(false);
  });

  it('keeps stacked outer radius only on the top segment', () => {
    const option = buildBar(
      ctx({
        style: { ...DEFAULT_STYLE, barMode: 'stacked', orientation: 'vertical', showLegend: true },
      }),
    );
    const series = option.series as Array<{ data: Array<{ itemStyle?: { borderRadius?: number | number[] } }> }>;
    const firstCat = 0;
    const bottom = series[0].data[firstCat].itemStyle?.borderRadius;
    const top = series[series.length - 1].data[firstCat].itemStyle?.borderRadius;
    // Bottom series of a full stack should be sharp (0).
    expect(bottom).toBe(0);
    expect(top).toEqual([12, 12, 0, 0]);
  });
});
