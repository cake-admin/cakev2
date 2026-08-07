import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import * as echarts from 'echarts/core';
import {
  BarChart,
  GaugeChart,
  HeatmapChart,
  LineChart,
  PieChart,
} from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { ROOKERY } from './chrome';
import {
  THEME_CHART_SAMPLES,
  paletteFor,
  resolveChartChrome,
} from './datavisCharts';

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  GaugeChart,
  HeatmapChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent,
  MarkLineComponent,
  CanvasRenderer,
]);

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-300);
  width: 100%;
  margin-top: var(--space-400);
`;

const ChartCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-150);
  min-width: 0;
  padding: var(--space-200);
  border-radius: var(--radius-200);
  border: var(--stroke-100) solid var(--color-stroke-border);
  background: var(--color-surfaces-on-container);
  box-sizing: border-box;
`;

const ChartTitle = styled.span`
  font-family: ${ROOKERY};
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-icon-secondary);
`;

const ChartHost = styled.div`
  width: 100%;
  height: 180px;
`;

function LiveChart({ option }) {
  const elRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return undefined;
    const chart = echarts.init(el, undefined, { renderer: 'canvas' });
    chartRef.current = chart;
    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(el);
    return () => {
      ro.disconnect();
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  useEffect(() => {
    chartRef.current?.setOption(option, true);
  }, [option]);

  return <ChartHost ref={elRef} role="img" aria-label="Sample chart" />;
}

/**
 * 2–3 compact ECharts samples for one Color theme section.
 * Mounted under swatches; expects a playground theme label
 * (Categorical | Sequential | Semantic | Diverging | Wireframe).
 */
export default function DatavisThemeCharts({ themeLabel }) {
  const samples = THEME_CHART_SAMPLES[themeLabel] ?? [];
  const colors = useMemo(() => paletteFor(themeLabel), [themeLabel]);
  const [chrome, setChrome] = useState(() => resolveChartChrome());

  useEffect(() => {
    setChrome(resolveChartChrome());
    const observer = new MutationObserver(() => {
      setChrome(resolveChartChrome());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class', 'style'],
    });
    return () => observer.disconnect();
  }, []);

  if (!samples.length) return null;

  return (
    <ChartGrid>
      {samples.map((sample) => {
        const option = sample.build(colors, chrome);
        return (
          <ChartCard key={sample.id}>
            <ChartTitle>{sample.title}</ChartTitle>
            <LiveChart option={option} />
          </ChartCard>
        );
      })}
    </ChartGrid>
  );
}
