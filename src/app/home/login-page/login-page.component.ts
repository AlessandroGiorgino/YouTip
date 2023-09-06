import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  isSignedIn: boolean = false;
  isRegistered: boolean = false;
  constructor(private auth: AuthenticationService, private route: Router) {}
  //initial check
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
      this.isRegistered = true;
    } else {
      this.isSignedIn = false;
    }
    console.log(this.isSignedIn);
  }
  //sign up
  async onSignUp(email: string, password: string) {
    await this.auth.signUp(email, password);
    if (this.auth.isLoggedIn) {
      this.isSignedIn = true;
      this.isRegistered = true;
    }
  }
  //sign in
  async onSignIn(email: string, password: string) {
    await this.auth.signIn(email, password);
    if (this.auth.isLoggedIn) {
      this.isSignedIn = true;
      this.route.navigate(['']);
    }
  }

  handleLogOut() {
    this.isSignedIn = false;
    localStorage.removeItem('user');
  }
}
