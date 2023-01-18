import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MED_DATA_ENDPOINT, STRUCTURE_DATA_ENDPOINT } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor( private _http:HttpClient) { }

  getData(){
    return this._http.get(MED_DATA_ENDPOINT);
  }

  getDatabyId(id: string){
    // Replace : to _
    id = id.replace(":","_");
    return this._http.get(STRUCTURE_DATA_ENDPOINT + id)
  }
}
