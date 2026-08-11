import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { Authservice } from './app/services/auth/authservice';

export const authGuard: CanActivateFn = () => {

  const authService = inject(Authservice);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};