import { createReducer, on } from '@ngrx/store';
import { Employees } from '../../models/employees';
import * as EmployeeActions from '../employee/employee.actions';

export interface EmployeeState {
  employees: Employees[];
  loading: boolean;
  error: string | null;
}

export const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployees, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
    loading: false
  })),

  on(EmployeeActions.addEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee]
  })),
  
  on(EmployeeActions.updateEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: state.employees.map(item =>
      item.id === employee.id
        ? { ...item, ...employee }
        : item
    )
  })),

   on(EmployeeActions.deleteEmployeeSuccess, (state, { id }) => ({
    ...state,
    employees: state.employees.filter(employee => employee.id !== id)
  })),
);