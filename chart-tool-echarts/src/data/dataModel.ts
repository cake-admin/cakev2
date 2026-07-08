/**
 * One data model, three shapes. Charts declare which `kind` they consume; the
 * data editor and presets key off the same union so adding a chart that reuses a
 * shape needs no new editor code.
 *
 *  - series     → bar, line, area (and future stacked/grouped/combo)
 *  - xy         → scatter (and future bubble)
 *  - partition  → pie / donut
 */

export interface SeriesPoint {
  x: string;
  y: number;
}
export interface Series {
  id: string;
  name: string;
  points: SeriesPoint[];
}
export interface SeriesData {
  kind: 'series';
  series: Series[];
}

export interface XYPoint {
  id: string;
  x: number;
  y: number;
  size?: number;
  category?: string;
}
export interface XYData {
  kind: 'xy';
  points: XYPoint[];
}

export interface Slice {
  id: string;
  label: string;
  value: number;
}
export interface PartitionData {
  kind: 'partition';
  slices: Slice[];
}

export type DataModel = SeriesData | XYData | PartitionData;
export type DataKind = DataModel['kind'];

let idCounter = 0;
export function genId(prefix = 'id'): string {
  idCounter += 1;
  return `${prefix}-${idCounter}-${Math.random().toString(36).slice(2, 7)}`;
}

/** Category labels for a series dataset (taken from the first series' x values). */
export function categoriesOf(data: SeriesData): string[] {
  return data.series[0]?.points.map((p) => p.x) ?? [];
}

export function isSeries(d: DataModel): d is SeriesData {
  return d.kind === 'series';
}
export function isXY(d: DataModel): d is XYData {
  return d.kind === 'xy';
}
export function isPartition(d: DataModel): d is PartitionData {
  return d.kind === 'partition';
}
