import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/authentication.service';
import { LoginPageComponent } from 'src/app/home/login-page/login-page.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private auth: AuthenticationService,
    private log: LoginPageComponent
  ) {}

  logout() {
    this.auth.logout();
    this.isLogout.emit();
  }
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink: [''],
      },
      {
        label: 'Start',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['start'],
      },
      {
        label: 'YouR Tips',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['yourTips'],
      },
      {
        label: 'Login/Register',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['login'],
      },
      {
        label: 'Log Out',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.log.handleLogOut(),
      },
    ];
  }
}
