import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";

import { PrescriptionDataComponent } from "../prescription-data/prescription-data.component";
import { DoctorBillComponent } from "../Doctor-Bill/doctor-bill/doctor-bill.component";
import { DoctorViewComponent } from "../doctor-view/doctor-view.component";
import { DoctorHomeComponent } from "../doctor-home/doctor-home.component";

const routes:Routes = [
    {
        path:'Prescription',
        component:PrescriptionDataComponent
    },
    {
        path:'bill',
        component:DoctorBillComponent
    },
    {
        path:'patientView',
        component:DoctorViewComponent
    },
    {
        path:'',
        component:DoctorHomeComponent
    },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DoctorRoutingModule{}