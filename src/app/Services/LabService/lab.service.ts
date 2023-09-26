import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http: HttpClient) { }
  getLatTests() {


    // return data;
    // const data1 =  this.http.get<any>('http://localhost:3000/Ganesh/');
    // return data1
    return this.http.get<any[]>(`http://localhost:3000/labTest`);

  }

  PostLabtest(data:any){
    return this.http.post('http://localhost:3000/labTest',data)
  }
  getLabReports() {


    return this.http.get<any[]>(` http://localhost:3000/TestReports`);

  }

  PostLabReports(data:any){
    return this.http.post(' http://localhost:3000/TestReports',data)
  }

}
