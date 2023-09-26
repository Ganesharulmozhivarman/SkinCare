import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecService } from 'src/app/Services/RecService/rec.service';

@Component({
  selector: 'app-doctor-bill',
  templateUrl: './doctor-bill.component.html',
  styleUrls: ['./doctor-bill.component.scss']
})
export class DoctorBillComponent {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  AppointmentForm: FormGroup;
  timeslots: string[] = ['9-10AM', '10-11AM']
  Doctor: string[] = ['Dr Ganesh']
  Referral: string[] = ['Dr RajiniKanth']
  constructor(public fb: FormBuilder, private recService: RecService) {
    this.filteredOptions = this.options.slice();
    this.AppointmentForm = this.fb.group({

      Bill: ['', [Validators.required]],
      timeslot: ['', [Validators.required]],
      Doctor: ['', [Validators.required]],
      patient: ['', [Validators.required]],

    })
    this.appointment()
  }
  myControl = new FormControl('');

  // options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  options: string[] = [];
  filteredOptions: string[];



  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  appointment() {
    this.recService.getPatient().subscribe((res: any) => {
      console.log(res)
      const data = res.forEach((element: any) => {
        this.options.push(element.firstName)

      });
    })
  }


  onSubmit() {
    console.log(this.AppointmentForm.value)
    this.recService.postAppointments(this.AppointmentForm.value).subscribe((re: any) => {
      console.log(re)
    })
  }

}
