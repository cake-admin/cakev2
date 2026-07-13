import { useMemo } from 'react';
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

  const option = useMemo(
    () => buildOption({ type, data, color, style, header, theme }),
    [type, data, color, style, header, theme],
  );

  return (
    <div className="stage" style={{ background: theme.surface.canvas }}>
      <div className="stage__card">
        <EChart option={option} />
      </div>
    </div>
  );
}
