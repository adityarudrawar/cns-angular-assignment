/** BM TYPE */
export enum BM_TYPE {
    G = 'gene',
    P = 'protein'
}

/** Anatomical Data Strucure */
export type Structure =  {
    name?: string;
    id?: string;
    rdfs_label?: string;
    b_type?: BM_TYPE;
}

/** Medical Data Structure */
export type Row = {
    anatomical_structures: Array<Structure>;
    cell_types: Array<Structure>;
    biomarkers: Array<Structure>;
    [key: string]: any;
}

/** State Model Strucuture */
export interface MedDataStateModel{
    anatomicalData: Structure[];
}