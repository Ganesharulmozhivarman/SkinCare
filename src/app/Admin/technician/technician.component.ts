import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminPageService } from 'src/app/Services/admin-page.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent {
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;
  firstFormGroup!:FormGroup
  constructor(private _formBuilder: FormBuilder,public AdminService:AdminPageService) {
    this.firstFormGroup = AdminService.firstFormGroup;
  }

  Check(){
    console.log(this.firstFormGroup.value)
  }

}
