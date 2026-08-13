import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as EmployeeActions from './employee.actions';
import { select, Store } from '@ngrx/store';
import { selectAllEmployees } from './employee.selectors';
import { Employees } from '../../models/employees';

@Injectable()
export class EmployeeEffects {
    private readonly actions$ = inject(Actions);
    private store = inject(Store);
    private employees: Employees[] =
        [
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

    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.loadEmployees),
            map(() =>
                EmployeeActions.loadEmployeesSuccess({ employees: this.employees })
            )
        )
    );

    addEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.addEmployee),
            withLatestFrom(this.store.pipe(select(selectAllEmployees))),
            map(([{ employee }, allEmployees]) => {
                const updateEmployee = {
                    ...employee, id: allEmployees.length + 1
                };

                return EmployeeActions.addEmployeeSuccess({
                    employee: updateEmployee
                });
            })
        )
    );

    updateEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.updateEmployee),
            map(({ employee }) =>
                EmployeeActions.updateEmployeeSuccess({
                    employee: employee
                })
            )
        )
    );

    deleteEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.deleteEmployee),
            map(({ id }) =>
                EmployeeActions.deleteEmployeeSuccess({ id })
            )
        )
    );

}
