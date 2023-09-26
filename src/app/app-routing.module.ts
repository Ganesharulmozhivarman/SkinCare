import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { HomepageComponent } from './HomePage/homepage/homepage.component';
import {  authGuard1, authGuard2, authGuard3 } from './Gurads/auth.guard';
import { CanActivateFn } from '@angular/router';

export const AdminauthGuard: CanActivateFn = (ActivatedRouteSnapshot, RouterStateSnapshot) => {
  const data: any = localStorage.getItem('token')
  if(data){
    switch ((JSON.parse(data).Role)) {
    case ('Admin'): {
      return true
    }
  }
  }

  return false;
};

const routes: Routes = [
  {
    path: 'Login',
    component: LoginPageComponent
  },
  {
    path: 'reception',
    loadChildren: () => import('./Receptionist/Reception.module').then(m => m.receptionModule),
    canActivate: [authGuard1],
  },
  {
    path: 'doctor',
    loadChildren: () => import('./Doctor/Doctor-Module/doctormodule/doctormodule.module').then(m => m.DoctormoduleModule),
    canActivate: [authGuard2],
  },
  {
    path: 'laboratrian',
    loadChildren: () => import('./Laboratorian/lab-module/lab-module.module').then(m => m.LabModuleModule)
    ,canActivate: [authGuard3],
  },
  {
    path: 'Admin',
    loadChildren: () => import('./Admin/Admin-Module/admin/admin.module').then(m => m.AdminModule)
    ,canActivate: [AdminauthGuard],
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    redirectTo: '', pathMatch: 'full' ,

  }



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
