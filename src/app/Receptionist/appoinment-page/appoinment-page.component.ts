import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecService } from 'src/app/Services/RecService/rec.service';
@Component({
  selector: 'app-appoinment-page',
  templateUrl: './appoinment-page.component.html',
  styleUrls: ['./appoinment-page.component.scss']
})
export class AppoinmentPageComponent {

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  AppointmentForm: FormGroup;
  timeslots: string[] = ['9-10AM', '10-11AM']
  Doctor: string[] = ['Dr Ganesh']
  Referral: string[] = ['Dr RajiniKanth']
  constructor(public fb: FormBuilder, private recService: RecService) {
    this.filteredOptions = this.options.slice();
    this.AppointmentForm = this.fb.group({

      doa: ['', [Validators.required]],
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

  displayedColumns: string[] = ['doa', 'timeslot', 'Doctor','patient'];
  dataSource!: MatTableDataSource<any>;

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.recService.getAppointments().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
