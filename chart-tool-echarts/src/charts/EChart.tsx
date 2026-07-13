import { useEffect, useRef } from 'react';
import type { EChartsOption } from 'echarts';
import { echarts } from './echartsSetup';

interface EChartProps {
  option: EChartsOption;
  className?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/** Swap a mark's emphasis (hover) color to its token Press color while pressed. */
function patchEmphasisColor(e: any, color: string) {
  return { ...(e || {}), itemStyle: { ...(e?.itemStyle || {}), color } };
}

/**
 * Thin React host for an ECharts instance (canvas renderer for the live preview,
 * ResizeObserver auto-resize, full `notMerge` option replace on update).
 *
 * Token interaction states:
 *  - hover → the chart's declarative `emphasis` (token Hover color).
 *  - press → on mousedown we re-point the pressed mark's `emphasis` color to its
 *    token Press color (carried on `select.itemStyle.color`) via a light merge,
 *    so it overrides hover while held; release restores the clean option. ECharts
 *    always renders emphasis over select under the cursor, so press must ride on
 *    emphasis rather than the select state itself.
 */
export function EChart({ option, className }: EChartProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof echarts.init> | null>(null);
  const optionRef = useRef(option);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const chart = echarts.init(el, undefined, { renderer: 'canvas' });
    chartRef.current = chart;
    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(el);

    let restore: (() => void) | null = null;
    const release = () => {
      if (restore) {
        restore();
        restore = null;
      }
    };

    chart.on('mousedown', (p: { seriesIndex?: number; dataIndex?: number }) => {
      release();
      const s = p.seriesIndex;
      const d = p.dataIndex;
      if (typeof s !== 'number') return;
      const opt = optionRef.current as any;
      const seriesArr: any[] = Array.isArray(opt.series) ? opt.series : opt.series ? [opt.series] : [];
      const ser = seriesArr[s];
      if (!ser) return;

      const item = typeof d === 'number' && Array.isArray(ser.data) ? ser.data[d] : undefined;
      const itemLevel = !!(item && typeof item === 'object' && item.select?.itemStyle?.color);
      const press: string | undefined = itemLevel ? item.select.itemStyle.color : ser.select?.itemStyle?.color;
      if (!press) return;

      const patched = seriesArr.map((se: any, i: number) => {
        if (i !== s) return se;
        if (itemLevel) {
          const data = se.data.map((it: any, j: number) =>
            j === d ? { ...it, emphasis: patchEmphasisColor(it.emphasis, press) } : it,
          );
          return { ...se, data };
        }
        return { ...se, emphasis: patchEmphasisColor(se.emphasis, press) };
      });

      // Merge (not notMerge) so the existing hover/emphasis state is preserved and
      // the entrance animation doesn't replay — only the emphasis color changes.
      chart.setOption({ series: patched });
      restore = () => chart.setOption({ series: seriesArr });
    });

    const zr = chart.getZr();
    zr.on('mouseup', release);
    chart.on('globalout', release);

    return () => {
      ro.disconnect();
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  useEffect(() => {
    optionRef.current = option;
    chartRef.current?.setOption(option, true);
  }, [option]);

  return <div ref={elRef} className={className} style={{ width: '100%', height: '100%' }} />;
}
