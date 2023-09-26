import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  AddPrescription(data:any){
    console.log(data)
    return this.http.post(' http://localhost:3000/Prescriptions',data)
  }
  getPrescription() {
    return this.http.get<any[]>(` http://localhost:3000/Prescriptions`);
  }
}
