import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient,private router: Router) { }

  setToken(value:any){
    console.log(JSON.stringify(value))
    localStorage.setItem('token',JSON.stringify(value))
  }
  getToken(){
    return localStorage.getItem('token')
  }
  Login() {
    return this.http.get<any[]>(`http://localhost:3000/posts`);
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  } 
}