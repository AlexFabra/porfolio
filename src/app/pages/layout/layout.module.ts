import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import {MatCardModule} from '@angular/material/card';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonBarComponent } from '../../components/button-bar/button-bar.component';
import { DataViewerComponent } from '../../components/data-viewer/data-viewer.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ButtonBarComponent,
    DataViewerComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
