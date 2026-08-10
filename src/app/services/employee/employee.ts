import { Injectable, Service } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    getEmployees() {
        const emplyees = [
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
        return emplyees;
    }
}
