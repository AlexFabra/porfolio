import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training.routing.module';
import { MonthHistoryComponent } from 'src/app/components/month-history/month-history.component';
import { ImgCarrouselComponent } from 'src/app/components/img-carrousel/img-carrousel.component';
import {MatBadgeModule} from '@angular/material/badge';
import { EchartsxModule } from 'echarts-for-angular';
import { DonutChartComponent } from 'src/app/components/charts/donut/donut-chart.component';
import { BarChartComponent } from 'src/app/components/charts/bars/bar-chart/bar-chart.component';
import { ModalImgComponent } from 'src/app/components/modal-img/modal-img.component';
import { ModalModule } from 'ngb-modal';


@NgModule({
  declarations: [
    TrainingComponent,
    TimelineComponent,
    MonthHistoryComponent,
    ImgCarrouselComponent,
    DonutChartComponent,
    BarChartComponent,
    ModalImgComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TrainingRoutingModule,
    MatBadgeModule,
    EchartsxModule,
    ModalModule
  ]
})
export class TrainingModule { }
