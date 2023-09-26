import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn: boolean = false;
  emailConfirmed: boolean = false;
  constructor(private firebaseAuth: AngularFireAuth) {}
  //sign in
  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        if (res.user?.emailVerified === true) {
          this.emailConfirmed = true;
        }
      })
      .catch((err) => {
        alert('Something went wrong, try again.');
      });
  }

  //sign up
  async signUp(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user?.sendEmailVerification();
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
      .catch((err) => {
        alert(
          'Something went wrong. Remember that the password must contain at least 6 characters'
        );
      });
  }
  //log out
  logout(): void {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    alert('User correctly logged out');
  }

  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
}
