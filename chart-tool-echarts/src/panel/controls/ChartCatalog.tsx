import { useMemo, useState, useEffect, useRef } from 'react';
import { CHART_CATALOG, type ChartDefinition } from '../../charts/registry';
import { useChartStore } from '../../state/chartStore';

/** Searchable "＋ More charts" overlay — pick any ECharts type to add + select. */
export function ChartCatalog({ onClose }: { onClose: () => void }) {
  const available = useChartStore((s) => s.availableTypes);
  const addType = useChartStore((s) => s.addType);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const match = (d: ChartDefinition) =>
      !q || d.label.toLowerCase().includes(q) || d.description.toLowerCase().includes(q) || d.group.toLowerCase().includes(q);
    const byGroup = new Map<string, ChartDefinition[]>();
    for (const d of CHART_CATALOG) {
      if (!match(d)) continue;
      const list = byGroup.get(d.group) ?? [];
      list.push(d);
      byGroup.set(d.group, list);
    }
    return Array.from(byGroup.entries());
  }, [query]);

  const pick = (id: ChartDefinition['id']) => {
    addType(id);
    onClose();
  };

  return (
    <div className="catalog-overlay" role="dialog" aria-modal="true" aria-label="Add a chart" onClick={onClose}>
      <div className="catalog" onClick={(e) => e.stopPropagation()}>
        <div className="catalog__head">
          <input
            ref={inputRef}
            className="text-input catalog__search"
            placeholder="Search chart types…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search chart types"
          />
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="catalog__list">
          {groups.length === 0 ? <p className="field__hint">No charts match “{query}”.</p> : null}
          {groups.map(([group, defs]) => (
            <div className="catalog__group" key={group}>
              <div className="catalog__group-title">{group}</div>
              {defs.map((d) => {
                const added = available.includes(d.id);
                return (
                  <button type="button" className="catalog__item" key={d.id} onClick={() => pick(d.id)}>
                    <span className="catalog__item-main">
                      <span className="catalog__item-label">{d.label}</span>
                      <span className="catalog__item-desc">{d.description}</span>
                    </span>
                    <span className={`catalog__tag ${added ? 'catalog__tag--added' : ''}`}>
                      {added ? 'Added' : 'Add'}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
