import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
console.log("app comp", AppComponent);
import { HelloComponent } from './hello.component';
import { BarChartModule } from '../../../../c-energy-bar-chart/src/public_api';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BarChartModule
    
    ],

  declarations: [
    AppComponent,
    HelloComponent
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
