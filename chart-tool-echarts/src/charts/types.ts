import type { ChartTheme } from '../theme/chartTheme.types';
import type { ColorConfig } from '../theme/chartTheme.types';
import type { DataModel } from '../data/dataModel';

export type BarOrientation = 'vertical' | 'horizontal';
export type BarMode = 'single' | 'grouped' | 'stacked';
export type LineStyle = 'linear' | 'smooth' | 'step';
export type ScatterStyle = 'scatter' | 'bubble';
export type CircularStyle = 'donut' | 'pie' | 'half' | 'nested' | 'polar';
export type LegendPosition = 'bottom' | 'right';
export type HeaderPlacement = 'top' | 'left';

/** Fixed bar corner radius (px @ 1×) — consistent across all charts. */
export const CORNER_RADIUS = 12;

/** Visual tweaks exposed by the style controls. Clamped to design-system ranges. */
export interface StyleConfig {
  strokeWidth: number;
  pointRadius: number;
  donutInnerRatio: number;
  showGrid: boolean;
  showLegend: boolean;
  showAxes: boolean;
  showDirectLabels: boolean;
  /** Line/area curve interpolation. */
  lineStyle: LineStyle;
  /** Bar orientation + how multiple series are laid out. */
  orientation: BarOrientation;
  barMode: BarMode;
  /** Scatter: fixed dots vs size-encoded bubbles. */
  scatterStyle: ScatterStyle;
  /** Circular sub-type (pie / donut / half-gauge / nested / polar rose). */
  circularStyle: CircularStyle;
  legendPosition: LegendPosition;
}

export const DEFAULT_STYLE: StyleConfig = {
  strokeWidth: 2,
  pointRadius: 5,
  donutInnerRatio: 0.6,
  showGrid: true,
  showLegend: true,
  showAxes: true,
  showDirectLabels: false,
  lineStyle: 'smooth',
  orientation: 'vertical',
  barMode: 'single',
  scatterStyle: 'bubble',
  circularStyle: 'donut',
  legendPosition: 'bottom',
};

export interface HoverDatum {
  label: string;
  value: string;
  swatch: string;
}

/** Optional KPI header shown above (or beside) the chart (title / big value / subtitle). */
export interface HeaderConfig {
  show: boolean;
  title: string;
  value: string;
  subtitle: string;
  /** Per-line visibility — each of the three lines can be toggled independently. */
  showTitle: boolean;
  showValue: boolean;
  showSubtitle: boolean;
  /** 'top' stacks the KPI above the plot; 'left' sets it beside the plot. */
  placement: HeaderPlacement;
}

export const DEFAULT_HEADER: HeaderConfig = {
  show: false,
  title: 'Primary text',
  value: '5,987.34',
  subtitle: 'Secondary text',
  showTitle: true,
  showValue: true,
  showSubtitle: true,
  placement: 'top',
};

export interface ChartInteraction {
  onHover: (datum: HoverDatum | null, clientX?: number, clientY?: number) => void;
}

export interface ChartProps {
  data: DataModel;
  color: ColorConfig;
  style: StyleConfig;
  theme: ChartTheme;
  width: number;
  height: number;
  /** When true: no animation, no interaction — final-state SVG for export. */
  exportMode?: boolean;
  interaction?: ChartInteraction;
  /** Accessible chart title/description embedded as <title>/<desc>. */
  title?: string;
  description?: string;
  /** Optional KPI header rendered inside the chart card. */
  header?: HeaderConfig;
}
