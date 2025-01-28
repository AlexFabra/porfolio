import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts, EChartsCoreOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  readonly echartsExtentions: any[] = [
    BarChart
  ];

  @Input() data: { name: string; value: number }[] = []; // Cambiado para mayor claridad
  @ViewChild('chart') chartRef!: ElementRef; // Referencia al contenedor del gráfico

  option: EChartsCoreOption = {};
  chartWidth: string = '400px'; // Valor por defecto
  private chartInstance!: echarts.ECharts;

  constructor() { }

  ngOnInit(): void {
    // Calcula el ancho del gráfico dinámicamente si hay datos
    if (this.data && this.data.length > 0) {
      this.chartWidth = `${this.data.length * 70}px`;
    }
  }

  ngAfterViewInit(): void {
    // Inicializa el gráfico en el DOM completamente cargado
    const chartDom = this.chartRef.nativeElement;

    if (chartDom.clientWidth > 0 && chartDom.clientHeight > 0) {
      this.chartInstance = echarts.init(chartDom);
      this.createChart();
    }

  }

  createChart() {
    const keys = this.data.map((d) => d.name); // Extrae las claves
    const values = this.data.map((d) => d.value); // Extrae los valores

    this.option = {
      xAxis: {
        type: 'category',
        data: keys,
        axisLabel: {
          rotate: 45, // Opcional: Rotar las etiquetas para gráficos con muchos datos
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: values,
          barCategoryGap: '30%',
          barWidth: 20,
          label: {
            position: 'top',
            show: true,
          },
          itemStyle: {
            color: ['black'],
            borderRadius: [0, 2, 2, 0],
          },
        },
      ],
      legend: {
        show: false, // Opcional: Oculta el legend si no es necesario
      },
      tooltip: {
        trigger: 'axis',
      },
    };

    // Aplica la configuración al gráfico
    this.chartInstance.setOption(this.option);
  }

  // Recalcular tamaño si cambia el contenedor
  onResize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }
}
