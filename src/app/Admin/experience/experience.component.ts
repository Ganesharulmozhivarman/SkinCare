import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminPageService } from 'src/app/Services/admin-page.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  secondFormGroup!:FormGroup;

  constructor(private _formBuilder: FormBuilder, public AdminService: AdminPageService) {
    this.secondFormGroup = AdminService.secondFormGroup;
  }
  Check(){
    console.log(this.secondFormGroup.value)

  }
}
