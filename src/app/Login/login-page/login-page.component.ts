import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginServiceService } from 'src/app/Services/loginService/login-service.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  PatientsForm!: FormGroup;
  Country: string[] = ['India']
  State: string[] = ['Tamilnadu']
  Referral: string[] = ['Dr RajiniKanth']
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];



  ngOnInit(): void {
    if(this.login.getToken()){

      const data: any = localStorage.getItem('token')
      // const dataitem = (JSON.parse(data).Role)

      switch(JSON.parse(data).Role){
        case ("Reception"): {
          // console.log(filteredData[0] !== null)
          this.router.navigateByUrl('reception')
          break;
        }
        case ("Doctor"): {
          // console.log(filteredData[0] !== null)
          this.router.navigateByUrl('doctor')
          break;
        }
        case ("Laboratrian"): {
          // console.log(filteredData[0] !== null)
          this.router.navigateByUrl('laboratrian')
          break;
        }
        case ("Admin"): {
          // console.log(filteredData[0] !== null)
          this.router.navigateByUrl('Admin')
          break;
        }
      }

      // this.router.navigateByUrl(`/${dataitem}`)
    }
  }


  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }


  constructor(public fb: FormBuilder, public login: LoginServiceService, private router: Router) {
    this.filteredOptions = this.options.slice();
    this.PatientsForm = this.fb.group({
      Email: ['', [Validators.required, Validators.minLength(2)]],
      Password: ['', [Validators.required, Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],

    })
    this.login.Login().subscribe((res: any) => {
      console.log(res)
    })


  }
  onSubmit() {
    let filteredData: any[];
    this.login.Login().subscribe((res: any) => {

      console.log(res)
      filteredData = res.filter((x: any) => x.Email == this.PatientsForm.value.Email && x.Password == this.PatientsForm.value.Password)
      console.log(filteredData)

      let token = {
        Role: filteredData[0].Role
      }

      let tokenSaved = JSON.stringify(Token)
      console.log(tokenSaved)
      this.login.setToken(token);

      switch (filteredData[0].Role) {
        case ("Reception"): {
          console.log(filteredData[0] !== null)
          this.router.navigateByUrl('reception')
          break;
        }
        case ("Doctor"): {
          console.log(filteredData[0] !== null)
          this.router.navigateByUrl('doctor')
          break;
        }
        case ("Laboratrian"): {
          console.log(filteredData[0] !== null)
          this.router.navigateByUrl('laboratrian')
          break;
        }
        case ("Admin"): {
          console.log(filteredData[0] !== null)
          this.router.navigateByUrl('Admin')
          break;
        }
      }
      const data: any = localStorage.getItem('token')
      console.log(JSON.parse(data))

      console.log((this.login.getToken()))
      console.log(this.login.isLoggedIn())

      // if (filteredData[0].Role == "Reception") {
      //   console.log(filteredData[0] !== null)
      //   this.router.navigateByUrl('reception/Appointment')
      // }
    });



  }

  // logout(){
  //   this.login.logout();
  // }

}
