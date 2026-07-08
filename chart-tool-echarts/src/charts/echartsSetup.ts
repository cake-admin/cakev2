// Modular ECharts registration — pull in only the charts, components, and
// renderers we use, so the bundle stays lean (vs importing the full `echarts`).
import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  RadarChart,
  TreemapChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
  RadarComponent,
  PolarComponent,
  VisualMapComponent,
  MarkLineComponent,
} from 'echarts/components';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  RadarChart,
  TreemapChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
  RadarComponent,
  PolarComponent, // radial (polar) bar
  VisualMapComponent, // heatmap color scale
  MarkLineComponent, // zero baseline (pos/neg bars)
  CanvasRenderer, // live preview
  SVGRenderer, // Figma export (SSR → SVG string)
]);

export { echarts };
