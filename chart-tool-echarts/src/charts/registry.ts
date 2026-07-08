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
}

export const CHART_REGISTRY: Record<ChartId, ChartDefinition> = {
  bar: { id: 'bar', label: 'Bar / Column', description: 'Compare values across categories.', group: 'Bar & column', dataKind: 'series', preset: barPreset, defaultStyle: { showGrid: true }, exportName: 'bar-chart', core: true },
  line: { id: 'line', label: 'Line', description: 'Trends over an ordered axis.', group: 'Lines', dataKind: 'series', preset: linePreset, defaultStyle: { lineStyle: 'smooth' }, exportName: 'line-chart', core: true },
  area: { id: 'area', label: 'Area', description: 'Line with a filled magnitude.', group: 'Lines', dataKind: 'series', preset: areaPreset, defaultStyle: { lineStyle: 'smooth' }, exportName: 'area-chart', core: true },
  pie: { id: 'pie', label: 'Pie / Donut', description: 'Part-to-whole (pie, donut, half, nested, polar).', group: 'Part-to-whole', dataKind: 'partition', preset: piePreset, defaultStyle: { showAxes: false, showGrid: false, donutInnerRatio: 0.6, showDirectLabels: true }, exportName: 'pie-chart', core: true },
  scatter: { id: 'scatter', label: 'Scatter', description: 'X/Y relationships, optional bubbles.', group: 'Distribution', dataKind: 'xy', preset: scatterPreset, defaultStyle: { scatterStyle: 'bubble' }, exportName: 'scatter-chart', core: true },
  jitter: { id: 'jitter', label: 'Jitter / Strip', description: 'Categorical scatter / distribution cloud.', group: 'Distribution', dataKind: 'series', preset: jitterPreset, defaultStyle: { showGrid: true, pointRadius: 5 }, exportName: 'jitter-chart', core: true },
  radar: { id: 'radar', label: 'Radar', description: 'Compare series across many axes.', group: 'Multivariate', dataKind: 'series', preset: radarPreset, defaultStyle: { showAxes: false, showGrid: false }, exportName: 'radar-chart', core: true },
  treemap: { id: 'treemap', label: 'Treemap', description: 'Nested rectangles sized by value.', group: 'Part-to-whole', dataKind: 'partition', preset: treemapPreset, defaultStyle: { showAxes: false, showGrid: false, showDirectLabels: true }, exportName: 'treemap-chart', core: true },

  funnel: { id: 'funnel', label: 'Funnel', description: 'Stages that taper by value (pipeline / conversion).', group: 'Part-to-whole', dataKind: 'partition', preset: piePreset, defaultStyle: { showAxes: false, showGrid: false }, exportName: 'funnel-chart', core: false },
  gauge: { id: 'gauge', label: 'Gauge', description: 'A single KPI dial (first value vs. total).', group: 'KPI', dataKind: 'partition', preset: piePreset, defaultStyle: { showAxes: false, showGrid: false, showLegend: false }, exportName: 'gauge-chart', core: false },
  heatmap: { id: 'heatmap', label: 'Heatmap', description: 'Matrix of categories × series, color = value.', group: 'Distribution', dataKind: 'series', preset: heatmapPreset, defaultStyle: { showAxes: true, showGrid: false }, exportName: 'heatmap-chart', core: false },
  radialBar: { id: 'radialBar', label: 'Radial bar', description: 'Bars radiating around a polar circle.', group: 'Bar & column', dataKind: 'series', preset: barPreset, defaultStyle: { showAxes: false, showGrid: false, showLegend: false }, exportName: 'radial-bar-chart', core: false },

  posNegBar: { id: 'posNegBar', label: 'Positive / Negative', description: 'Bars colored by sign from semantic tokens (positive/negative).', group: 'Semantic', dataKind: 'series', preset: posNegPreset, defaultStyle: { showGrid: true, showLegend: false }, exportName: 'pos-neg-bar', core: false },
  waterfall: { id: 'waterfall', label: 'Waterfall', description: 'Running total of semantic positive/negative deltas.', group: 'Semantic', dataKind: 'series', preset: waterfallPreset, defaultStyle: { showGrid: true, showLegend: false }, exportName: 'waterfall-chart', core: false },
};

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
