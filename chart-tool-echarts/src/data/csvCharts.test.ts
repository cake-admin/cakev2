// @vitest-environment node
// ECharts SSR needs no DOM; node env avoids jsdom's stub <canvas> throwing
// during text measurement (same reason as renderStaticSvg.test.tsx).
import { describe, it, expect } from 'vitest';
import { importText, toDataModel } from './csv';
import { renderChartSvg } from '../export/renderStaticSvg';
import { CHART_IDS, CHART_REGISTRY, type ChartId } from '../charts/registry';
import { DEFAULT_STYLE } from '../charts/types';

/** A plain four-column export — labels plus three numeric columns. */
const CSV = [
  'Region,Q1,Q2,Q3',
  'North,120,180,150',
  'South,90,140,110',
  'East,150,110,175',
  'West,60,95,80',
].join('\n');

/** A label unique to each chart's demo preset — none may survive an import. */
const PRESET_MARKERS = [
  'Desktop', // piePreset (pie, funnel, gauge)
  'Search', // treemapPreset
  'Q4', // barPreset categories (radialBar too)
  'Jan', // line / area / posNeg presets
  'Model A', // radarPreset
  'Mon', // heatmapPreset
  'Cash flow', // waterfallPreset
  'Product 1', // jitterPreset
];

/**
 * Charts that don't draw category text: `scatter` is xy (numeric axes by
 * design), and `jitter` maps ticks to categories through a formatter that only
 * fires on integer ticks — it renders blank category labels for its own preset
 * too, so that's a pre-existing quirk rather than anything import-specific.
 * Both are covered by the exact-value assertions in csv.test.ts instead.
 */
const NO_CATEGORY_TEXT: ChartId[] = ['scatter', 'jitter'];

describe('imported data drives every chart', () => {
  const out = importText(CSV);
  if (!out.ok) throw new Error(out.error);

  it.each(CHART_IDS)('renders %s from an imported CSV', (id) => {
    const def = CHART_REGISTRY[id];
    const { data } = toDataModel(out.table, out.mapping, def.dataKind);
    const svg = renderChartSvg({
      type: id,
      data,
      color: { variation: 'categorical' },
      style: { ...DEFAULT_STYLE, ...def.defaultStyle },
      mode: 'light',
    });

    expect(svg.startsWith('<svg')).toBe(true);
    expect(svg).toContain('<text');
    // The chart is drawing the import, not falling back to its preset.
    PRESET_MARKERS.forEach((marker) => expect(svg).not.toContain(marker));
    if (!NO_CATEGORY_TEXT.includes(id)) expect(svg).toContain('North');
  });
});
