import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExcelService } from './excel.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule,SimpleNotificationsModule.forRoot(),Ng4LoadingSpinnerModule.forRoot()],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ExcelService]
})
export class AppModule { }
