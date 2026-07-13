import { useChartStore } from '../../state/chartStore';
import type { BarMode, BarOrientation, CircularStyle, LegendPosition, LineStyle, ScatterStyle } from '../../charts/types';

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  suffix = '',
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <label className="slider">
      <span className="slider__label">
        {label}
        <span className="slider__value">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}

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

export function StyleControls() {
  const type = useChartStore((s) => s.type);
  const style = useChartStore((s) => s.style);
  const patch = useChartStore((s) => s.patchStyle);

  const isBar = type === 'bar';
  const isLineArea = type === 'line' || type === 'area';
  const isCartesian =
    isBar || isLineArea || type === 'scatter' || type === 'jitter' || type === 'posNegBar' || type === 'waterfall';

  return (
    <>
      {isBar ? (
        <Segmented<BarOrientation>
          label="Orientation"
          value={style.orientation}
          options={[
            { id: 'vertical', label: 'Vertical' },
            { id: 'horizontal', label: 'Horizontal' },
          ]}
          onChange={(v) => patch({ orientation: v })}
        />
      ) : null}
      {isBar ? (
        <Segmented<BarMode>
          label="Layout"
          value={style.barMode}
          options={[
            { id: 'single', label: 'Single' },
            { id: 'grouped', label: 'Grouped' },
            { id: 'stacked', label: 'Stacked' },
          ]}
          onChange={(v) => patch({ barMode: v })}
        />
      ) : null}
      {isLineArea ? (
        <Segmented<LineStyle>
          label="Line style"
          value={style.lineStyle}
          options={[
            { id: 'linear', label: 'Linear' },
            { id: 'smooth', label: 'Smooth' },
            { id: 'step', label: 'Step' },
          ]}
          onChange={(v) => patch({ lineStyle: v })}
        />
      ) : null}
      {isLineArea ? (
        <Slider label="Stroke width" min={1} max={6} step={0.5} value={style.strokeWidth} onChange={(v) => patch({ strokeWidth: v })} suffix="px" />
      ) : null}

      {type === 'scatter' ? (
        <Segmented<ScatterStyle>
          label="Style"
          value={style.scatterStyle}
          options={[
            { id: 'scatter', label: 'Scatter' },
            { id: 'bubble', label: 'Bubble' },
          ]}
          onChange={(v) => patch({ scatterStyle: v })}
        />
      ) : null}
      {type === 'scatter' || type === 'jitter' ? (
        <Slider label="Point size" min={2} max={14} step={1} value={style.pointRadius} onChange={(v) => patch({ pointRadius: v })} suffix="px" />
      ) : null}

      {type === 'pie' ? (
        <Segmented<CircularStyle>
          label="Style"
          value={style.circularStyle}
          options={[
            { id: 'donut', label: 'Donut' },
            { id: 'pie', label: 'Pie' },
            { id: 'half', label: 'Half' },
            { id: 'nested', label: 'Nested' },
            { id: 'polar', label: 'Polar' },
          ]}
          onChange={(v) => patch({ circularStyle: v })}
        />
      ) : null}
      {type === 'pie' && (style.circularStyle === 'donut' || style.circularStyle === 'half') ? (
        <Slider label="Donut hole" min={0} max={0.85} step={0.05} value={style.donutInnerRatio} onChange={(v) => patch({ donutInnerRatio: v })} />
      ) : null}

      {isCartesian ? <Toggle label="Show axes" checked={style.showAxes} onChange={(v) => patch({ showAxes: v })} /> : null}
      {isCartesian ? <Toggle label="Show gridlines" checked={style.showGrid} onChange={(v) => patch({ showGrid: v })} /> : null}
      <Toggle label="Show legend" checked={style.showLegend} onChange={(v) => patch({ showLegend: v })} />
      {style.showLegend ? (
        <Segmented<LegendPosition>
          label="Legend position"
          value={style.legendPosition}
          options={[
            { id: 'bottom', label: 'Bottom' },
            { id: 'right', label: 'Right' },
          ]}
          onChange={(v) => patch({ legendPosition: v })}
        />
      ) : null}
      <Toggle label="Direct labels" checked={style.showDirectLabels} onChange={(v) => patch({ showDirectLabels: v })} />
    </>
  );
}
