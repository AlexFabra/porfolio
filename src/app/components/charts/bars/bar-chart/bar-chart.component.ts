import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  readonly echartsExtentions: any[];
  option: EChartsOption = {};
  charWidth:number=0;
  @Input() data: object[] = [];
  
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
    this.charWidth=this.data.length*70;
  }

/** crea una gràfica tipus donut amb la informació que rep dels tags.
   */
 async createChart() {
    this.option = {
      xAxis: {
        data: Array.from(this.data.keys())
      },
      yAxis: {
      },
      series: [
        {
          type: 'bar',
          data: Array.from(this.data.values()),
          barCategoryGap: 30,
          barWidth: 20,
          label: {
            position: [0, -14],
            formatter: '{b}',
            show: true
          },
          itemStyle: {
            color: 'whitesmoke',
              borderRadius: [0, 2, 2, 0],
          },
        },
      ],
      legend: [
        {
          data: this.data
        }
      ],
    };
  }

  getWidth(){
    return this.charWidth+'px';
  }

}
