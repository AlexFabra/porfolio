import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import {MatCardModule} from '@angular/material/card';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonBarComponent } from '../../components/button-bar/button-bar.component';
import { RouterModule } from '@angular/router';
import { DataViewerComponent } from '../../components/data-viewer/data-viewer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ButtonBarComponent,
    DataViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
