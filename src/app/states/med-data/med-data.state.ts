import { Injectable } from "@angular/core";
import { StateContext, Action } from "@ngxs/store";
import { State } from "@ngxs/store";
import { DataFetchService } from "src/app/services/data-fetch.service";
import { GetMedData } from "./med-data.actions";
import { MedDataStateModel, Structure, Row } from "./med-data.model";

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
        const tempData: Array<Structure> = [];

        this._dataFetchService.getData().subscribe(response => {
            const data: Row[] = JSON.parse(JSON.stringify(response)).data;
           
            // Filter the components
            const uniqueNames = new Set<string>();
            data.forEach( dataElement => {
                dataElement.anatomical_structures.forEach( structure => {
                    if (structure.name != null && !uniqueNames.has(structure.name)) {
                        tempData.push(structure)
                        uniqueNames.add(structure.name)
                    };
                }); 
            });

            ctx.setState({
                ...state,
                anatomicalData: tempData
            })
        });
    }
}