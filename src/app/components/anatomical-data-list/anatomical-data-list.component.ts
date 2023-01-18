import { Component, OnInit } from '@angular/core';
import { MedDataStateModel, Structure } from 'src/models/med-data/med-data.model';
import { Select, Store } from '@ngxs/store';
import { GetMedData } from 'src/models/med-data/med-data.actions';
import { Observable } from 'rxjs';
import { MedDataState } from 'src/models/med-data/med-data.state';
import { state } from '@angular/animations';

@Component({
  selector: 'app-anatomical-data-list',
  templateUrl: './anatomical-data-list.component.html',
  styleUrls: ['./anatomical-data-list.component.scss']
})
export class AnatomicalDataListComponent implements OnInit{

  data: Structure[] = [] ;
  
  @Select((state: { medDataState: { anatomicalData: Structure[]; }; })  => state.medDataState.anatomicalData) dataList$: Observable<Structure[]>;
  
  constructor(private store:Store){
    this.store.dispatch(new GetMedData());
  }

  ngOnInit(): void {
    this.dataList$.subscribe(x => {
      this.data = x;  
      console.log('this.data=====', this.data)   
    });
  }
}
