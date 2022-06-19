import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training.routing.module';
import { MonthHistoryComponent } from 'src/app/components/month-history/month-history.component';
import { ImgCarrouselComponent } from 'src/app/components/img-carrousel/img-carrousel.component';


@NgModule({
  declarations: [
    TrainingComponent,
    TimelineComponent,
    MonthHistoryComponent,
    ImgCarrouselComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
