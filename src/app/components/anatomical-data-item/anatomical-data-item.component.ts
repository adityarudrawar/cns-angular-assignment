import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-anatomical-data-item',
  templateUrl: './anatomical-data-item.component.html',
  styleUrls: ['./anatomical-data-item.component.scss']
})
export class AnatomicalDataItemComponent {

  // TODO: Remove undefined
  @Input() id: string= "1";

  @Input() name: string = "Aditya";

  
  constructor(public dialog: MatDialog) {
    console.log("herere");
    console.log(dialog);
  }

  openDialog(): void {
      const dialogRef = this.dialog.open(DialogModalComponent, {
        data: { id: this.id },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
