import { Component, Input, OnInit, Type } from '@angular/core';
import { EChartsOption,ChartView } from 'echarts';
import { BarChart, LineChart, PieChart, PieSeriesOption } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";

interface donut { name:any, value:number}
interface bar {data: number }

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})

export class DonutChartComponent implements OnInit {

  readonly echartsExtentions: any[];
  option: EChartsOption = {};

  @Input() data:any = []
  
  constructor() {
    this.echartsExtentions = [
      BarChart,
      LineChart,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      PieChart
    ];
   }

  ngOnInit(): void {
    this.createChart();
  }

/** crea una gràfica tipus donut amb la informació que rep dels tags.
   */
 async createChart() {
    //configuració del chart:
    this.option= {
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
}


}
