import { Component, OnInit } from '@angular/core';
import { Structure } from 'src/app/states/med-data/med-data.model';
import { Select, Store } from '@ngxs/store';
import { GetMedData } from 'src/app/states/med-data/med-data.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anatomical-data-list',
  templateUrl: './anatomical-data-list.component.html',
  styleUrls: ['./anatomical-data-list.component.scss']
})
export class AnatomicalDataListComponent implements OnInit{

  /**
   * Anatomical data
   */
  data: Structure[] = [] ;
  
  /**
   * state select
   */
  @Select((state: { medDataState: { anatomicalData: Structure[]; }; })  => state.medDataState.anatomicalData) dataList$: Observable<Structure[]>;
  
  /**
   * Initialises state change
   * @param store ngxs store object
   */
  constructor(private store:Store){
    this.store.dispatch(new GetMedData());
  }

  /**
   * get data from state when state changes
   * initialise data with changing state
   */
  ngOnInit(): void {
    this.dataList$.subscribe(x => {
      this.data = x; 
    });
  }
}
