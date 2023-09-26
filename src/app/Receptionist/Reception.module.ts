import { NgModule } from "@angular/core";

import { AppoinmentPageComponent } from "./appoinment-page/appoinment-page.component";
import { PatientPageComponent } from "./patient-page/patient-page.component";
import { PatientReportComponent } from "./patient-report/patient-report.component";
import { PatientsSummaryComponent } from "./patients-summary/patients-summary.component";
import { ReceptionistHomeComponent } from "./Reception-home-component";

import { MaterialDesignModule } from "../Shared/material-design/material-design.module";

import { CommonModule } from "@angular/common";
import { ReceptionRoutingModule } from "./Reception-routing";
import { RecHomeComponent } from './Reception-Menu/rec-home/rec-home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PatientRecordsComponent } from './patient-records/patient-records.component';

@NgModule({

    declarations: [
        ReceptionistHomeComponent,
        AppoinmentPageComponent,
        PatientReportComponent,
        PatientsSummaryComponent,
        PatientPageComponent,
        RecHomeComponent,
        PatientRecordsComponent,
        
    ],
    imports: [
        FlexLayoutModule,
        ReceptionRoutingModule,
        MaterialDesignModule,
        CommonModule,
        ],
    exports: []

})

export class receptionModule { }