import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DemoMaterialModule } from './demo-module/demo-material.module';
import { CompanyService } from './services/company.service';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [BrowserModule, FormsModule, DemoMaterialModule,HttpClientModule,BrowserAnimationsModule],
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailsComponent],
  bootstrap: [AppComponent],
  providers: [CompanyService]
})
export class AppModule { }
