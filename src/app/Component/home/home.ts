import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialog } from '../employee-dialog/employee-dialog';
import { DeleteEmployee } from '../delete-employee/delete-employee';

@Component({
  selector: 'app-home-component',
  imports: [MatButton, MatTableModule, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private dialog: MatDialog) { }
  displayedColumns: string[] = ["id", "name", "email", "department", "designation", "actions"];
  employees = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@test.com',
      department: 'IT',
      designation: 'Software Engineer'
    },
    {
      id: 2,
      name: 'Priya Kumar',
      email: 'priya@test.com',
      department: 'HR',
      designation: 'HR Manager'
    },
    {
      id: 3,
      name: 'David Wilson',
      email: 'david@test.com',
      department: 'Finance',
      designation: 'Accountant'
    },
    {
      id: 4,
      name: 'Anitha Raj',
      email: 'anitha@test.com',
      department: 'IT',
      designation: 'Senior Developer'
    }
  ];
  dataSource = new MatTableDataSource(this.employees);
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
        const index = this.employees.findIndex(m => m.id == result.id);
        if (index !== -1)
          this.employees[index] = result;

        this.dataSource.data = this.employees;
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
        const index = this.employees.findIndex(m => m.id == result.id);
        if (index !== -1)
          this.employees.splice(index, 1);

        this.dataSource.data = this.employees;
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
        this.employees.push(result);
      }
      this.dataSource.data = this.employees;
    });
  }
}
