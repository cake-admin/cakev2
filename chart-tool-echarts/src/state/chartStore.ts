import { create } from 'zustand';
import { CHART_REGISTRY, CORE_CHART_IDS, type ChartId } from '../charts/registry';
import { DEFAULT_STYLE, DEFAULT_HEADER, type HeaderConfig, type StyleConfig } from '../charts/types';
import type { ColorConfig } from '../theme/chartTheme.types';
import type { DataModel } from '../data/dataModel';
import { toDataModel, type Mapping, type Table } from '../data/csv';

interface ChartState {
  type: ChartId;
  /** Chart ids shown as chips in the picker (core + any added via the catalog). */
  availableTypes: ChartId[];
  data: DataModel;
  color: ColorConfig;
  style: StyleConfig;
  header: HeaderConfig;
  /** Imported CSV/TSV, kept raw so it can be re-projected per chart type. */
  importedTable: Table | null;
  importMapping: Mapping | null;
  /** Filename (or "Pasted data") for the import summary line. */
  importName: string | null;
  /** Warnings from the last projection, surfaced by the import control. */
  importWarnings: string[];
  setType: (id: ChartId) => void;
  /** Add a chart from the catalog to the picker and select it. */
  addType: (id: ChartId) => void;
  /** Remove a non-core chart chip (selecting another if it was active). */
  removeType: (id: ChartId) => void;
  setData: (updater: (d: DataModel) => DataModel) => void;
  patchStyle: (patch: Partial<StyleConfig>) => void;
  setColor: (patch: Partial<ColorConfig>) => void;
  patchHeader: (patch: Partial<HeaderConfig>) => void;
  /** Adopt a parsed table as the data source for every chart type. */
  setImport: (table: Table, mapping: Mapping, name: string) => void;
  /** Re-project the imported table after a mapping change. */
  setMapping: (mapping: Mapping) => void;
  /** Drop the import and go back to the demo presets. */
  resetData: () => void;
}

function styleFor(id: ChartId): StyleConfig {
  return { ...DEFAULT_STYLE, ...CHART_REGISTRY[id].defaultStyle };
}

type ImportSlice = Pick<ChartState, 'importedTable' | 'importMapping'>;

/**
 * The one answer to "what data should chart `id` show?" — the imported table
 * projected into that chart's shape, or its demo preset when nothing has been
 * imported (the behavior before CSV import existed).
 *
 * Note this re-projects from the raw table, so hand edits made after an import
 * don't survive a chart-type switch — same as presets, which have always been
 * replaced wholesale on switch.
 */
function dataFor(id: ChartId, s: ImportSlice): { data: DataModel; importWarnings: string[] } {
  if (!s.importedTable || !s.importMapping) return { data: CHART_REGISTRY[id].preset(), importWarnings: [] };
  const { data, warnings } = toDataModel(s.importedTable, s.importMapping, CHART_REGISTRY[id].dataKind);
  return { data, importWarnings: warnings };
}

export const useChartStore = create<ChartState>((set) => ({
  type: 'bar',
  availableTypes: [...CORE_CHART_IDS],
  data: CHART_REGISTRY.bar.preset(),
  color: { variation: 'categorical', base: 'primary' },
  style: styleFor('bar'),
  header: { ...DEFAULT_HEADER },
  importedTable: null,
  importMapping: null,
  importName: null,
  importWarnings: [],
  setType: (id) => set((s) => ({ type: id, style: styleFor(id), ...dataFor(id, s) })),
  addType: (id) =>
    set((s) => ({
      type: id,
      style: styleFor(id),
      ...dataFor(id, s),
      availableTypes: s.availableTypes.includes(id) ? s.availableTypes : [...s.availableTypes, id],
    })),
  removeType: (id) =>
    set((s) => {
      if (CHART_REGISTRY[id].core) return s; // core chips stay
      const availableTypes = s.availableTypes.filter((t) => t !== id);
      if (s.type !== id) return { availableTypes };
      const next = availableTypes[0] ?? 'bar';
      return { availableTypes, type: next, style: styleFor(next), ...dataFor(next, s) };
    }),
  setData: (updater) => set((s) => ({ data: updater(s.data) })),
  patchStyle: (patch) => set((s) => ({ style: { ...s.style, ...patch } })),
  setColor: (patch) => set((s) => ({ color: { ...s.color, ...patch } })),
  patchHeader: (patch) => set((s) => ({ header: { ...s.header, ...patch } })),
  setImport: (table, mapping, name) =>
    set((s) => ({
      importedTable: table,
      importMapping: mapping,
      importName: name,
      ...dataFor(s.type, { importedTable: table, importMapping: mapping }),
    })),
  setMapping: (mapping) =>
    set((s) => ({
      importMapping: mapping,
      ...dataFor(s.type, { importedTable: s.importedTable, importMapping: mapping }),
    })),
  resetData: () =>
    set((s) => ({
      importedTable: null,
      importMapping: null,
      importName: null,
      importWarnings: [],
      data: CHART_REGISTRY[s.type].preset(),
    })),
}));
