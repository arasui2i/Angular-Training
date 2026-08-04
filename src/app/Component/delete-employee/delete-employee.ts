import { Component, Inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-deleteemployee',
  imports: [MatDialogActions, MatDialogContent, MatButton],
  templateUrl: './delete-employee.html',
  styleUrl: './delete-employee.css',
})
export class DeleteEmployee {
  constructor(private dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteEmployee>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  closeDialog() {
    this.dialog.closeAll();
  }

  DeleteEmployee() {
    this.dialogRef.close(this.data.employee);
  }
}
