import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/loginService/login-service.service';

@Component({
  selector: 'app-lab-menu',
  templateUrl: './lab-menu.component.html',
  styleUrls: ['./lab-menu.component.scss']
})
export class LabMenuComponent {
  constructor(public route: Router,private login:LoginServiceService) {

  }
  navigate(id: number) {
    switch (id) {
      case (1): {
        this.route.navigateByUrl('/laboratrian')
        break;
      }
      case (2): {

        this.route.navigateByUrl('laboratrian/LabTest')
        break;
      }
      case (3): {

        this.route.navigateByUrl('laboratrian/Report')
        break;
      }
      case (4): {

        this.route.navigateByUrl('laboratrian/Data')
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
