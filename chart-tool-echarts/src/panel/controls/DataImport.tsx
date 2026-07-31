import { useRef, useState } from 'react';
import { useChartStore } from '../../state/chartStore';
import { CHART_REGISTRY, usesSingleSeries } from '../../charts/registry';
import { headersOf, importText, MAX_BYTES, type Mapping } from '../../data/csv';

/**
 * Upload / paste a spreadsheet to drive the chart. Sits under the data rows: the
 * editor stays the place you tweak numbers, this is the place you bring them in.
 *
 * The parsed table lives in the store rather than here, so it survives chart-type
 * switches and re-projects into whatever shape the new chart consumes.
 */
export function DataImport() {
  const type = useChartStore((s) => s.type);
  const style = useChartStore((s) => s.style);
  const table = useChartStore((s) => s.importedTable);
  const mapping = useChartStore((s) => s.importMapping);
  const name = useChartStore((s) => s.importName);
  const warnings = useChartStore((s) => s.importWarnings);
  const setImport = useChartStore((s) => s.setImport);
  const setMapping = useChartStore((s) => s.setMapping);
  const resetData = useChartStore((s) => s.resetData);

  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [pasteOpen, setPasteOpen] = useState(false);
  const [pasted, setPasted] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const kind = CHART_REGISTRY[type].dataKind;

  const adopt = (text: string, source: string) => {
    const out = importText(text);
    if (!out.ok) {
      setError(out.error);
      return;
    }
    setError('');
    setPasteOpen(false);
    setImport(out.table, out.mapping, source);
  };

  const readFile = async (file: File | null | undefined) => {
    if (!file) return;
    if (!/\.(csv|tsv|txt)$/i.test(file.name)) {
      setError('Needs a .csv or .tsv file.');
      return;
    }
    if (file.size > MAX_BYTES) {
      setError('That file is over 2 MB — try a smaller export.');
      return;
    }
    adopt(await file.text(), file.name);
  };

  const patch = (p: Partial<Mapping>) => mapping && setMapping({ ...mapping, ...p });

  const columns = table ? Array.from({ length: table.columns }, (_, i) => i) : [];
  const heads = table && mapping ? headersOf(table, mapping) : [];
  const rowCount = table && mapping ? table.cells.length - (mapping.hasHeader ? 1 : 0) : 0;

  // `toDataModel` warns about this for partition charts, but single-series
  // cartesian charts depend on the chart type + bar mode, which it can't see.
  const singleSeriesNotice =
    mapping && kind === 'series' && usesSingleSeries(type, style) && mapping.valueCols.length > 1
      ? `This chart draws one value column — showing “${heads[mapping.valueCols[0]]}”.`
      : '';

  const columnSelect = (label: string, value: number, onPick: (col: number) => void) => (
    <label className="import-map">
      <span className="field__hint import-map__label">{label}</span>
      <select
        className="text-input import-map__select"
        value={value}
        onChange={(e) => onPick(Number(e.target.value))}
      >
        {columns.map((c) => (
          <option key={c} value={c}>
            {heads[c]}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="import">
      <div className="field__label">Import data</div>

      {table && mapping ? (
        <>
          <p className="import-summary">
            <span className="import-summary__name" title={name ?? ''}>
              {name}
            </span>
            <span className="field__hint">
              {rowCount} row{rowCount === 1 ? '' : 's'} · {table.columns} columns
            </span>
          </p>

          <label className="toggle">
            <input
              type="checkbox"
              checked={mapping.hasHeader}
              // A one-line file has nothing left underneath once its row is
              // claimed as a header — don't let the chart be emptied.
              disabled={table.cells.length < 2}
              onChange={(e) => patch({ hasHeader: e.target.checked })}
            />
            <span>First row is a header</span>
          </label>

          {kind === 'xy' ? (
            <>
              {columnSelect('X', mapping.xCol, (c) => patch({ xCol: c }))}
              {columnSelect('Y', mapping.yCol, (c) => patch({ yCol: c }))}
              <label className="import-map">
                <span className="field__hint import-map__label">Size</span>
                <select
                  className="text-input import-map__select"
                  value={mapping.sizeCol ?? ''}
                  onChange={(e) => patch({ sizeCol: e.target.value === '' ? null : Number(e.target.value) })}
                >
                  <option value="">None</option>
                  {columns.map((c) => (
                    <option key={c} value={c}>
                      {heads[c]}
                    </option>
                  ))}
                </select>
              </label>
            </>
          ) : (
            <>
              {columnSelect(kind === 'partition' ? 'Labels' : 'Categories', mapping.labelCol, (c) => {
                // Promoting a value column to labels must leave at least one
                // value column behind, or the chips would show none selected
                // while the chart quietly fell back to a column.
                const rest = mapping.valueCols.filter((v) => v !== c);
                const valueCols = rest.length ? rest : columns.filter((x) => x !== c).slice(0, 1);
                patch({ labelCol: c, valueCols });
              })}
              <span className="field__hint import-map__label">
                {kind === 'partition' ? 'Value column' : 'Value columns'}
              </span>
              <div className="seg seg--wrap">
                {columns
                  .filter((c) => c !== mapping.labelCol)
                  .map((c) => {
                    const on = mapping.valueCols.includes(c);
                    return (
                      <button
                        type="button"
                        key={c}
                        className={`seg__btn${on ? ' seg__btn--active' : ''}`}
                        aria-pressed={on}
                        onClick={() => {
                          // Never leave zero value columns — there'd be nothing to draw.
                          const next = on
                            ? mapping.valueCols.filter((v) => v !== c)
                            : [...mapping.valueCols, c].sort((a, b) => a - b);
                          if (next.length) patch({ valueCols: next });
                        }}
                      >
                        {heads[c]}
                      </button>
                    );
                  })}
              </div>
            </>
          )}

          <div className="import-actions">
            <button type="button" className="btn btn--sm" onClick={() => fileRef.current?.click()}>
              Replace file
            </button>
            <button type="button" className="btn btn--sm" onClick={resetData}>
              Use sample data
            </button>
          </div>
          <input
            ref={fileRef}
            type="file"
            className="import-file"
            accept=".csv,.tsv,.txt,text/csv"
            onChange={(e) => {
              void readFile(e.target.files?.[0]);
              e.target.value = '';
            }}
          />
        </>
      ) : (
        <>
          <label
            className={`dropzone${dragOver ? ' dropzone--over' : ''}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              void readFile(e.dataTransfer.files?.[0]);
            }}
          >
            <input
              ref={fileRef}
              type="file"
              className="import-file"
              accept=".csv,.tsv,.txt,text/csv"
              onChange={(e) => {
                void readFile(e.target.files?.[0]);
                e.target.value = '';
              }}
            />
            <span className="dropzone__title">Drop a CSV here, or browse</span>
            <span className="field__hint">CSV or TSV · up to 2 MB</span>
          </label>

          <button
            type="button"
            className="btn btn--sm import-paste-toggle"
            onClick={() => setPasteOpen((o) => !o)}
            aria-expanded={pasteOpen}
          >
            {pasteOpen ? 'Cancel paste' : 'Or paste a table'}
          </button>

          {pasteOpen ? (
            <>
              <textarea
                className="text-input import-textarea"
                value={pasted}
                onChange={(e) => setPasted(e.target.value)}
                placeholder={'Region\tQ1\tQ2\nNorth\t120\t180'}
                rows={5}
                aria-label="Paste table data"
              />
              <button
                type="button"
                className="btn btn--sm btn--add"
                onClick={() => adopt(pasted, 'Pasted data')}
                disabled={!pasted.trim()}
              >
                Use pasted data
              </button>
            </>
          ) : null}
        </>
      )}

      <div className={`export-status${error ? ' export-status--error' : ''}`} role="status" aria-live="polite">
        {error || [singleSeriesNotice, ...warnings].filter(Boolean).join(' ')}
      </div>
    </div>
  );
}
