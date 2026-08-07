import type { DataKind, DataModel } from '../data/dataModel';
import {
  areaPreset,
  barPreset,
  heatmapPreset,
  jitterPreset,
  linePreset,
  piePreset,
  posNegPreset,
  radarPreset,
  scatterPreset,
  treemapPreset,
  waterfallPreset,
} from '../data/presets';
import type { Variation } from '../theme/chartTheme.types';
import type { StyleConfig } from './types';

export type ChartId =
  | 'bar'
  | 'line'
  | 'area'
  | 'pie'
  | 'scatter'
  | 'jitter'
  | 'radar'
  | 'treemap'
  | 'funnel'
  | 'gauge'
  | 'heatmap'
  | 'radialBar'
  | 'posNegBar'
  | 'waterfall';

/**
 * Catalog of chart types. Registering a new one = adding an entry here plus a
 * builder case in `buildOption`. `core: true` shows in the picker by default;
 * the rest are discoverable through the searchable "＋ More charts" catalog.
 */
export interface ChartDefinition {
  id: ChartId;
  label: string;
  /** One-line description shown in the catalog search. */
  description: string;
  /** Catalog grouping for the search list. */
  group: string;
  dataKind: DataKind;
  preset: () => DataModel;
  defaultStyle: Partial<StyleConfig>;
  exportName: string;
  /** Shown in the default picker (vs. added via the catalog). */
  core: boolean;
  /**
   * Color themes floated to the top of the Color theme dropdown with a
   * "Recommended" badge. Derived from how each builder consumes variations
   * (ramps for heatmaps/gauges, categorical for part-to-whole, etc.).
   */
  recommendedThemes: Variation[];
}

export const CHART_REGISTRY: Record<ChartId, ChartDefinition> = {
  bar: { id: 'bar', label: 'Bar / Column', description: 'Compare values across categories.', group: 'Bar & column', dataKind: 'series', preset: barPreset, defaultStyle: { showGrid: true }, exportName: 'bar-chart', core: true, recommendedThemes: ['categorical'] },
  line: { id: 'line', label: 'Line', description: 'Trends over an ordered axis.', group: 'Lines', dataKind: 'series', preset: linePreset, defaultStyle: { lineStyle: 'smooth' }, exportName: 'line-chart', core: true, recommendedThemes: ['categorical', 'sequential'] },
  area: { id: 'area', label: 'Area', description: 'Line with a filled magnitude.', group: 'Lines', dataKind: 'series', preset: areaPreset, defaultStyle: { lineStyle: 'smooth' }, exportName: 'area-chart', core: true, recommendedThemes: ['categorical', 'sequential'] },
  pie: { id: 'pie', label: 'Pie / Donut', description: 'Part-to-whole (pie, donut, half, nested, polar).', group: 'Part-to-whole', dataKind: 'partition', preset: piePreset, defaultStyle: { showAxes: false, showGrid: false, donutInnerRatio: 0.6, showDirectLabels: true }, exportName: 'pie-chart', core: true, recommendedThemes: ['categorical'] },
  scatter: { id: 'scatter', label: 'Scatter', description: 'X/Y relationships, optional bubbles.', group: 'Distribution', dataKind: 'xy', preset: scatterPreset, defaultStyle: { scatterStyle: 'bubble' }, exportName: 'scatter-chart', core: true, recommendedThemes: ['categorical'] },
  jitter: { id: 'jitter', label: 'Jitter / Strip', description: 'Categorical scatter / distribution cloud.', group: 'Distribution', dataKind: 'series', preset: jitterPreset, defaultStyle: { showGrid: true, pointRadius: 5 }, exportName: 'jitter-chart', core: true, recommendedThemes: ['categorical'] },
  radar: { id: 'radar', label: 'Radar', description: 'Compare series across many axes.', group: 'Multivariate', dataKind: 'series', preset: radarPreset, defaultStyle: { showAxes: false, showGrid: false }, exportName: 'radar-chart', core: true, recommendedThemes: ['categorical'] },
  treemap: { id: 'treemap', label: 'Treemap', description: 'Nested rectangles sized by value.', group: 'Part-to-whole', dataKind: 'partition', preset: treemapPreset, defaultStyle: { showAxes: false, showGrid: false, showDirectLabels: true }, exportName: 'treemap-chart', core: true, recommendedThemes: ['categorical'] },

  funnel: { id: 'funnel', label: 'Funnel', description: 'Stages that taper by value (pipeline / conversion).', group: 'Part-to-whole', dataKind: 'partition', preset: piePreset, defaultStyle: { showAxes: false, showGrid: false }, exportName: 'funnel-chart', core: false, recommendedThemes: ['sequential', 'categorical'] },
  gauge: { id: 'gauge', label: 'Gauge', description: 'A single KPI dial (first value vs. total).', group: 'KPI', dataKind: 'partition', preset: piePreset, defaultStyle: { showAxes: false, showGrid: false, showLegend: false }, exportName: 'gauge-chart', core: false, recommendedThemes: ['semantic', 'sequential'] },
  heatmap: { id: 'heatmap', label: 'Heatmap', description: 'Matrix of categories × series, color = value.', group: 'Distribution', dataKind: 'series', preset: heatmapPreset, defaultStyle: { showAxes: true, showGrid: false }, exportName: 'heatmap-chart', core: false, recommendedThemes: ['sequential', 'diverging', 'semantic'] },
  radialBar: { id: 'radialBar', label: 'Radial bar', description: 'Bars radiating around a polar circle.', group: 'Bar & column', dataKind: 'series', preset: barPreset, defaultStyle: { showAxes: false, showGrid: false, showLegend: false }, exportName: 'radial-bar-chart', core: false, recommendedThemes: ['categorical'] },

  posNegBar: { id: 'posNegBar', label: 'Positive / Negative', description: 'Bars colored by sign from semantic tokens (positive/negative).', group: 'Semantic', dataKind: 'series', preset: posNegPreset, defaultStyle: { showGrid: true, showLegend: false }, exportName: 'pos-neg-bar', core: false, recommendedThemes: ['semantic'] },
  waterfall: { id: 'waterfall', label: 'Waterfall', description: 'Running total of semantic positive/negative deltas.', group: 'Semantic', dataKind: 'series', preset: waterfallPreset, defaultStyle: { showGrid: true, showLegend: false }, exportName: 'waterfall-chart', core: false, recommendedThemes: ['semantic'] },
};

/**
 * Chart configs that read only the first series. The data editor collapses to a
 * single Value column for these, and the CSV import warns that extra value
 * columns won't be drawn — both must agree, hence one definition.
 */
export function usesSingleSeries(id: ChartId, style: Pick<StyleConfig, 'barMode'>): boolean {
  return id === 'posNegBar' || id === 'waterfall' || (id === 'bar' && style.barMode === 'single');
}

/** Every chart id (used by the gallery + export coverage tests). */
export const CHART_IDS: ChartId[] = [
  'bar',
  'line',
  'area',
  'pie',
  'scatter',
  'jitter',
  'radar',
  'treemap',
  'funnel',
  'gauge',
  'heatmap',
  'radialBar',
  'posNegBar',
  'waterfall',
];

/** Charts shown in the picker by default (the rest are added via the catalog). */
export const CORE_CHART_IDS: ChartId[] = CHART_IDS.filter((id) => CHART_REGISTRY[id].core);

/** Full catalog list for the searchable "＋ More charts" picker. */
export const CHART_CATALOG = CHART_IDS.map((id) => CHART_REGISTRY[id]);
