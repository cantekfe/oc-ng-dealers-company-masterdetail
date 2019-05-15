import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './demo-module/demo-material.module';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DealersListModule} from '../../projects/c-dealers-company-list/src/lib/list.module'
@NgModule({
  imports: [BrowserModule, FormsModule, DemoMaterialModule,HttpClientModule,BrowserAnimationsModule,DealersListModule],
  declarations: [
    AppComponent,],
  bootstrap: [AppComponent],
})
export class AppModule { }
