import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,FormArray} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RecService } from 'src/app/Services/RecService/rec.service';

export interface User {
  name: string;
}
@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss']
})
export class PatientPageComponent{
  PatientsForm!:FormGroup;
  Country:string[]=['India']
  State:string[]=['Tamilnadu']
  Referral:string[]=['Dr RajiniKanth']
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];



  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }


  constructor( public fb: FormBuilder,public recService:RecService){
    this.filteredOptions = this.options.slice();
    this.PatientsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      address:['',[Validators.required]],
      referred:['',[Validators.required]]
    })
  }
  onSubmit(){
    console.log(this.PatientsForm.value)
  }
  PostData(){
    this.recService.addPatient(this.PatientsForm.value).subscribe((res) =>{
      console.log(res)
    })
  }
}
