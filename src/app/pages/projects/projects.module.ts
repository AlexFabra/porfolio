import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './projects.component';
import { ModalComponent } from '../../components/modal/modal.component';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatCardModule,
    ModalComponent
  ]
})
export class ProjectsModule { }
