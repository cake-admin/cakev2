import { useState } from 'react';
import { useChartStore } from '../../state/chartStore';
import { CHART_REGISTRY } from '../../charts/registry';
import { renderChartSvg, exportScale } from '../../export/renderStaticSvg';
import { copySvg, downloadSvg } from '../../export/clipboard';
import { NumberInput } from './NumberInput';
import type { Mode } from '../../tokens/tokens.types';

const MODES: Mode[] = ['light', 'dark'];
const PRESETS: Array<[number, number]> = [
  [640, 420],
  [960, 600],
  [1280, 840],
  [1920, 1200],
];

export function ExportControls() {
  const type = useChartStore((s) => s.type);
  const data = useChartStore((s) => s.data);
  const color = useChartStore((s) => s.color);
  const style = useChartStore((s) => s.style);
  const header = useChartStore((s) => s.header);
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(420);
  const [status, setStatus] = useState('');

  const def = CHART_REGISTRY[type];
  const w = Math.max(80, Math.round(width));
  const h = Math.max(80, Math.round(height));
  const scale = exportScale(w, h);
  const build = (mode: Mode) => renderChartSvg({ type, data, color, style, header, mode, width: w, height: h });

  const flash = (msg: string) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(''), 2000);
  };

  const onCopy = async (mode: Mode) => {
    const ok = await copySvg(build(mode));
    flash(ok ? `Copied ${mode} ${w}×${h}` : 'Copy failed');
  };
  const onDownload = (mode: Mode) => {
    downloadSvg(build(mode), `${def.exportName}-${mode}-${w}x${h}.svg`);
    flash(`Downloaded ${mode} ${w}×${h}`);
  };

  return (
    <>
      <p className="field__hint">
        Clean SVG with editable text. Enter the size you’ll place it at — fonts &amp; spacing are
        sized for that dimension (Figma won’t rescale text when you resize a frame).
      </p>

      <div className="dim-row">
        <label className="dim-row__field">
          W
          <NumberInput value={width} onChange={setWidth} ariaLabel="Export width (px)" className="text-input dim-row__input" />
        </label>
        <span className="dim-row__x">×</span>
        <label className="dim-row__field">
          H
          <NumberInput value={height} onChange={setHeight} ariaLabel="Export height (px)" className="text-input dim-row__input" />
        </label>
        <span className="dim-row__scale" title="Font/spacing scale relative to the 640×420 baseline">
          {scale}× fonts
        </span>
      </div>

      <div className="seg seg--wrap" style={{ marginBottom: 12 }}>
        {PRESETS.map(([pw, ph]) => (
          <button
            key={`${pw}x${ph}`}
            type="button"
            className={`seg__btn ${w === pw && h === ph ? 'seg__btn--active' : ''}`}
            onClick={() => {
              setWidth(pw);
              setHeight(ph);
            }}
          >
            {pw}×{ph}
          </button>
        ))}
      </div>

      {MODES.map((mode) => (
        <div className="export-row" key={mode}>
          <span className="export-row__label">{mode}</span>
          <button type="button" className="btn btn--sm" onClick={() => onCopy(mode)}>
            Copy
          </button>
          <button type="button" className="btn btn--sm" onClick={() => onDownload(mode)}>
            Download
          </button>
        </div>
      ))}
      <div className="export-status" role="status" aria-live="polite">
        {status}
      </div>
    </>
  );
}
