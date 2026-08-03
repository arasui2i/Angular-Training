import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Employeedialogcomponent } from '../employeedialogcomponent/employeedialogcomponent';

@Component({
  selector: 'app-home-component',
  imports: [MatButton, MatTableModule, MatIcon],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  constructor(private dialog: MatDialog){

  }
  displayedColumns: string[] = ["id", "name", "email", "department", "designation","actions"];
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
  editEmployee(employee: any) {
    console.log('Edit:', employee);
  }

  deleteEmployee(employee: any) {
    console.log('Delete:', employee);
  }
  AddEmployee(){
    const dialogRef = this.dialog.open(Employeedialogcomponent, {
      width: '500px'
    });
  }
}
