import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {

  readonly echartsExtentions: any[];
  option: EChartsOption = {};
  chartWidth:string='';
  @Input() title: string = '';
  @Input() data: object[] = [];
  @ViewChild('chart') chart!: ElementRef;
  
  constructor(private el: ElementRef) {
    this.echartsExtentions = [
      BarChart
    ];
  }

  ngAfterViewInit(): void {
    const chartElement: HTMLDivElement = this.chart.nativeElement;
    this.chartWidth=(this.data.length*70).toString()+'px';
    this.setChartOptions();
    let x = echarts.init(chartElement);
    x.resize()
    
  }

/** crea una gràfica tipus donut amb la informació que rep dels tags.
   */
 async setChartOptions() {

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
    return this.chartWidth+'px';
  }

}
