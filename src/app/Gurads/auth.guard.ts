import { CanActivateFn } from '@angular/router';

import {
  ActivatedRouteSnapshot,

  Router,
  RouterStateSnapshot,
} from '@angular/router';
// import { CanActivate } from '@angular/router';
import { LoginPageComponent } from '../Login/login-page/login-page.component';
import { LoginServiceService } from '../Services/loginService/login-service.service';
import { inject } from '@angular/core';


export const authGuard1: CanActivateFn = (ActivatedRouteSnapshot, RouterStateSnapshot) => {
  const params = ActivatedRouteSnapshot.parent;
  console.log(params)
  const data: any = localStorage.getItem('token')
  console.log('triggered')
  // const authService = inject(AuthService);
  const router = inject(Router);
  if(data){
    switch ((JSON.parse(data).Role)) {
      
      case ('Reception'): {
        return true
      }
    }
  }
  else{
    router.navigateByUrl('')
  }
  
  return false;
};
export const authGuard2: CanActivateFn = (ActivatedRouteSnapshot, RouterStateSnapshot) => {
  const data: any = localStorage.getItem('token')
  const router = inject(Router);
  if (data) {
    switch ((JSON.parse(data).Role)) {
      
      case ('Doctor'): {
        
        return true
      }

      }
      
    }
    else{
      router.navigateByUrl('')
    }
    return false;
  };
  export const authGuard3: CanActivateFn = (ActivatedRouteSnapshot, RouterStateSnapshot) => {
    const data: any = localStorage.getItem('token')
    
    const params = ActivatedRouteSnapshot.params;
    console.log(params)
    const router = inject(Router);
    if (data) {
      switch ((JSON.parse(data).Role)) {

        case ('Laboratrian'): {
          return true
        }
      }

    }

    else{
      router.navigateByUrl('')
    }
    return false;
  };


