import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ClimaComponent } from 'src/app/clima/clima.component'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
