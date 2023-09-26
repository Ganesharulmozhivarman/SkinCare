import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientPageComponent } from './Receptionist/patient-page/patient-page.component';
import { AppoinmentPageComponent } from './Receptionist/appoinment-page/appoinment-page.component';
import { PatientsSummaryComponent } from './Receptionist/patients-summary/patients-summary.component';
import { MaterialDesignModule } from './Shared/material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { PatientReportComponent } from './Receptionist/patient-report/patient-report.component';
// import { PrescriptionDataComponent } from './Doctor/prescription-data/prescription-data.component';
// import { OnboardingComponent } from './Admin/onboarding/onboarding.component';
import { HomepageComponent } from './HomePage/homepage/homepage.component';
// import { LabtestComponent } from './Laboratorian/labtest/labtest.component';
import { OrganizationChartComponent } from './ChartLibrary/organization-chart/organization-chart.component';
// import { OrgChartModule } from '@mondal/org-chart';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { OrgChartDummyComponent } from './ChartLibrary/org-chart-dummy/org-chart-dummy.component';
import { NodeDesignComponent } from './ChartLibrary/node-design/node-design.component';
import { NodeComponent } from './ChartLibrary/node/node.component';
import { HierachyTemplateComponent } from './Admin/HierachyTemplate/hierachy-template/hierachy-template.component';
import { HierachyTemplateNodeComponent } from './Admin/HierachyTemplateNode/hierachy-template-node/hierachy-template-node.component';
import { HierachyNodeComponent } from './ChartLibrary/hierachy-node/hierachy-node.component';
import { NodeChildComponent } from './ChartLibrary/node-child/node-child.component';
import { RightLeftChartComponent } from './ChartLibrary/right-left-chart/right-left-chart.component';
import { RightLeftChartChildComponent } from './ChartLibrary/right-left-chart-child/right-left-chart-child.component';
// import { TechnicianComponent } from './Admin/technician/technician.component';
// import { ExperienceComponent } from './Admin/experience/experience.component';
// import { DisplayDetailsComponent } from './Admin/display-details/display-details.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { receptionModule } from './Receptionist/Reception.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoctorHomeComponent } from './Doctor/doctor-home/doctor-home.component';
import { LabBillComponent } from './Laboratorian/lab-bill/lab-bill.component';
import { LabHomeComponent } from './Laboratorian/lab-home/lab-home.component';
import { LabDataComponent } from './Laboratorian/lab-data/lab-data.component';
import { LabSummaryComponent } from './Laboratorian/lab-summary/lab-summary.component';
// import { DoctorViewComponent } from './Doctor/doctor-view/doctor-view.component';
// import { DoctorBillComponent } from './Doctor/Doctor-Bill/doctor-bill/doctor-bill.component';
// import { EmployeeComponent } from './Admin/employee/employee.component';
// import { LabMenuComponent } from './Laboratorian/Lab-menu/lab-menu/lab-menu.component';
// import { DoctorMenuComponent } from './Doctor/doctor-menu/doctor-menu.component';
// import { AdminMenuComponent } from './Admin/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    // PatientPageComponent,
    // AppoinmentPageComponent,
    // PatientsSummaryComponent,  
    // PatientReportComponent,
    // PrescriptionDataComponent,
    // OnboardingComponent,
    HomepageComponent,
    // LabtestComponent,
    OrganizationChartComponent,
    OrgChartDummyComponent,
    NodeDesignComponent,
    NodeComponent,
    HierachyTemplateComponent,
    HierachyTemplateNodeComponent,
    HierachyNodeComponent,
    NodeChildComponent,
    RightLeftChartComponent,
    RightLeftChartChildComponent,
    // TechnicianComponent,
    // ExperienceComponent,
    // DisplayDetailsComponent,
    LoginPageComponent,
    // LabSummaryComponent,
    // LabDataComponent,
    // LabHomeComponent,
    // LabBillComponent,
    // DoctorHomeComponent,
    // DoctorViewComponent,
    // DoctorBillComponent,
    // EmployeeComponent,
    // LabMenuComponent,
    // DoctorMenuComponent,
    // AdminMenuComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    
    FlexLayoutModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
