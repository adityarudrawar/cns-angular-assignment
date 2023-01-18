export enum BM_TYPE {
    G = 'gene',
    P = 'protein'
}

export interface Structure {
    name?: string;
    id?: string;
    rdfs_label?: string;
    b_type?: BM_TYPE;
}

export interface Row {
    anatomical_structures: Array<Structure>;
    cell_types: Array<Structure>;
    biomarkers: Array<Structure>;
    [key: string]: any;
}

export interface MedDataStateModel{
    anatomicalData: Structure[];
}