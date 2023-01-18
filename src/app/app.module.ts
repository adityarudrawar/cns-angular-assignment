import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'
import { MedDataState } from 'src/models/med-data/med-data.state';
import { AnatomicalDataListComponent } from './components/anatomical-data-list/anatomical-data-list.component';
import { AnatomicalDataItemComponent } from './components/anatomical-data-item/anatomical-data-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AnatomicalDataListComponent,
    AnatomicalDataItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  NgxsModule.forRoot([MedDataState],{
    developmentMode: false
  })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
