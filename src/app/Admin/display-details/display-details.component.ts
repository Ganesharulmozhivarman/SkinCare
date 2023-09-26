import { Component, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminPageService } from 'src/app/Services/admin-page.service';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent {
  secondFormGroup!: FormGroup;
  isLinear = false;
  firstFormGroup!: FormGroup;
  FirstFormValues: any;
  SecondFormValues: any;


  constructor(private _formBuilder: FormBuilder, public AdminService: AdminPageService) {

    this.firstFormGroup = AdminService.firstFormGroup;
    this.secondFormGroup = AdminService.secondFormGroup;
    console.log(this.FirstFormValues, this.SecondFormValues)

  }

 
  get FirstFormChanges(){
    this.FirstFormValues = Object.entries(this.firstFormGroup.value)
    return this.FirstFormValues;
  }
  get SecondFormChanges(){
    this.SecondFormValues = Object.entries(this.secondFormGroup.value)
    return this.SecondFormValues;
  }
 

}
