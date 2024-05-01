import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)},
    { path: '**', redirectTo: '' }
];
