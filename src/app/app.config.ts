import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { employeeReducer } from './store/employee/employee.reducer';
import { EmployeeEffects } from './store/employee/employee.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()),
    provideStore({
      employee: employeeReducer
    }),
    provideEffects(EmployeeEffects)
  ]
};
