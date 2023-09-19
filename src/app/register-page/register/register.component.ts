import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RegisterComponent {
  isRegistered: boolean = false;
  isSignedIn: boolean = false;

  constructor(private auth: AuthenticationService, private route: Router) {}
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
      this.isRegistered = true;
    } else {
      this.isSignedIn = false;
    }
  }
  //sign up
  async onSignUp(email: string, password: string) {
    await this.auth.signUp(email, password);
    if (this.auth.isLoggedIn) {
      this.isSignedIn = true;
      this.isRegistered = true;
      alert('Sign Up successfully completed');
      this.route.navigate(['']);
    }
  }
}
