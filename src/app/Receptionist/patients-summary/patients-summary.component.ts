import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface PeriodicElement {
  lastName: string;
  firstName: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,firstName:"Dummy", lastName: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2,firstName:"Dummy", lastName: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3,firstName:"Dummy", lastName: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4,firstName:"Dummy", lastName: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5,firstName:"Dummy", lastName: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6,firstName:"Dummy", lastName: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7,firstName:"Dummy", lastName: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8,firstName:"Dummy", lastName: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9,firstName:"Dummy", lastName: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10,firstName:"Dummy", lastName: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11,firstName:"Dummy", lastName: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12,firstName:"Dummy", lastName: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13,firstName:"Dummy", lastName: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14,firstName:"Dummy", lastName: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15,firstName:"Dummy", lastName: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16,firstName:"Dummy", lastName: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17,firstName:"Dummy", lastName: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18,firstName:"Dummy", lastName: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19,firstName:"Dummy", lastName: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20,firstName:"Dummy",lastName: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


@Component({
  selector: 'app-patients-summary',
  templateUrl: './patients-summary.component.html',
  styleUrls: ['./patients-summary.component.scss']
})
export class PatientsSummaryComponent {
  displayedColumns: string[] = ['position', 'lastName','firstName', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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
}
