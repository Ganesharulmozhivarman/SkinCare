import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/loginService/login-service.service';

@Component({
  selector: 'app-rec-home',
  templateUrl: './rec-home.component.html',
  styleUrls: ['./rec-home.component.scss']
})
export class RecHomeComponent {
  constructor(public route: Router,private login:LoginServiceService) {

  }
  navigate(id: number) {
    switch (id) {
      case (1): {
        this.route.navigateByUrl('/reception')
        break;
      }
      case (2): {

        this.route.navigateByUrl('reception/Appointment')
        break;
      }
      case (3): {

        this.route.navigateByUrl('reception/Patient')
        break;
      }
      case (4): {

        this.route.navigateByUrl('reception/records')
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
