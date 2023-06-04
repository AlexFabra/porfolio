import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { ModalImgComponent } from './components/modal-img/modal-img.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HttpClient } from '@angular/common/http';
// import { TranslateLoader, TranslateModule} from "@ngx-translate/core";
// import {TranslateHttpLoader} from "@ngx-translate/http-loader"

// export function HttpLoaderFactory(http:HttpClient){
//   return new TranslateHttpLoader(http);
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    // TranslateModule.forRoot({
    //   loader:{
    //     provide:TranslateLoader,
    //     useFactory:HttpLoaderFactory,
    //     deps:[HttpClient]
    //   }
    // })
  ],
  // exports:[TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
