import { useEffect, useState } from 'react';
import { useChartStore } from '../../state/chartStore';
import { CHART_REGISTRY } from '../../charts/registry';
import {
  renderChartSvg,
  exportScale,
  clampExportScale,
} from '../../export/renderStaticSvg';
import { copySvg, downloadSvg, downloadDataUrl } from '../../export/clipboard';
import { previewChartBridge } from '../../preview/previewChartBridge';
import { NumberInput } from './NumberInput';
import type { Mode } from '../../tokens/tokens.types';

const MODES: Mode[] = ['light', 'dark', 'hct'];
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
  const recommendedScale = exportScale(w, h);
  const [fontScale, setFontScale] = useState(recommendedScale);

  // Size presets / W×H edits refresh the recommended value — follow it so the
  // field stays a sensible default; users can still nudge it after.
  useEffect(() => {
    setFontScale(recommendedScale);
  }, [recommendedScale]);

  const scale = clampExportScale(fontScale);
  const globeMode = type === 'map' && style.mapProjection === 'globe';
  const build = (mode: Mode) =>
    renderChartSvg({ type, data, color, style, header, mode, width: w, height: h, scale });

  const flash = (msg: string) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(''), 2000);
  };

  const onCopy = async (mode: Mode) => {
    if (globeMode) {
      flash('Globe has no SVG export — use PNG');
      return;
    }
    const ok = await copySvg(build(mode));
    flash(ok ? `Copied ${mode} ${w}×${h}` : 'Copy failed');
  };
  const onDownloadSvg = (mode: Mode) => {
    if (globeMode) {
      flash('Globe has no SVG export — use PNG');
      return;
    }
    downloadSvg(build(mode), `${def.exportName}-${mode}-${w}x${h}.svg`);
    flash(`Downloaded ${mode} ${w}×${h}`);
  };

  const onDownloadPng = () => {
    // Captures the live preview (current theme). Globe is WebGL-only.
    // null background → keep canvas alpha (transparent export toggle).
    const url = previewChartBridge.getDataURL(2, style.transparentBackground ? null : '#ffffff');
    if (!url) {
      flash('PNG failed — is the preview ready?');
      return;
    }
    downloadDataUrl(url, `${def.exportName}-preview-${w}x${h}.png`);
    flash('Downloaded PNG from live preview');
  };

  return (
    <>
      {globeMode ? (
        <p className="field__hint">
          Globe uses WebGL — <strong>live preview &amp; PNG only</strong>. SVG / Figma handoff is
          unavailable. Switch Projection to Flat map for editable SVG.
        </p>
      ) : (
        <p className="field__hint">
          Clean SVG with editable text. Enter the size you’ll place it at — fonts &amp; spacing are
          sized for that dimension (Figma won’t rescale text when you resize a frame). Lower the
          font scale if labels clip at the edge.
        </p>
      )}

      {!globeMode ? (
        <>
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
          </div>

          <div className="dim-row" style={{ marginTop: 8 }}>
            <label className="dim-row__field dim-row__field--grow">
              Font scale
              <NumberInput
                value={fontScale}
                onChange={setFontScale}
                ariaLabel="Export font scale"
                className="text-input dim-row__input"
              />
            </label>
            <span className="dim-row__scale" title="Auto scale from export size (640×420 = 1×)">
              Recommended {recommendedScale}×
            </span>
            {scale !== recommendedScale ? (
              <button
                type="button"
                className="btn btn--sm"
                onClick={() => setFontScale(recommendedScale)}
              >
                Reset
              </button>
            ) : null}
          </div>

          <div className="seg seg--wrap" style={{ marginBottom: 12, marginTop: 8 }}>
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
              <button type="button" className="btn btn--sm" onClick={() => onDownloadSvg(mode)}>
                Download
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className="export-row">
          <span className="export-row__label">PNG</span>
          <button type="button" className="btn btn--sm" onClick={onDownloadPng}>
            Download preview PNG
          </button>
        </div>
      )}

      {type === 'map' && style.mapProjection === 'flat' ? (
        <div className="export-row" style={{ marginTop: 8 }}>
          <span className="export-row__label">PNG</span>
          <button type="button" className="btn btn--sm" onClick={onDownloadPng}>
            Download preview PNG
          </button>
        </div>
      ) : null}

      <div className={`export-status ${status.includes('failed') || status.includes('no SVG') ? 'export-status--error' : ''}`} role="status" aria-live="polite">
        {status}
      </div>
    </>
  );
}
