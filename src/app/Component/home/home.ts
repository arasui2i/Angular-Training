import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialog } from '../employee-dialog/employee-dialog';
import { DeleteEmployee } from '../delete-employee/delete-employee';
import { Observable } from 'rxjs';
import { Employees } from '../../models/employees';
import { Store } from '@ngrx/store';
import { selectAllEmployees } from '../../store/employee/employee.selectors';
import * as EmployeeActions from '../../store/employee/employee.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-component',
  imports: [MatButton, MatTableModule, MatIcon, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly employees$: Observable<Employees[]>;
  constructor(private dialog: MatDialog, private store: Store) {
    this.employees$ = this.store.select(selectAllEmployees);
  }

  ngOnInit(): void {
    // Fetch data via the store loop
    this.store.dispatch(EmployeeActions.loadEmployees());
  }

  editEmployee(employee: any) {
    console.log('Edit:', employee);
    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: '500px',
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(
          EmployeeActions.updateEmployee({
            employee: result
          })
        );
      }
    });
  }

  deleteEmployee(employee: any) {
    const dialogRef = this.dialog.open(DeleteEmployee, {
      width: '500px',
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(
          EmployeeActions.deleteEmployee({ id: result.id })
        );
      }
    });
  }

  addEmployee() {
    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(
          EmployeeActions.addEmployee({
            employee: result
          })
        );
      }
    });
  }
}
