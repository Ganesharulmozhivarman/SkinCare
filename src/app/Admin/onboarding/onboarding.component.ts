import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppoinmentPageComponent } from 'src/app/Receptionist/appoinment-page/appoinment-page.component';
import { TechnicianComponent } from '../technician/technician.component';
import { AdminPageService } from 'src/app/Services/admin-page.service';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {
  // @ViewChild(AppoinmentPageComponent) AppointComponent!: AppoinmentPageComponent;
  // @ViewChild(Step2Component) AppoinmentPageComponent: Step2Component;
  // @ViewChild(Step3Component) AppoinmentPageComponent: Step3Component;
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  secondFormGroup!:FormGroup;
  isLinear = false;

  firstFormGroup!:FormGroup;
  
  FirstFormValues :any;
  SecondFormValues:any;
  // SecondFormValues = Object.entries(this.secondFormGroup.value);
  constructor(private _formBuilder: FormBuilder,public AdminService:AdminPageService) {
    
    this.firstFormGroup = AdminService.firstFormGroup;
    this.FirstFormValues = Object.entries(this.firstFormGroup.value)
    this.secondFormGroup = AdminService.secondFormGroup;
    this.SecondFormValues = Object.entries(this.secondFormGroup.value)
  }
  
  updateCredienials(){
    this.AdminService.AddCredientials(this.secondFormGroup.value).subscribe((res:any) => {
      console.log('entered',res)
    }) 
    this.AdminService.AddPersonal(this.firstFormGroup.value).subscribe((res:any) => {
      console.log('entered',res)  
    }) 
  }
  
  ngOnInit() {
   
  }


}
