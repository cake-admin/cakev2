import type { ECharts } from 'echarts';
import type { EChartsOption } from 'echarts';

type Linkable = { name?: string; linkKey?: string };

/** Build linkKey → ECharts `name`s that should highlight together. */
export function buildLinkIndex(option: EChartsOption): Map<string, string[]> {
  const index = new Map<string, Set<string>>();
  const add = (linkKey: string | undefined, name: string | undefined) => {
    if (!linkKey || !name) return;
    let set = index.get(linkKey);
    if (!set) {
      set = new Set();
      index.set(linkKey, set);
    }
    set.add(name);
    // Always include the linkKey itself so continent pills (`name === linkKey`) join.
    set.add(linkKey);
  };

  const series = option.series;
  const seriesArr = Array.isArray(series) ? series : series ? [series] : [];
  for (const ser of seriesArr) {
    const data = (ser as { data?: unknown }).data;
    if (!Array.isArray(data)) continue;
    for (const item of data) {
      if (!item || typeof item !== 'object') continue;
      const row = item as Linkable;
      add(row.linkKey ?? row.name, row.name);
    }
  }

  const geos = option.geo;
  const geoArr = Array.isArray(geos) ? geos : geos ? [geos] : [];
  for (const g of geoArr) {
    const regions = (g as { regions?: Linkable[] }).regions;
    if (!Array.isArray(regions)) continue;
    for (const r of regions) {
      add(r.linkKey ?? r.name, r.name);
    }
  }

  const out = new Map<string, string[]>();
  for (const [k, set] of index) out.set(k, [...set]);
  return out;
}

function linkKeyFromEvent(
  params: { name?: string; data?: Linkable },
  index: Map<string, string[]>,
): string | null {
  const fromData = params.data && typeof params.data === 'object' ? params.data.linkKey : undefined;
  if (fromData) return fromData;
  const name = params.name;
  if (!name) return null;
  // Geo mouseover often only exposes `name` (feature id). Find the group that owns it.
  if (index.has(name)) return name;
  for (const [key, names] of index) {
    if (names.includes(name)) return key;
  }
  return name;
}

/**
 * Cross-highlight map regions + callout scatter pills that share `linkKey`.
 * Clears only on chart globalout so moving between a country and its pill doesn't flicker.
 */
export function attachMapLinkHighlight(
  chart: ECharts,
  getOption: () => EChartsOption,
): () => void {
  let activeKey: string | null = null;
  let index = buildLinkIndex(getOption());

  const downplay = (key: string) => {
    const names = index.get(key) ?? [key];
    chart.dispatchAction({
      type: 'downplay',
      batch: names.map((name) => ({ name })),
    });
  };

  const highlight = (key: string) => {
    const names = index.get(key) ?? [key];
    chart.dispatchAction({
      type: 'highlight',
      batch: names.map((name) => ({ name })),
    });
  };

  const onOver = (params: { name?: string; data?: Linkable }) => {
    index = buildLinkIndex(getOption());
    const key = linkKeyFromEvent(params, index);
    if (!key) return;
    if (key === activeKey) return;
    if (activeKey) downplay(activeKey);
    activeKey = key;
    highlight(key);
  };

  const onGlobalOut = () => {
    if (!activeKey) return;
    downplay(activeKey);
    activeKey = null;
  };

  chart.on('mouseover', onOver);
  chart.on('globalout', onGlobalOut);

  return () => {
    chart.off('mouseover', onOver);
    chart.off('globalout', onGlobalOut);
    if (activeKey) downplay(activeKey);
    activeKey = null;
  };
}
