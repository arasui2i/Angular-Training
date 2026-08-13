import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';

// Reference the 'employee' feature slice of state
export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

// Select the list of employees
export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.employees
);

// Select loading status (useful for spinners)
export const selectEmployeeLoading = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.loading
);
