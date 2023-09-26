import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/loginService/login-service.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent {

  constructor(public route: Router,private login:LoginServiceService) {

  }
  navigate(id: number) {
    switch (id) {
      case (1): {
        this.route.navigateByUrl('/Admin')
        break;
      }
      case (2): {

        this.route.navigateByUrl('Admin/onboard')
        break;
      }
      case (3): {

        this.route.navigateByUrl('Admin/employee')
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
