import { ChartOptions, CartesianChartOptions, PolarChartOptions, SeriesOptions, BarSeriesOptions, LineSeriesOptions, ScatterSeriesOptions, AreaSeriesOptions, PieSeriesOptions, LegendOptions, CaptionOptions, FontWeight, DropShadowOptions, AxisOptions, SeriesLabelOptions, MarkerOptions } from "./chartOptions";
import { CartesianChart } from "./chart/cartesianChart";
import { PolarChart } from "./chart/polarChart";
import { LineSeries } from "./chart/series/lineSeries";
import { ScatterSeries } from "./chart/series/scatterSeries";
import { BarSeries } from "./chart/series/barSeries";
import { AreaSeries } from "./chart/series/areaSeries";
import { PieSeries } from "./chart/series/pieSeries";
import { Chart } from "./chart/chart";
import { Series, SeriesMarker } from "./chart/series/series";
import { DropShadow } from "./scene/dropShadow";
import { CategoryAxis } from "./chart/axis/categoryAxis";
import { NumberAxis } from "./chart/axis/numberAxis";
import { Legend } from "./chart/legend";
import { Caption } from "./caption";
import { GroupedCategoryAxis } from "./chart/axis/groupedCategoryAxis";
import { GroupedCategoryChart } from "./chart/groupedCategoryChart";
export declare class ChartBuilder {
    private static createCartesianChart;
    private static createGroupedCategoryChart;
    static createBarChart(parent: HTMLElement, options: CartesianChartOptions<BarSeriesOptions>): CartesianChart;
    static createColumnChart(parent: HTMLElement, options: CartesianChartOptions<BarSeriesOptions>): CartesianChart;
    static createLineChart(parent: HTMLElement, options: CartesianChartOptions<LineSeriesOptions>): CartesianChart;
    static createScatterChart(parent: HTMLElement, options: CartesianChartOptions<ScatterSeriesOptions>): CartesianChart;
    static createAreaChart(parent: HTMLElement, options: CartesianChartOptions<AreaSeriesOptions>): CartesianChart;
    private static createPolarChart;
    static createDoughnutChart(parent: HTMLElement, options: PolarChartOptions<PieSeriesOptions>): PolarChart;
    static createPieChart(parent: HTMLElement, options: PolarChartOptions<PieSeriesOptions>): PolarChart;
    static createGroupedColumnChart(parent: HTMLElement, options: CartesianChartOptions<BarSeriesOptions>): GroupedCategoryChart;
    static createGroupedBarChart(parent: HTMLElement, options: CartesianChartOptions<BarSeriesOptions>): GroupedCategoryChart;
    static createGroupedLineChart(parent: HTMLElement, options: CartesianChartOptions<LineSeriesOptions>): GroupedCategoryChart;
    static createGroupedAreaChart(parent: HTMLElement, options: CartesianChartOptions<AreaSeriesOptions>): GroupedCategoryChart;
    static createSeries(options: SeriesOptions): BarSeries | AreaSeries | PieSeries | LineSeries | ScatterSeries;
    static initChart<C extends Chart, T extends SeriesOptions>(chart: C, options: ChartOptions<T>): C;
    static initSeries<S extends Series<any>>(series: S, options: SeriesOptions): S;
    static initLineSeries(series: LineSeries, options: LineSeriesOptions): LineSeries;
    static initScatterSeries(series: ScatterSeries, options: ScatterSeriesOptions): ScatterSeries;
    static initLabelOptions(series: SeriesLabelOptions, options: SeriesLabelOptions): void;
    static initBarSeries(series: BarSeries, options: BarSeriesOptions): BarSeries;
    static initAreaSeries(series: AreaSeries, options: AreaSeriesOptions): AreaSeries;
    static initPieSeries(series: PieSeries, options: PieSeriesOptions): PieSeries;
    static initLegend(legend: Legend, options: LegendOptions): void;
    static initMarker(marker: SeriesMarker, options: MarkerOptions): void;
    static setDefaultFontOptions(options: CaptionOptions, fontSize?: number, fontWeight?: FontWeight, fontFamily?: string): void;
    static createTitle(options: CaptionOptions): Caption;
    static createSubtitle(options: CaptionOptions): Caption;
    static createPieTitle(options: CaptionOptions): Caption;
    static createCaption(options: CaptionOptions): Caption;
    static createDropShadow: (options?: DropShadowOptions) => DropShadow;
    static populateAxisProperties<T extends NumberAxis | CategoryAxis | GroupedCategoryAxis>(axis: T, options: AxisOptions): void;
    static createNumberAxis(options: AxisOptions): NumberAxis;
    static createCategoryAxis(options: AxisOptions): CategoryAxis;
    static createGroupedAxis(options: AxisOptions): GroupedCategoryAxis;
    private static setValueIfExists;
    private static setTransformedValueIfExists;
}