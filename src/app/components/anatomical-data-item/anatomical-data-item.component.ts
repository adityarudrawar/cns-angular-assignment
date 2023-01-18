import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-anatomical-data-item',
  templateUrl: './anatomical-data-item.component.html',
  styleUrls: ['./anatomical-data-item.component.scss']
})
export class AnatomicalDataItemComponent {

  /** id of the anatomical data strucutre */
  @Input() id: string= "1";

  /** name of the anatomical data structure */
  @Input() name: string = "Aditya";

  /**
   * 
   * @param dialog MatDialog object to initialise the MatModule Dialog
   * Uses Dependency Injection
   */
  constructor(public dialog: MatDialog) {}
  
  /**
   * Open the dialog-modal, which shows the details of the anatomical-structure
   */
  openDialog(): void {
      const dialogRef = this.dialog.open(DialogModalComponent, {
        data: { id: this.id },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
