import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataFetchService } from 'src/services/data-fetch.service';

type ItemDetails = {
  name?: string;
  description?: string;
  ontologyLink?: string;
  iri?: string;
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit{

  id : string;
  iri: string;
  description: string;
  ontologyLink: string;
  name: string;
  
  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private _dataFetchService: DataFetchService
  ) {
    this.id = data.id
    this.getItemDetails(this.id)
  }

  ngOnInit(): void {
    this.getItemDetails('UBERON_0002302');
  }

  getItemDetails(id:string){
    this._dataFetchService.getDatabyId(id).subscribe(response => {
      const data = JSON.parse(JSON.stringify(response))._embedded.terms[0];
      this.iri = data.iri;
      this.description = data.description[0];
      this.ontologyLink = data.obo_id;
      this.name = data.label;
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
