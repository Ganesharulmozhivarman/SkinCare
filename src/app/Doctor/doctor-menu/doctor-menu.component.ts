import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/loginService/login-service.service';
@Component({
  selector: 'app-doctor-menu',
  templateUrl: './doctor-menu.component.html',
  styleUrls: ['./doctor-menu.component.scss']
})
export class DoctorMenuComponent {
  constructor(public route: Router,private login:LoginServiceService) {

  }
  navigate(id: number) {
    switch (id) {
      case (1): {
        this.route.navigateByUrl('/doctor')
        break;
      }
      case (2): {

        this.route.navigateByUrl('doctor/Prescription')
        break;
      }
      case (3): {

        this.route.navigateByUrl('doctor/patientView')
        break;
      }
      case (4): {

        this.route.navigateByUrl('doctor/bill')
        break;
      }
      case (5): {
        this.login.logout();
        this.route.navigateByUrl('/Login')
        break;
      }
    }
  }
}
