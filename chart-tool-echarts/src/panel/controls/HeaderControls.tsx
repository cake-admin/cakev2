import { useChartStore } from '../../state/chartStore';
import type { HeaderConfig } from '../../charts/types';

/** The three header lines, with their text key, visibility key, and panel label. */
const LINES: Array<{
  textKey: 'title' | 'value' | 'subtitle';
  showKey: 'showTitle' | 'showValue' | 'showSubtitle';
  label: string;
  placeholder: string;
}> = [
  { textKey: 'title', showKey: 'showTitle', label: 'Primary text', placeholder: 'Primary text' },
  { textKey: 'value', showKey: 'showValue', label: 'Display text', placeholder: '5,987.34' },
  { textKey: 'subtitle', showKey: 'showSubtitle', label: 'Secondary text', placeholder: 'Secondary text' },
];

/** KPI header above the chart (primary / display / secondary) — exported into the SVG. */
export function HeaderControls() {
  const header = useChartStore((s) => s.header);
  const patchHeader = useChartStore((s) => s.patchHeader);
  const patch = (p: Partial<HeaderConfig>) => patchHeader(p);

  return (
    <>
      <label className="toggle">
        <input type="checkbox" checked={header.show} onChange={(e) => patch({ show: e.target.checked })} />
        <span>Show header</span>
      </label>

      {header.show ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
          {LINES.map((line) => {
            const on = header[line.showKey];
            return (
              <div key={line.textKey} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={(e) => patch({ [line.showKey]: e.target.checked } as Partial<HeaderConfig>)}
                  />
                  <span>{line.label}</span>
                </label>
                <input
                  className="text-input"
                  value={header[line.textKey]}
                  disabled={!on}
                  onChange={(e) => patch({ [line.textKey]: e.target.value } as Partial<HeaderConfig>)}
                  aria-label={line.label}
                  placeholder={line.placeholder}
                />
              </div>
            );
          })}

          <div className="field__label" style={{ marginBottom: 0 }}>
            Placement
          </div>
          <div className="seg seg--wrap">
            {(['top', 'left'] as const).map((p) => (
              <button
                key={p}
                type="button"
                className={`seg__btn ${header.placement === p ? 'seg__btn--active' : ''}`}
                onClick={() => patch({ placement: p })}
              >
                {p === 'top' ? 'Top' : 'Left'}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
