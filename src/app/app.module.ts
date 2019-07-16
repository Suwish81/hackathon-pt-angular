import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExcelService } from './excel.service';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, SimpleNotificationsModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ExcelService]
})
export class AppModule { }
