import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../login/services/auth.service';

export const authetificationGuard: CanActivateFn =
 (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isAuthenticated == true){
    return true;
  }
  else {
   router.navigateByUrl("/login")
   return false;}
};
