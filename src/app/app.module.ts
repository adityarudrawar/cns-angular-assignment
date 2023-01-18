import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store'
import { MedDataState } from 'src/models/med-data/med-data.state';
import { HttpClientModule } from '@angular/common/http';
import { AnatomicalDataListComponent } from './components/anatomical-data-list/anatomical-data-list.component';
import { AnatomicalDataItemComponent } from './components/anatomical-data-item/anatomical-data-item.component';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'

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
    MatCardModule,
    MatDialogModule,
    NgxsModule.forRoot([MedDataState],{
      developmentMode: false
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
