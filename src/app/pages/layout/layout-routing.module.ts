import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'training', loadChildren: () => import('../training/training.module').then(m => m.TrainingModule) },
    { path: 'projects', loadChildren: () => import('../projects/projects.module').then(m=>m.ProjectsModule)},
    { path: '', redirectTo: 'training', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})

export class LayoutRoutingModule { }
