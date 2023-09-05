import { Component } from '@angular/core';
import { NavbarComponent } from './header/navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private navbar: NavbarComponent) {}
}
