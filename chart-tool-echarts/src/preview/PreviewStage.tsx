import { useEffect, useMemo, useRef, useState } from 'react';
import { useChartStore } from '../state/chartStore';
import { useChartTheme } from '../theme/ThemeProvider';
import { buildOption } from '../charts/options/buildOption';
import { EChart } from '../charts/EChart';

/** Hosts the live ECharts instance; option is a pure function of the store + theme. */
export function PreviewStage() {
  const type = useChartStore((s) => s.type);
  const data = useChartStore((s) => s.data);
  const color = useChartStore((s) => s.color);
  const style = useChartStore((s) => s.style);
  const header = useChartStore((s) => s.header);
  const theme = useChartTheme();
  const wantsGlobe = type === 'map' && style.mapProjection === 'globe';
  const [glReady, setGlReady] = useState(false);
  const [glError, setGlError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ width: 920, height: 640 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect || rect.width < 2 || rect.height < 2) return;
      setFrame((prev) =>
        Math.abs(prev.width - rect.width) < 0.5 && Math.abs(prev.height - rect.height) < 0.5
          ? prev
          : { width: rect.width, height: rect.height },
      );
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!wantsGlobe) {
      setGlError(null);
      return;
    }
    let cancelled = false;
    setGlError(null);
    void import('../charts/echartsGlSetup')
      .then(() => {
        if (!cancelled) setGlReady(true);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : String(err);
        setGlError(msg || 'Failed to load WebGL globe');
        setGlReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, [wantsGlobe]);

  const useGlobe = wantsGlobe && glReady && !glError;

  const option = useMemo(() => {
    // Until echarts-gl loads (or if it failed), render the flat choropleth.
    const effectiveStyle = useGlobe ? style : { ...style, mapProjection: 'flat' as const };
    try {
      return buildOption({ type, data, color, style: effectiveStyle, header, theme, frame });
    } catch (err) {
      console.error('[PreviewStage] buildOption failed', err);
      return buildOption({
        type,
        data,
        color,
        style: { ...style, mapProjection: 'flat' },
        header,
        theme,
        frame,
      });
    }
  }, [type, data, color, style, header, theme, useGlobe, frame]);

  // Remount when entering/leaving WebGL — LayerGL hacks the painter; reusing the
  // same instance after a 2D map often throws and blanks the app.
  const chartKey = `${type}-${useGlobe ? 'globe' : 'flat'}`;

  return (
    <div className="stage" style={{ background: theme.surface.canvas }}>
      <div className="stage__card" ref={cardRef}>
        <EChart
          key={chartKey}
          option={option}
          linkHighlightByName={type === 'map' && !useGlobe && style.showDirectLabels}
        />
        {wantsGlobe && !glReady && !glError ? (
          <div className="field__hint" style={{ padding: 8, textAlign: 'center' }}>
            Loading globe…
          </div>
        ) : null}
        {glError ? (
          <div className="field__hint" style={{ padding: 8, textAlign: 'center' }} role="alert">
            Globe failed to load ({glError}). Showing flat map — check WebGL / reload.
          </div>
        ) : null}
      </div>
    </div>
  );
}
