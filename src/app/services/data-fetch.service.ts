import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MED_DATA_ENDPOINT, STRUCTURE_DATA_ENDPOINT } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor( private _http:HttpClient) { }

  /**
   * gets medical data from phase1 api
   * @returns Observable
   */
  getData(){
    return this._http.get(MED_DATA_ENDPOINT);
  }

  /**
   * Get details of the anatomical structure from phase2 api
   * @param id anatomical data id
   * @returns Observable
   */
  getDatabyId(id: string){
    // Replace : to _
    id = id.replace(":","_");
    return this._http.get(STRUCTURE_DATA_ENDPOINT + id)
  }
}
