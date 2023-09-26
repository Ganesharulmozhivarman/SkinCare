import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionDataComponent } from '../../prescription-data/prescription-data.component';
import { MaterialDesignModule } from 'src/app/Shared/material-design/material-design.module';
import { DoctorRoutingModule } from '../../Doctor-Routing/Doctor-routing';
import { DoctorMenuComponent } from '../../doctor-menu/doctor-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DoctorBillComponent } from '../../Doctor-Bill/doctor-bill/doctor-bill.component';
import { DoctorViewComponent } from '../../doctor-view/doctor-view.component';
import { DoctorHomeComponent } from '../../doctor-home/doctor-home.component';



@NgModule({
  declarations: [PrescriptionDataComponent,DoctorMenuComponent,DoctorBillComponent,DoctorViewComponent,DoctorHomeComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    DoctorRoutingModule,
    FlexLayoutModule
  ]
})
export class DoctormoduleModule { }
