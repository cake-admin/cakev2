import type { EChartsOption } from 'echarts';
import type { ChartContext } from './common';
import { buildBar } from './bar';
import { buildLine, buildArea } from './line';
import { buildPie } from './pie';
import { buildScatter } from './scatter';
import { buildJitter } from './jitter';
import { buildRadar } from './radar';
import { buildTreemap } from './treemap';
import { buildFunnel } from './funnel';
import { buildGauge } from './gauge';
import { buildHeatmap } from './heatmap';
import { buildRadialBar } from './radialBar';
import { buildPosNeg } from './posNeg';
import { buildWaterfall } from './waterfall';
import { buildMap } from './map';

/** Single dispatch: chart id → ECharts option (used by preview AND export). */
export function buildOption(ctx: ChartContext): EChartsOption {
  let option: EChartsOption;
  switch (ctx.type) {
    case 'bar':
      option = buildBar(ctx);
      break;
    case 'line':
      option = buildLine(ctx);
      break;
    case 'area':
      option = buildArea(ctx);
      break;
    case 'pie':
      option = buildPie(ctx);
      break;
    case 'scatter':
      option = buildScatter(ctx);
      break;
    case 'jitter':
      option = buildJitter(ctx);
      break;
    case 'radar':
      option = buildRadar(ctx);
      break;
    case 'treemap':
      option = buildTreemap(ctx);
      break;
    case 'funnel':
      option = buildFunnel(ctx);
      break;
    case 'gauge':
      option = buildGauge(ctx);
      break;
    case 'heatmap':
      option = buildHeatmap(ctx);
      break;
    case 'radialBar':
      option = buildRadialBar(ctx);
      break;
    case 'posNegBar':
      option = buildPosNeg(ctx);
      break;
    case 'waterfall':
      option = buildWaterfall(ctx);
      break;
    case 'map':
      option = buildMap(ctx);
      break;
    default:
      option = {};
  }
  // Export / pasted option: omit the card fill when the style toggle is on.
  // Preview stage still paints its own chrome behind the chart.
  if (ctx.style.transparentBackground) {
    return { ...option, backgroundColor: 'transparent' };
  }
  return option;
}
