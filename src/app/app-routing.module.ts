import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'portfolio',loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)},
  { path: '**', redirectTo: 'portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
