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

/** Single dispatch: chart id → ECharts option (used by preview AND export). */
export function buildOption(ctx: ChartContext): EChartsOption {
  switch (ctx.type) {
    case 'bar':
      return buildBar(ctx);
    case 'line':
      return buildLine(ctx);
    case 'area':
      return buildArea(ctx);
    case 'pie':
      return buildPie(ctx);
    case 'scatter':
      return buildScatter(ctx);
    case 'jitter':
      return buildJitter(ctx);
    case 'radar':
      return buildRadar(ctx);
    case 'treemap':
      return buildTreemap(ctx);
    case 'funnel':
      return buildFunnel(ctx);
    case 'gauge':
      return buildGauge(ctx);
    case 'heatmap':
      return buildHeatmap(ctx);
    case 'radialBar':
      return buildRadialBar(ctx);
    case 'posNegBar':
      return buildPosNeg(ctx);
    case 'waterfall':
      return buildWaterfall(ctx);
    default:
      return {};
  }
}
