import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabtestComponent } from '../labtest/labtest.component';
import { MaterialDesignModule } from 'src/app/Shared/material-design/material-design.module';
import { LabRoutingModule } from '../Lab-Routing/Lab-routing';
import { LabMenuComponent } from '../Lab-menu/lab-menu/lab-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabBillComponent } from '../lab-bill/lab-bill.component';
import { LabHomeComponent } from '../lab-home/lab-home.component';
import { LabDataComponent } from '../lab-data/lab-data.component';
import { LabSummaryComponent } from '../lab-summary/lab-summary.component';



@NgModule({
  declarations: [LabHomeComponent,LabtestComponent,LabMenuComponent,LabBillComponent,LabDataComponent,LabSummaryComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    LabRoutingModule,
    FlexLayoutModule,
    
  ]
})
export class LabModuleModule { }
