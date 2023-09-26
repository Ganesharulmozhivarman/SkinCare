import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecService } from 'src/app/Services/RecService/rec.service';
import { LabService } from 'src/app/Services/LabService/lab.service';

@Component({
  selector: 'app-lab-bill',
  templateUrl: './lab-bill.component.html',
  styleUrls: ['./lab-bill.component.scss']
})
export class LabBillComponent {
  PatientsForm!: FormGroup;
  Country: string[] = ['Radiology']
  State: string[] = ['Scan']
  Referral: string[] = ['Dr RajiniKanth']
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('input1') input1!: ElementRef<HTMLInputElement>;

  // myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: string[];



  medicine: string[] = []
  filteredMedicine!: string[];
  filter(): void {
    // this.filteredOptions = this.options.slice();
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }


  constructor(public fb: FormBuilder, private recService: RecService, private labService: LabService) {
    this.filteredOptions = this.options.slice();
    this.PatientsForm = this.fb.group({
      patient: ['', [Validators.required]],
      labtest: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      price: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      referred: ['', [Validators.required]]
    })

    this.labService.getLatTests().subscribe((res: any) => {
      console.log(res)
    })
    this.appointment()
    this.appointment1()
  }
  onSubmit() {
    this.labService.PostLabReports(this.PatientsForm.value).subscribe((res: any) => {
      console.log(res)
    })
    console.log(this.PatientsForm.value)
  }

  filtermedicine(): void {
    this.filteredMedicine = this.medicine.slice();
    const filteredValue = this.input1.nativeElement.value.toLowerCase();
    this.filteredMedicine = this.medicine.filter(o => o.toLowerCase().includes(filteredValue));

  }
  appointment() {
    this.recService.getPatient().subscribe((res: any) => {
      console.log(res)
      const data = res.forEach((element: any) => {
        this.options.push(element.firstName)

      });
    })
  }
  appointment1() {
    this.labService.getLatTests().subscribe((res: any) => {
      console.log(res)
      const data = res.forEach((element: any) => {
        this.medicine.push(element.firstName)

      });
    })
  }
}
