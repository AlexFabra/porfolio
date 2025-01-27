import { AfterViewInit, Component, ElementRef, Input, OnInit, Type, ViewChild } from '@angular/core';
import { EChartsOption, ChartView } from 'echarts';
import { BarChart, LineChart, PieChart, PieSeriesOption } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import * as echarts from 'echarts';

interface donut { name: any, value: number }
interface bar { data: number }

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})

export class DonutChartComponent implements AfterViewInit {

  readonly echartsExtentions: any[];
  option: EChartsOption = {};
  @ViewChild('chart') chartRef!: ElementRef; // Referencia al contenedor del gráfico
  @Input() data: any = []
  private chartInstance!: echarts.ECharts;
  chartWidth: string = '400px'; // Valor por defecto

  constructor() {
    this.echartsExtentions = [
      PieChart
    ];
  }

  ngAfterViewInit(): void {
    const chartDom = this.chartRef.nativeElement;
    if (chartDom.clientWidth > 0 && chartDom.clientHeight > 0) {
      this.chartInstance = echarts.init(chartDom);
      this.createChart();
    }
  }

  /** crea una gràfica tipus donut amb la informació que rep dels tags.
     */
  async createChart() {
    //configuració del chart:
    this.option = {
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          data: this.data,
          animation: true,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '25'
            }
          },
          labelLine: {
            show: false
          },
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      ],
      legend: [
        {
          data: this.data
        }
      ],
    }
    // Aplica la configuración al gráfico
    this.chartInstance.setOption(this.option);
  }


}
