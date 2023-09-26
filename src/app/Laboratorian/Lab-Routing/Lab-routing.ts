import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LabtestComponent } from "../labtest/labtest.component";
import { LabBillComponent } from "../lab-bill/lab-bill.component";
import { LabHomeComponent } from "../lab-home/lab-home.component";
import { LabDataComponent } from "../lab-data/lab-data.component";

// import { PrescriptionDataComponent } from "../prescription-data/prescription-data.component";

const routes: Routes = [
    {
        path: '',
        component: LabHomeComponent,
        children:[
            {
                path: 'LabTest',
                component: LabtestComponent
            },
            {
                path: 'Report',
                component: LabBillComponent
            }
            ,
            {
                path: 'Data',
                component: LabDataComponent
            }
        ]
    },
    // {
    //     path: 'LabTest',
    //     component: LabtestComponent
    // },
    // {
    //     path: 'Report',
    //     component: LabBillComponent
    // }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LabRoutingModule { }