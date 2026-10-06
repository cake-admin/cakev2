import { useMemo } from 'react';
import { useChartStore } from '../../state/chartStore';
import { usesSingleSeries } from '../../charts/registry';
import { regionNamesFor } from '../../charts/geo/regionNames';
import { genId, type PartitionData, type SeriesData, type XYData, type XYPoint } from '../../data/dataModel';
import { SortableRows } from './SortableRows';
import { NumberInput } from './NumberInput';
import { RegionCombobox } from './RegionCombobox';

function SeriesEditor({ data }: { data: SeriesData }) {
  const setData = useChartStore((s) => s.setData);
  const categories = data.series[0]?.points.map((p) => p.x) ?? [];
  // Stable positional row ids — renaming a category must NOT change the row key,
  // or the text input remounts on every keystroke (cursor loss / "one letter" bug).
  const ids = categories.map((_, i) => String(i));

  const reorder = (order: string[]) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const idx = order.map((id) => Number(id));
      return {
        ...d,
        series: d.series.map((s) => ({ ...s, points: idx.map((i) => s.points[i]).filter(Boolean) })),
      };
    });

  const rename = (i: number, name: string) =>
    setData((d) =>
      d.kind === 'series'
        ? {
            ...d,
            series: d.series.map((s) => ({
              ...s,
              points: s.points.map((p, pi) => (pi === i ? { ...p, x: name } : p)),
            })),
          }
        : d,
    );

  const setValue = (seriesId: string, i: number, value: number) =>
    setData((d) =>
      d.kind === 'series'
        ? {
            ...d,
            series: d.series.map((s) =>
              s.id === seriesId
                ? { ...s, points: s.points.map((p, pi) => (pi === i ? { ...p, y: value } : p)) }
                : s,
            ),
          }
        : d,
    );

  const removeAt = (i: number) =>
    setData((d) =>
      d.kind === 'series'
        ? { ...d, series: d.series.map((s) => ({ ...s, points: s.points.filter((_, pi) => pi !== i) })) }
        : d,
    );

  const addCategory = () =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const n = (d.series[0]?.points.length ?? 0) + 1;
      return { ...d, series: d.series.map((s) => ({ ...s, points: [...s.points, { x: `Cat ${n}`, y: 0 }] })) };
    });

  const addSeries = () =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const cats = d.series[0]?.points.map((p) => p.x) ?? [];
      return {
        ...d,
        series: [
          ...d.series,
          { id: genId('series'), name: `Series ${d.series.length + 1}`, points: cats.map((c) => ({ x: c, y: 0 })) },
        ],
      };
    });

  const removeSeries = (id: string) =>
    setData((d) => (d.kind === 'series' ? { ...d, series: d.series.filter((s) => s.id !== id) } : d));
  const renameSeries = (id: string, name: string) =>
    setData((d) => (d.kind === 'series' ? { ...d, series: d.series.map((s) => (s.id === id ? { ...s, name } : s)) } : d));

  return (
    <>
      <div className="field__label">Series</div>
      <div className="chip-row">
        {data.series.map((s) => (
          <div className="chip" key={s.id}>
            <input
              className="text-input text-input--chip"
              value={s.name}
              onChange={(e) => renameSeries(s.id, e.target.value)}
              aria-label="Series name"
            />
            {data.series.length > 1 ? (
              <button type="button" className="icon-btn" onClick={() => removeSeries(s.id)} aria-label={`Remove ${s.name}`}>
                ×
              </button>
            ) : null}
          </div>
        ))}
        <button type="button" className="btn btn--sm" onClick={addSeries}>
          + Series
        </button>
      </div>

      <div className="field__label" style={{ marginTop: 12 }}>
        Data points
      </div>
      <p className="field__hint data-row__note">
        Each row is a category; every column is a series (that’s what powers grouped, stacked &amp;
        multi-series charts).
      </p>
      <div className="data-row data-row--head">
        <span className="data-row__spacer" />
        <span className="field__hint data-row__head-cat">Category</span>
        {data.series.map((s) => (
          <span key={s.id} className="field__hint data-row__head-series" title={s.name}>
            {s.name}
          </span>
        ))}
        <span className="data-row__spacer--btn" />
      </div>
      <SortableRows ids={ids} onReorder={reorder}>
        {(id, handle) => {
          const i = Number(id);
          const cat = categories[i];
          if (cat === undefined) return null;
          return (
            <>
              {handle}
              <input
                className="text-input data-row__cat"
                value={cat}
                onChange={(e) => rename(i, e.target.value)}
                aria-label="Category name"
              />
              {data.series.map((s) => (
                <NumberInput
                  key={s.id}
                  value={s.points[i]?.y ?? 0}
                  onChange={(v) => setValue(s.id, i, v)}
                  ariaLabel={`${s.name} · ${cat}`}
                />
              ))}
              <button type="button" className="icon-btn" onClick={() => removeAt(i)} aria-label={`Remove ${cat}`}>
                ×
              </button>
            </>
          );
        }}
      </SortableRows>
      <button type="button" className="btn btn--sm btn--add" onClick={addCategory}>
        + Data point
      </button>
    </>
  );
}

function PartitionEditor({
  data,
  mapRegion,
}: {
  data: PartitionData;
  /** When set, labels are picked from a searchable country/continent list. */
  mapRegion?: 'country' | 'continent';
}) {
  const setData = useChartStore((s) => s.setData);
  const regionOptions = mapRegion ? regionNamesFor(mapRegion) : null;
  const taken = useMemo(() => new Set(data.slices.map((s) => s.label)), [data.slices]);

  const reorder = (order: string[]) =>
    setData((d) =>
      d.kind === 'partition'
        ? { ...d, slices: order.map((id) => d.slices.find((s) => s.id === id)).filter((s): s is PartitionData['slices'][number] => Boolean(s)) }
        : d,
    );
  const update = (id: string, patch: Partial<{ label: string; value: number }>) =>
    setData((d) => (d.kind === 'partition' ? { ...d, slices: d.slices.map((s) => (s.id === id ? { ...s, ...patch } : s)) } : d));
  const remove = (id: string) =>
    setData((d) => (d.kind === 'partition' ? { ...d, slices: d.slices.filter((s) => s.id !== id) } : d));
  const add = () =>
    setData((d) => {
      if (d.kind !== 'partition') return d;
      let label = `Slice ${d.slices.length + 1}`;
      if (regionOptions) {
        const used = new Set(d.slices.map((s) => s.label));
        label = regionOptions.find((n) => !used.has(n)) ?? regionOptions[0] ?? label;
      }
      return { ...d, slices: [...d.slices, { id: genId('slice'), label, value: 10 }] };
    });

  return (
    <>
      <div className="field__label">{mapRegion ? 'Regions' : 'Slices'}</div>
      <div className="data-row data-row--head">
        <span className="data-row__spacer" />
        <span className="field__hint data-row__head-cat">{mapRegion ? 'Region' : 'Label'}</span>
        <span className="field__hint">{mapRegion ? 'Value (%)' : 'Value'}</span>
        <span className="data-row__spacer--btn" />
      </div>
      <SortableRows ids={data.slices.map((s) => s.id)} onReorder={reorder}>
        {(id, handle) => {
          const slice = data.slices.find((s) => s.id === id);
          if (!slice) return null;
          return (
            <>
              {handle}
              {regionOptions ? (
                <RegionCombobox
                  value={slice.label}
                  options={regionOptions}
                  taken={taken}
                  onChange={(label) => update(id, { label })}
                  ariaLabel="Region"
                />
              ) : (
                <input
                  className="text-input data-row__cat"
                  value={slice.label}
                  onChange={(e) => update(id, { label: e.target.value })}
                  aria-label="Slice label"
                />
              )}
              <NumberInput value={slice.value} onChange={(v) => update(id, { value: v })} ariaLabel="Slice value" />
              <button type="button" className="icon-btn" onClick={() => remove(id)} aria-label={`Remove ${slice.label}`}>
                ×
              </button>
            </>
          );
        }}
      </SortableRows>
      <button type="button" className="btn btn--sm btn--add" onClick={add}>
        {mapRegion ? '+ Region' : '+ Slice'}
      </button>
    </>
  );
}

function XYEditor({ data }: { data: XYData }) {
  const setData = useChartStore((s) => s.setData);

  const reorder = (order: string[]) =>
    setData((d) =>
      d.kind === 'xy'
        ? { ...d, points: order.map((id) => d.points.find((p) => p.id === id)).filter((p): p is XYPoint => Boolean(p)) }
        : d,
    );
  const update = (id: string, patch: Partial<XYPoint>) =>
    setData((d) => (d.kind === 'xy' ? { ...d, points: d.points.map((p) => (p.id === id ? { ...p, ...patch } : p)) } : d));
  const remove = (id: string) =>
    setData((d) => (d.kind === 'xy' ? { ...d, points: d.points.filter((p) => p.id !== id) } : d));
  const add = () =>
    setData((d) =>
      d.kind === 'xy' ? { ...d, points: [...d.points, { id: genId('pt'), x: 50, y: 50, size: 10 }] } : d,
    );

  return (
    <>
      <div className="data-row data-row--head">
        <span className="data-row__spacer" />
        <span className="field__hint">x</span>
        <span className="field__hint">y</span>
        <span className="field__hint">size</span>
        <span className="data-row__spacer--btn" />
      </div>
      <SortableRows ids={data.points.map((p) => p.id)} onReorder={reorder}>
        {(id, handle) => {
          const pt = data.points.find((p) => p.id === id);
          if (!pt) return null;
          return (
            <>
              {handle}
              <NumberInput value={pt.x} onChange={(v) => update(id, { x: v })} ariaLabel="x" />
              <NumberInput value={pt.y} onChange={(v) => update(id, { y: v })} ariaLabel="y" />
              <NumberInput value={pt.size ?? 0} onChange={(v) => update(id, { size: v })} ariaLabel="size" />
              <button type="button" className="icon-btn" onClick={() => remove(id)} aria-label="Remove point">
                ×
              </button>
            </>
          );
        }}
      </SortableRows>
      <button type="button" className="btn btn--sm btn--add" onClick={add}>
        + Point
      </button>
    </>
  );
}

/** Simplified editor for charts that only use ONE series (single-mode bar,
 *  positive/negative, waterfall): a single Value column, no series management.
 *  Category edits apply to every (possibly hidden) series so the data stays
 *  aligned if the chart later switches to grouped/stacked. */
function SingleSeriesEditor({ data }: { data: SeriesData }) {
  const setData = useChartStore((s) => s.setData);
  const first = data.series[0];
  const categories = first?.points.map((p) => p.x) ?? [];
  const ids = categories.map((_, i) => String(i));

  const reorder = (order: string[]) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const idx = order.map((id) => Number(id));
      return { ...d, series: d.series.map((s) => ({ ...s, points: idx.map((i) => s.points[i]).filter(Boolean) })) };
    });
  const rename = (i: number, name: string) =>
    setData((d) =>
      d.kind === 'series'
        ? { ...d, series: d.series.map((s) => ({ ...s, points: s.points.map((p, pi) => (pi === i ? { ...p, x: name } : p)) })) }
        : d,
    );
  const setValue = (i: number, value: number) =>
    setData((d) =>
      d.kind === 'series'
        ? {
            ...d,
            series: d.series.map((s, si) =>
              si === 0 ? { ...s, points: s.points.map((p, pi) => (pi === i ? { ...p, y: value } : p)) } : s,
            ),
          }
        : d,
    );
  const removeAt = (i: number) =>
    setData((d) =>
      d.kind === 'series'
        ? { ...d, series: d.series.map((s) => ({ ...s, points: s.points.filter((_, pi) => pi !== i) })) }
        : d,
    );
  const addCategory = () =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const n = (d.series[0]?.points.length ?? 0) + 1;
      return { ...d, series: d.series.map((s) => ({ ...s, points: [...s.points, { x: `Cat ${n}`, y: 0 }] })) };
    });

  return (
    <>
      <div className="field__label">Data points</div>
      <div className="data-row data-row--head">
        <span className="data-row__spacer" />
        <span className="field__hint data-row__head-cat">Category</span>
        <span className="field__hint">Value</span>
        <span className="data-row__spacer--btn" />
      </div>
      <SortableRows ids={ids} onReorder={reorder}>
        {(id, handle) => {
          const i = Number(id);
          const cat = categories[i];
          if (cat === undefined) return null;
          return (
            <>
              {handle}
              <input
                className="text-input data-row__cat"
                value={cat}
                onChange={(e) => rename(i, e.target.value)}
                aria-label="Category name"
              />
              <NumberInput value={first?.points[i]?.y ?? 0} onChange={(v) => setValue(i, v)} ariaLabel="Value" />
              <button type="button" className="icon-btn" onClick={() => removeAt(i)} aria-label={`Remove ${cat}`}>
                ×
              </button>
            </>
          );
        }}
      </SortableRows>
      <button type="button" className="btn btn--sm btn--add" onClick={addCategory}>
        + Data point
      </button>
    </>
  );
}

const BULLET_MEASURES = ['Value', 'Target', 'Maximum'] as const;

/** Keep section / target / track series aligned to the first column's rows. */
function alignBullet(data: SeriesData, sectionsOn: boolean): SeriesData {
  const base = data.series[0]?.points ?? [];
  const count = sectionsOn ? Math.max(3, data.series.length) : 3;
  const series = Array.from({ length: count }, (_, si) => {
    const existing = data.series[si];
    const fallback = !sectionsOn
      ? BULLET_MEASURES[si]
      : si === count - 2
        ? 'Target'
        : si === count - 1
          ? 'Maximum'
          : `Section ${si + 1}`;
    return {
      id: existing?.id ?? genId('series'),
      name: existing?.name?.trim() ? existing.name : fallback,
      points: base.map((p, i) => {
        const prev = existing?.points[i];
        const point = { x: p.x, y: si === 0 ? p.y : (prev?.y ?? 0) };
        return si === 0 && p.note ? { ...point, note: p.note } : point;
      }),
    };
  });
  return { kind: 'series', series };
}

/** Label, optional subtitle, fill (or sections), target marker, and track length. */
function BulletEditor({ data }: { data: SeriesData }) {
  const setData = useChartStore((s) => s.setData);
  const sectionsOn = useChartStore((s) => s.type === 'bullet' && s.style.bulletSections);
  const showTarget = useChartStore((s) => s.style.bulletShowTarget);
  const showMax = useChartStore((s) => s.style.bulletShowMax);
  const points = data.series[0]?.points ?? [];
  const ids = points.map((_, i) => String(i));
  const count = sectionsOn ? Math.max(3, data.series.length) : 3;
  const sectionCount = sectionsOn ? count - 2 : 1;
  const targetIndex = count - 2;
  const maxIndex = count - 1;

  const reorder = (order: string[]) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, sectionsOn);
      const idx = order.map((id) => Number(id));
      return {
        ...next,
        series: next.series.map((s) => ({ ...s, points: idx.map((i) => s.points[i]).filter(Boolean) })),
      };
    });

  const update = (i: number, field: 'label' | 'note' | 'target' | 'max' | number, raw: string | number) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, sectionsOn);
      const series = next.series.map((s) => ({ ...s, points: s.points.map((p) => ({ ...p })) }));
      const targetAt = series.length - 2;
      const maxAt = series.length - 1;
      if (field === 'label') {
        const x = String(raw);
        series.forEach((s) => {
          s.points[i].x = x;
        });
      } else if (field === 'note') {
        const note = String(raw);
        const point = series[0].points[i];
        if (note) point.note = note;
        else delete point.note;
      } else if (field === 'target') series[targetAt].points[i].y = Number(raw);
      else if (field === 'max') series[maxAt].points[i].y = Number(raw);
      else series[field].points[i].y = Number(raw);
      return { kind: 'series', series };
    });

  const renameMeasure = (si: number, name: string) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, sectionsOn);
      return { ...next, series: next.series.map((s, i) => (i === si ? { ...s, name } : s)) };
    });

  const removeAt = (i: number) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, sectionsOn);
      return {
        ...next,
        series: next.series.map((s) => ({ ...s, points: s.points.filter((_, pi) => pi !== i) })),
      };
    });

  const addRow = () =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, sectionsOn);
      const n = (next.series[0]?.points.length ?? 0) + 1;
      return {
        ...next,
        series: next.series.map((s) => ({ ...s, points: [...s.points, { x: `Row ${n}`, y: 0 }] })),
      };
    });

  const addSection = () =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, true);
      const insertAt = next.series.length - 2;
      const base = next.series[0]?.points ?? [];
      const section = {
        id: genId('series'),
        name: `Section ${insertAt + 1}`,
        points: base.map((p) => ({ x: p.x, y: 0 })),
      };
      const series = [...next.series];
      series.splice(insertAt, 0, section);
      return { kind: 'series', series };
    });

  const removeSection = (si: number) =>
    setData((d) => {
      if (d.kind !== 'series') return d;
      const next = alignBullet(d, true);
      if (next.series.length <= 3 || si >= next.series.length - 2) return d;
      return { ...next, series: next.series.filter((_, i) => i !== si) };
    });

  const numberHeaders = [
    ...(sectionsOn
      ? Array.from({ length: sectionCount }, (_, si) => data.series[si]?.name || `Section ${si + 1}`)
      : ['Value']),
    ...(showTarget ? ['Target'] : []),
    ...(showMax ? ['Max'] : []),
  ];

  return (
    <>
      <div className="field__label">{sectionsOn ? 'Sections' : 'Measures'}</div>
      <p className="field__hint data-row__note">
        {sectionsOn
          ? 'Each section is a colored part of the bar, drawn left to right. Target is the marker and Max is the track. A Max of 0 sizes the track to whichever of the section total or target is larger.'
          : 'Value is the fill, Target is the marker, Max is the track. A Max of 0 sizes the track to whichever of value or target is larger. One row draws a single bar.'}
      </p>
      {sectionsOn ? (
        <div className="chip-row" style={{ marginBottom: 8 }}>
          {Array.from({ length: sectionCount }, (_, si) => (
            <div className="chip" key={data.series[si]?.id ?? si}>
              <input
                className="text-input text-input--chip"
                value={data.series[si]?.name ?? ''}
                onChange={(e) => renameMeasure(si, e.target.value)}
                aria-label={`Section ${si + 1} name`}
              />
              {sectionCount > 1 ? (
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => removeSection(si)}
                  aria-label={`Remove ${data.series[si]?.name || 'section'}`}
                >
                  ×
                </button>
              ) : null}
            </div>
          ))}
          <button type="button" className="btn btn--sm" onClick={addSection}>
            + Section
          </button>
        </div>
      ) : (
        <div className="bullet-row__nums" style={{ marginBottom: 8 }}>
          {BULLET_MEASURES.map((fallback, si) =>
            (si === 1 && !showTarget) || (si === 2 && !showMax) ? null : (
              <input
                key={fallback}
                className="text-input bullet-row__measure"
                value={data.series[si]?.name ?? fallback}
                onChange={(e) => renameMeasure(si, e.target.value)}
                aria-label={`${fallback} name`}
              />
            ),
          )}
        </div>
      )}
      {sectionsOn && (showTarget || showMax) ? (
        <div className="bullet-row__nums" style={{ marginBottom: 8 }}>
          {showTarget ? (
            <input
              className="text-input bullet-row__measure"
              value={data.series[targetIndex]?.name ?? 'Target'}
              onChange={(e) => renameMeasure(targetIndex, e.target.value)}
              aria-label="Target name"
            />
          ) : null}
          {showMax ? (
            <input
              className="text-input bullet-row__measure"
              value={data.series[maxIndex]?.name ?? 'Maximum'}
              onChange={(e) => renameMeasure(maxIndex, e.target.value)}
              aria-label="Max name"
            />
          ) : null}
        </div>
      ) : null}

      <div className="field__label">Rows</div>
      <div className="data-row data-row--head">
        <span className="data-row__spacer" />
        <div className="bullet-row">
          <div className="bullet-row__top">
            <span className="field__hint data-row__head-cat">Label</span>
            <span className="field__hint data-row__head-cat">Subtitle</span>
            <span className="data-row__spacer--btn" />
          </div>
          <div className={`bullet-row__nums${sectionsOn ? ' bullet-row__nums--scroll' : ''}`}>
            {numberHeaders.map((label, hi) => (
              <span key={`${hi}-${label}`} className="field__hint bullet-row__numhead" title={label}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <SortableRows ids={ids} onReorder={reorder}>
        {(id, handle) => {
          const i = Number(id);
          const point = points[i];
          if (!point) return null;
          return (
            <>
              {handle}
              <div className="bullet-row">
                <div className="bullet-row__top">
                  <input
                    className="text-input"
                    value={point.x}
                    onChange={(e) => update(i, 'label', e.target.value)}
                    aria-label="Label"
                  />
                  <input
                    className="text-input"
                    value={point.note ?? ''}
                    onChange={(e) => update(i, 'note', e.target.value)}
                    aria-label="Subtitle"
                    placeholder="Subtitle"
                  />
                  <button type="button" className="icon-btn" onClick={() => removeAt(i)} aria-label={`Remove ${point.x}`}>
                    ×
                  </button>
                </div>
                <div className={`bullet-row__nums${sectionsOn ? ' bullet-row__nums--scroll' : ''}`}>
                  {Array.from({ length: sectionCount }, (_, si) => (
                    <NumberInput
                      key={data.series[si]?.id ?? si}
                      value={data.series[si]?.points[i]?.y ?? 0}
                      onChange={(v) => update(i, si, v)}
                      ariaLabel={data.series[si]?.name || `Section ${si + 1}`}
                    />
                  ))}
                  {showTarget ? (
                    <NumberInput
                      value={data.series[targetIndex]?.points[i]?.y ?? 0}
                      onChange={(v) => update(i, 'target', v)}
                      ariaLabel="Target"
                    />
                  ) : null}
                  {showMax ? (
                    <NumberInput
                      value={data.series[maxIndex]?.points[i]?.y ?? 0}
                      onChange={(v) => update(i, 'max', v)}
                      ariaLabel="Max"
                    />
                  ) : null}
                </div>
              </div>
            </>
          );
        }}
      </SortableRows>
      <button type="button" className="btn btn--sm btn--add" onClick={addRow}>
        + Row
      </button>
    </>
  );
}

export function DataEditor() {
  const data = useChartStore((s) => s.data);
  const type = useChartStore((s) => s.type);
  const style = useChartStore((s) => s.style);
  if (data.kind === 'series') {
    if (type === 'bullet') return <BulletEditor data={data} />;
    // These chart configs read only the first series — show a single Value column.
    return usesSingleSeries(type, style) ? <SingleSeriesEditor data={data} /> : <SeriesEditor data={data} />;
  }
  if (data.kind === 'partition') {
    return <PartitionEditor data={data} mapRegion={type === 'map' ? style.mapRegion : undefined} />;
  }
  return <XYEditor data={data} />;
}
