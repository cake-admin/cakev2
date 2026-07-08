import { useChartStore } from '../../state/chartStore';
import { genId, type PartitionData, type SeriesData, type XYData, type XYPoint } from '../../data/dataModel';
import { SortableRows } from './SortableRows';
import { NumberInput } from './NumberInput';

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

function PartitionEditor({ data }: { data: PartitionData }) {
  const setData = useChartStore((s) => s.setData);

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
    setData((d) =>
      d.kind === 'partition'
        ? { ...d, slices: [...d.slices, { id: genId('slice'), label: `Slice ${d.slices.length + 1}`, value: 10 }] }
        : d,
    );

  return (
    <>
      <div className="field__label">Slices</div>
      <div className="data-row data-row--head">
        <span className="data-row__spacer" />
        <span className="field__hint data-row__head-cat">Label</span>
        <span className="field__hint">Value</span>
        <span className="data-row__spacer--btn" />
      </div>
      <SortableRows ids={data.slices.map((s) => s.id)} onReorder={reorder}>
        {(id, handle) => {
          const slice = data.slices.find((s) => s.id === id);
          if (!slice) return null;
          return (
            <>
              {handle}
              <input
                className="text-input data-row__cat"
                value={slice.label}
                onChange={(e) => update(id, { label: e.target.value })}
                aria-label="Slice label"
              />
              <NumberInput value={slice.value} onChange={(v) => update(id, { value: v })} ariaLabel="Slice value" />
              <button type="button" className="icon-btn" onClick={() => remove(id)} aria-label={`Remove ${slice.label}`}>
                ×
              </button>
            </>
          );
        }}
      </SortableRows>
      <button type="button" className="btn btn--sm btn--add" onClick={add}>
        + Slice
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

export function DataEditor() {
  const data = useChartStore((s) => s.data);
  const type = useChartStore((s) => s.type);
  const style = useChartStore((s) => s.style);
  if (data.kind === 'series') {
    // These chart configs read only the first series — show a single Value column.
    const singleSeries =
      type === 'posNegBar' || type === 'waterfall' || (type === 'bar' && style.barMode === 'single');
    return singleSeries ? <SingleSeriesEditor data={data} /> : <SeriesEditor data={data} />;
  }
  if (data.kind === 'partition') return <PartitionEditor data={data} />;
  return <XYEditor data={data} />;
}
