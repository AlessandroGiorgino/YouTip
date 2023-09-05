import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  isSignedIn: boolean = false;
  constructor(private auth: AuthenticationService) {}
  //initial check
  ngOnInit() {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  //sign up
  async onSignUp(email: string, password: string) {
    await this.auth.signUp(email, password);
    if (this.auth.isLoggedIn) this.isSignedIn = true;
  }
  //sign in
  async onSignIn(email: string, password: string) {
    await this.auth.signIn(email, password);
    if (this.auth.isLoggedIn) this.isSignedIn = true;
  }

  handleLogOut() {
    this.isSignedIn = false;
  }
}
