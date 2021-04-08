import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {
  customerName: string = '';
  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.customerName = this.data.name;
  }


  close() {
    this.dialogRef.close();
  }

  deleteCustomer() {
    this.dialogRef.close(true);
  }

}
