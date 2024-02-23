import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
   const authService =inject(AuthService);
   const router = inject(Router);

   if(authService.roles.includes("MANAGER")){
    return true;
   }{
    router.navigateByUrl("/notAuthorized")
    return false;}
};
