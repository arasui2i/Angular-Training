import { Component, inject, Service, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialog } from '../employee-dialog/employee-dialog';
import { DeleteEmployee } from '../delete-employee/delete-employee';
import { EmployeeService } from '../../services/employee/employee';

@Component({
  selector: 'app-home-component',
  imports: [MatButton, MatTableModule, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private dialog: MatDialog) { }
  private employeeService = inject(EmployeeService);
  employees = this.employeeService.getEmployees();
  employeeSignal = signal(this.employees);

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
        const index = this.employees.findIndex(a => a.id == result.id);
        this.employeeSignal.update(employees =>
          employees.map((employee, i) =>
            i === index
              ? { ...employee, ...result }
              : employee
          )
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
        // const index = this.employees.findIndex(m => m.id == result.id);
        // if (index !== -1)
        //   this.employees.splice(index, 1);

        this.employeeSignal.update(employees =>
          employees.filter(employee => employee.id !== result.id));
      }
    });
  }

  addEmployee() {
    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: '500px',
      data: {
        employees: this.employees
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeSignal.update(employees =>
          [ ...employees, result ]
        );
      }
    });
  }
}
