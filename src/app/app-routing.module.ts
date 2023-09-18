import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StartComponent } from './tipsPage/start/start.component';
import { MatchListComponent } from './modals/match-list/match-list.component';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { YourTipsComponent } from './yourTips/your-tips/your-tips.component';
import { RegisterComponent } from './register-page/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'start/:id',
    component: MatchListComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'yourTips',
    component: YourTipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
