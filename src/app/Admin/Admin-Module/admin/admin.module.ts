import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/Shared/material-design/material-design.module';
import { DisplayDetailsComponent } from '../../display-details/display-details.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { OnboardingComponent } from '../../onboarding/onboarding.component';
import { TechnicianComponent } from '../../technician/technician.component';
import { AdminRoutingModule } from '../../Admin-Routing/Admin-Routing';
import { AdminMenuComponent } from '../../admin-menu/admin-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeComponent } from '../../employee/employee.component';
import { AdminHomeComponent } from '../../admin-home/admin-home.component';

@NgModule({
  declarations: [
    DisplayDetailsComponent,
    ExperienceComponent,
    OnboardingComponent,
    TechnicianComponent,
    AdminMenuComponent,
    EmployeeComponent,
    AdminHomeComponent

  
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    AdminRoutingModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
