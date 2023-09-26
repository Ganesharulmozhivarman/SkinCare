import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecService {

  constructor(private http: HttpClient) { }

  addPatient(data:any){
    return this.http.post('http://localhost:3000/Patients/',data)
  }
  getPatient(){
    return this.http.get('http://localhost:3000/Patients')
  }
  getAppointments(){
    return this.http.get('http://localhost:3000/Appointments')
  }
  postAppointments(data:any){
    return this.http.post('http://localhost:3000/Appointments',data)
  }


}
