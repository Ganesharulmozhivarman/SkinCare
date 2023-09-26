import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LabService } from 'src/app/Services/LabService/lab.service';
import { AdminPageService } from 'src/app/Services/admin-page.service';

@Component({
  selector: 'app-lab-summary',
  templateUrl: './lab-summary.component.html',
  styleUrls: ['./lab-summary.component.scss']
})
export class LabSummaryComponent implements AfterViewInit,OnInit {
  ngOnInit(): void {
    // this.admin.Credientials().subscribe((res:any) => {
    //   this.dataSource = new MatTableDataSource(res);
    //   console.log(res)
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })
  }
  displayedColumns: string[] = ['patient', 'labtest', 'price', 'referred'];
  dataSource!: MatTableDataSource<any>;


  constructor(public admin:AdminPageService,private labservice:LabService){
    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.labservice.getLabReports().subscribe((res:any) => {
      console.log(res)
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
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
