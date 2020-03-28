import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { StocksDataComponent } from './stocks-data/stocks-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, FileUploadComponent, StocksDataComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    GoogleChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
