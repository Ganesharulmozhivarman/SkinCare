import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnboardingComponent } from "../onboarding/onboarding.component";
import { EmployeeComponent } from "../employee/employee.component";
import { AdminHomeComponent } from "../admin-home/admin-home.component";


const AdminRoute: Routes = [
    {
        path: 'onboard',
        component: OnboardingComponent
    },

    {
        path: 'employee',
        component: EmployeeComponent
    }
    , {
        path: '',
        component: AdminHomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(AdminRoute)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }