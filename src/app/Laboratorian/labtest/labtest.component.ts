import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,FormArray} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LabService } from 'src/app/Services/LabService/lab.service';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.scss']
})
export class LabtestComponent {
  PatientsForm!:FormGroup;
  Country:string[]=['Radiology']
  State:string[]=['Scan']
  Referral:string[]=['Dr RajiniKanth']
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];



  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }


  constructor( public fb: FormBuilder,private labService: LabService){
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
    this.labService.PostLabtest(this.PatientsForm.value).subscribe((res:any) => {
      console.log(res)
    })
    console.log(this.PatientsForm.value)
  }
  
}
