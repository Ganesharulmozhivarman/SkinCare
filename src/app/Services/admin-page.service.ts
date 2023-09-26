import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor(
    private _formBuilder: FormBuilder,
    private http:HttpClient
    ) { }

  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    Age: ['', Validators.required],
    Profession: ['', Validators.required],
    Education: ['', Validators.required],
    GraduatedFrom: ['', Validators.required],
    ReferredBy: [''],
    State: [''],
    Country: [''],
    Address: [''],
  });
  secondFormGroup = this._formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    Role: ['', Validators.required],
    experience: ['', Validators.required],
    
  });
  
  AddCredientials(data:any){
    console.log(data)
    return this.http.post('http://localhost:3000/Credientials/',data)
  }
  AddPersonal(data:any){
    console.log(data)
    return this.http.post('http://localhost:3000/Personal/',data)
  }
  Credientials() {
    return this.http.get<any[]>(`http://localhost:3000/Credientials/`);
  }
  
}
