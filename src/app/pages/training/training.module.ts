import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training.routing.module';
import {MatBadgeModule} from '@angular/material/badge';
import { MonthHistoryComponent } from '../../components/month-history/month-history.component';
import { ImgCarrouselComponent } from '../../components/img-carrousel/img-carrousel.component';
import { DonutChartComponent } from '../../components/charts/donut/donut-chart.component';
import { BarChartComponent } from '../../components/charts/bars/bar-chart/bar-chart.component';
import { ModalImgComponent } from '../../components/modal-img/modal-img.component';
import { EchartsxModule } from 'echarts-for-angular';
import { TimelineComponent } from '../../components/timeline/timeline.component';


@NgModule({
  declarations: [
    TrainingComponent,
    MonthHistoryComponent,
    ImgCarrouselComponent,
    DonutChartComponent,
    BarChartComponent,
    ModalImgComponent,
    TimelineComponent
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TrainingRoutingModule,
    MatBadgeModule,
    EchartsxModule
  ]
})
export class TrainingModule { }
