import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { StartComponent } from './tipsPage/start/start.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, StartComponent],
  imports: [BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
