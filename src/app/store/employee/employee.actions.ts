import { createAction, props } from '@ngrx/store';
import { Employees } from '../../models/employees';

export const loadEmployees = createAction(
  '[Employee List] Load Employees'
);

export const loadEmployeesSuccess = createAction(
  '[Employee API] Load Employees Success',
  props<{ employees: Employees[] }>()
);

export const addEmployee = createAction(
  '[Employee] Add Employee',
  props<{ employee: Employees }>()
);

export const addEmployeeSuccess = createAction(
  '[Employee] Add Employee Success',
  props<{ employee: Employees }>()
);

export const updateEmployee = createAction(
  '[Employee] Update Employee',
  props<{ employee: Employees }>()
);

export const updateEmployeeSuccess = createAction(
  '[Employee] Update Employee Success',
  props<{ employee: Employees }>()
);

export const deleteEmployee = createAction(
  '[Employee] Delete Employee',
  props<{ id: number }>()
);

export const deleteEmployeeSuccess = createAction(
  '[Employee] Delete Employee Success',
  props<{ id: number }>()
);