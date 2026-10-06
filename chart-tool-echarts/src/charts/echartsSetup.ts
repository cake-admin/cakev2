// Modular ECharts registration — pull in only the charts, components, and
// renderers we use, so the bundle stays lean (vs importing the full `echarts`).
import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  ScatterChart,
  RadarChart,
  TreemapChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
  MapChart,
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
  AriaComponent,
  GeoComponent,
} from 'echarts/components';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import world from './geo/world.json';
import { WORLD_MAP_NAME } from './geo/registerWorldMap';

echarts.use([
  BarChart,
  LineChart,
  LinesChart, // map callout leader lines
  PieChart,
  ScatterChart,
  RadarChart,
  TreemapChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
  MapChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
  RadarComponent,
  PolarComponent, // radial (polar) bar
  VisualMapComponent, // heatmap / map color scale
  MarkLineComponent, // zero baseline (pos/neg bars)
  AriaComponent, // wireframe decal / pattern fills
  GeoComponent, // world map
  CanvasRenderer, // live preview
  SVGRenderer, // Figma export (SSR → SVG string)
]);

echarts.registerMap(WORLD_MAP_NAME, world as unknown as Parameters<typeof echarts.registerMap>[1]);

export { echarts };
