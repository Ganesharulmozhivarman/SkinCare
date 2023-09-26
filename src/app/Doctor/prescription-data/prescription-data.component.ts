import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecService } from 'src/app/Services/RecService/rec.service';

export interface PeriodicElement {
  patient: string;
  medicines: string;
  tablets: number;
  days: number;
}

@Component({
  selector: 'app-prescription-data',
  templateUrl: './prescription-data.component.html',
  styleUrls: ['./prescription-data.component.scss']
})
export class PrescriptionDataComponent {
  PrescriptionForm!: FormGroup;
  Country: string[] = ['India']
  State: string[] = ['Tamilnadu']
  Referral: string[] = ['Dr RajiniKanth']
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('input1') input1!: ElementRef<HTMLInputElement>;

  options: string[] = [];
  medicine: string[] = ['Paracetamel', 'Hicel-L', 'Parachute Oil', 'zap']
  filteredOptions!: string[];
  filteredMedicine!: string[];

  prescriptionData: PeriodicElement[] = [];

  displayedColumns: string[] = ['medicines', 'tablets', 'days'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.prescriptionData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  filter(): void {
    this.filteredOptions = this.options.slice();
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  filtermedicine(): void {
    this.filteredMedicine = this.medicine.slice();
    const filteredValue = this.input1.nativeElement.value.toLowerCase();
    this.filteredMedicine = this.medicine.filter(o => o.toLowerCase().includes(filteredValue));

  }

  constructor(public fb: FormBuilder,public recService:RecService) {
    this.PrescriptionForm = this.fb.group({

      patient: ['', [Validators.required]],
      medicines: ['', [Validators.required]],
      days: ['', [Validators.required]],
      tablets: ['', [Validators.required]]

    })
    this.appointment()
  }
  onSubmit() {
    this.prescriptionData.push(this.PrescriptionForm.value)
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.prescriptionData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  prescription: any[]= []

  onSave() {

    let finalData: any = []
    let uniqueNames: any[] = [];
    this.prescriptionData.forEach((res: any) => {
      if (!uniqueNames.includes(res.patient)) {
        uniqueNames.push(res.patient);
      }
    })

    uniqueNames.forEach((res: any) => {
      let data = this.prescriptionData.filter(x => x.patient == res);
      data.forEach((res: any) => {
        delete res.patient;
        console.log(res)
      })

      const data1 = {
        patient: res,
        prescription: data
      }

      this.prescription.push(data1)
      // finalData.push(this.prescription)
      console.log(this.prescription)

    })
    console.log(uniqueNames)
    console.log(this.prescriptionData)
    console.log(finalData)

  } 
  appointment() {
    this.recService.getPatient().subscribe((res: any) => {
      console.log(res)
      const data = res.forEach((element: any) => {
        this.options.push(element.firstName)

      });
    })
  }


  
}
