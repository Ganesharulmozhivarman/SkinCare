import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ReceptionistHomeComponent } from "./Reception-home-component";
import { AppoinmentPageComponent } from "./appoinment-page/appoinment-page.component";
import { PatientPageComponent } from "./patient-page/patient-page.component";
import { PatientReportComponent } from "./patient-report/patient-report.component";
import { PatientsSummaryComponent } from "./patients-summary/patients-summary.component";
import { PatientRecordsComponent } from "./patient-records/patient-records.component";

const routes:Routes = [
    {
        path:'',
        component:ReceptionistHomeComponent
    },
    {
        path:'Appointment',
        component:AppoinmentPageComponent
    }
    ,
    {
        path:'Patient',
        component:PatientPageComponent
    },
    {
        path:'Report',
        component:PatientReportComponent
    },
    {
        path:'Summary',
        component:PatientsSummaryComponent
    },
    {
        path:'records',
        component:PatientRecordsComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ReceptionRoutingModule{}