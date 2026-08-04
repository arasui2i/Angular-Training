import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employeedialogcomponent',
  imports: [MatDialogActions, MatLabel, MatFormField,
    MatDialogContent, MatInputModule, MatButton
    , ReactiveFormsModule],
  templateUrl: './employee-dialog.html',
  styleUrl: './employee-dialog.css',
})
export class EmployeeDialog {
  employeeForm: FormGroup;
  constructor(private dialog: MatDialog,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', [Validators.required]],
      department: ['', Validators.required]
    });

    if (this.data?.employee) {
      this.employeeForm.patchValue({
        name: this.data.employee.name,
        email: this.data.employee.email,
        department: this.data.employee.department,
        designation: this.data.employee.designation
      });
    }
  }

  closeDialog = () => this.dialog.closeAll();

  SaveEmployee() {
    if (this.employeeForm.valid) {
      if (this.data.employee?.id) {
        const employee = {
          id: this.data.employee.id,
          name: this.employeeForm.get("name")?.value,
          email: this.employeeForm.get("email")?.value,
          department: this.employeeForm.get("department")?.value,
          designation: this.employeeForm.get("designation")?.value
        }
        this.dialogRef.close(employee);
      }
      else {
        const employee = {
          id: this.data.employees.length + 1,
          name: this.employeeForm.get("name")?.value,
          email: this.employeeForm.get("email")?.value,
          department: this.employeeForm.get("department")?.value,
          designation: this.employeeForm.get("designation")?.value
        }
        this.dialogRef.close(employee);
      }
    }
  }
}
