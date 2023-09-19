import { Component, ViewEncapsulation } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  constructor(private login: LoginPageComponent) {}
  //slider setting variable
  logOut() {
    this.login.handleLogOut();
  }
  //define validable to store dynamic products data
  infos: any;
  //slider responsive settings
}
