import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatCardModule
  ]
})
export class ProjectsModule { }
