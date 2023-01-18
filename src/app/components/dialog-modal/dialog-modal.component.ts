import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataFetchService } from 'src/app/services/data-fetch.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit{

  /** id of the structure */
  id : string;
  /** iri of the structure */
  iri: string;
  /** description of the structure */
  description: string;
  /** ontology-link for the strucutre */
  ontologyLink: string;
  /** label for the structure */
  name: string;
  
  /**
   * get id of the structure, and fetch the data for the structuren and fill dialog-box with the details
   * @param dialogRef MatDialog object reference
   * @param data Data passed while initilization( id of the structure)
   * @param _dataFetchService API service
   */
  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private _dataFetchService: DataFetchService
  ) {
    this.id = data.id
    this.getItemDetails(this.id)
  }

  ngOnInit(): void {
    this.getItemDetails(this.id);
  }

  /**
   * get details of the structure with id
   * interfaces with the api service
   * @param id structure id
   */
  getItemDetails(id:string){
    this._dataFetchService.getDatabyId(id).subscribe(response => {
      const data = JSON.parse(JSON.stringify(response))._embedded.terms[0];
      this.iri = data.iri;
      this.description = data.description[0];
      this.ontologyLink = data.obo_id;
      this.name = data.label;
    })
  }
  
  /**
   * To maintain opening/closing of dialog-box
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
