import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { Customer2Component } from './customer2/customer2.component';
import { SearchBoxDirective } from './search-box.directive';
import { SearchBox2Directive } from './search-box2/search-box2.directive';
import { SalesDataService } from './sales-data.service';
import { SalesData2Service } from './sales-data2.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    Customer2Component,
    SearchBoxDirective,
    SearchBox2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [SalesDataService, SalesData2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
