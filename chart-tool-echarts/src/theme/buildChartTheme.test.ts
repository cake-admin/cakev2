import { describe, it, expect } from 'vitest';
import { buildChartTheme } from './buildChartTheme';
import { TOKENS } from '../tokens/loadTokens';

const HEX = /^#[0-9a-f]{6}$/i;

describe('buildChartTheme', () => {
  it('resolves every structural color from tokens (no #000000 fallback)', () => {
    const t = buildChartTheme(TOKENS, 'light');
    const colors = [
      t.surface.canvas,
      t.surface.card,
      t.text.primary,
      t.text.secondary,
      t.axis.line,
      t.grid.line,
      t.border.weak,
      t.tooltip.bg,
      t.tooltip.text,
      t.focus,
      t.color.base.primary,
      t.color.base.secondary,
    ];
    colors.forEach((c) => {
      expect(c).toMatch(HEX);
      expect(c.toLowerCase()).not.toBe('#000000');
    });
  });

  it('light and dark produce different surfaces', () => {
    expect(buildChartTheme(TOKENS, 'light').surface.canvas).not.toBe(
      buildChartTheme(TOKENS, 'dark').surface.canvas,
    );
  });
});
