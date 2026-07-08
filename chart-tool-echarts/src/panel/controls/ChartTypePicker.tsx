import { useState } from 'react';
import { CHART_REGISTRY } from '../../charts/registry';
import { useChartStore } from '../../state/chartStore';
import { ChartCatalog } from './ChartCatalog';

export function ChartTypePicker() {
  const type = useChartStore((s) => s.type);
  const availableTypes = useChartStore((s) => s.availableTypes);
  const setType = useChartStore((s) => s.setType);
  const removeType = useChartStore((s) => s.removeType);
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <>
      <div className="seg seg--wrap" role="tablist" aria-label="Chart type">
        {availableTypes.map((id) => {
          const def = CHART_REGISTRY[id];
          return (
            <span key={id} className={`seg__chip ${type === id ? 'seg__chip--active' : ''}`}>
              <button
                type="button"
                role="tab"
                aria-selected={type === id}
                className="seg__chip-btn"
                onClick={() => setType(id)}
              >
                {def.label}
              </button>
              {!def.core ? (
                <button
                  type="button"
                  className="seg__chip-x"
                  onClick={() => removeType(id)}
                  aria-label={`Remove ${def.label}`}
                  title={`Remove ${def.label}`}
                >
                  ×
                </button>
              ) : null}
            </span>
          );
        })}
        <button
          type="button"
          className="seg__btn seg__btn--add"
          onClick={() => setCatalogOpen(true)}
          aria-label="Add more chart types"
          title="Add more chart types"
        >
          ＋ More
        </button>
      </div>

      {catalogOpen ? <ChartCatalog onClose={() => setCatalogOpen(false)} /> : null}
    </>
  );
}
