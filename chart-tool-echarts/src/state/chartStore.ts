import { create } from 'zustand';
import { CHART_REGISTRY, CORE_CHART_IDS, type ChartId } from '../charts/registry';
import { DEFAULT_STYLE, DEFAULT_HEADER, type HeaderConfig, type StyleConfig } from '../charts/types';
import type { ColorConfig } from '../theme/chartTheme.types';
import type { DataModel } from '../data/dataModel';

interface ChartState {
  type: ChartId;
  /** Chart ids shown as chips in the picker (core + any added via the catalog). */
  availableTypes: ChartId[];
  data: DataModel;
  color: ColorConfig;
  style: StyleConfig;
  header: HeaderConfig;
  setType: (id: ChartId) => void;
  /** Add a chart from the catalog to the picker and select it. */
  addType: (id: ChartId) => void;
  /** Remove a non-core chart chip (selecting another if it was active). */
  removeType: (id: ChartId) => void;
  setData: (updater: (d: DataModel) => DataModel) => void;
  patchStyle: (patch: Partial<StyleConfig>) => void;
  setColor: (patch: Partial<ColorConfig>) => void;
  patchHeader: (patch: Partial<HeaderConfig>) => void;
  resetData: () => void;
}

function styleFor(id: ChartId): StyleConfig {
  return { ...DEFAULT_STYLE, ...CHART_REGISTRY[id].defaultStyle };
}

export const useChartStore = create<ChartState>((set) => ({
  type: 'bar',
  availableTypes: [...CORE_CHART_IDS],
  data: CHART_REGISTRY.bar.preset(),
  color: { variation: 'categorical', base: 'primary' },
  style: styleFor('bar'),
  header: { ...DEFAULT_HEADER },
  setType: (id) =>
    set(() => ({ type: id, data: CHART_REGISTRY[id].preset(), style: styleFor(id) })),
  addType: (id) =>
    set((s) => ({
      type: id,
      data: CHART_REGISTRY[id].preset(),
      style: styleFor(id),
      availableTypes: s.availableTypes.includes(id) ? s.availableTypes : [...s.availableTypes, id],
    })),
  removeType: (id) =>
    set((s) => {
      if (CHART_REGISTRY[id].core) return s; // core chips stay
      const availableTypes = s.availableTypes.filter((t) => t !== id);
      if (s.type !== id) return { availableTypes };
      const next = availableTypes[0] ?? 'bar';
      return { availableTypes, type: next, data: CHART_REGISTRY[next].preset(), style: styleFor(next) };
    }),
  setData: (updater) => set((s) => ({ data: updater(s.data) })),
  patchStyle: (patch) => set((s) => ({ style: { ...s.style, ...patch } })),
  setColor: (patch) => set((s) => ({ color: { ...s.color, ...patch } })),
  patchHeader: (patch) => set((s) => ({ header: { ...s.header, ...patch } })),
  resetData: () => set((s) => ({ data: CHART_REGISTRY[s.type].preset() })),
}));
