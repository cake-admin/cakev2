import { useChartStore } from '../../state/chartStore';
import type { BarMode, BarOrientation } from '../../charts/types';

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: Array<{ id: T; label: string }>;
  onChange: (v: T) => void;
}) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div className="field__label">{label}</div>
      <div className="seg seg--wrap">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`seg__btn ${value === o.id ? 'seg__btn--active' : ''}`}
            onClick={() => onChange(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Bar orientation + multi-series arrangement (single / grouped / stacked). */
export function LayoutControls() {
  const type = useChartStore((s) => s.type);
  const style = useChartStore((s) => s.style);
  const patch = useChartStore((s) => s.patchStyle);

  if (type !== 'bar') {
    return <p className="field__hint">No layout options for this chart type.</p>;
  }

  return (
    <>
      <Segmented<BarOrientation>
        label="Orientation"
        value={style.orientation}
        options={[
          { id: 'vertical', label: 'Vertical' },
          { id: 'horizontal', label: 'Horizontal' },
        ]}
        onChange={(v) => patch({ orientation: v })}
      />
      <Segmented<BarMode>
        label="Series layout"
        value={style.barMode}
        options={[
          { id: 'single', label: 'Single' },
          { id: 'grouped', label: 'Grouped' },
          { id: 'stacked', label: 'Stacked' },
        ]}
        onChange={(v) => patch({ barMode: v })}
      />
    </>
  );
}
