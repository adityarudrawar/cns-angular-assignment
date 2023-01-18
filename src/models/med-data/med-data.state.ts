import { Injectable } from "@angular/core";
import { StateContext, Action } from "@ngxs/store";
// import { NgxsOnInit } from "@ngxs/store";
import { State } from "@ngxs/store";
import { DataFetchService } from "src/services/data-fetch.service";
import { GetMedData } from "./med-data.actions";
import { MedDataStateModel, Structure } from "./med-data.model";

@State<MedDataStateModel>({
    name: "medDataState",
    defaults: {
        anatomicalData: [],
    }
})
@Injectable()
export class MedDataState {
    constructor(private _dataFetchService: DataFetchService){}

    @Action(GetMedData)
    getMedData(ctx: StateContext<MedDataStateModel>){
        const state = ctx.getState();
        let tempData: Structure[] = [];
        this._dataFetchService.getData().subscribe(response => {
            console.log(response)
            // TODO: set state and filter the components
        });
    }
}