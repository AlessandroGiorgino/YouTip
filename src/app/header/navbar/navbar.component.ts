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
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(private auth: AuthenticationService) {}

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
        label: 'Log out',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
