import firebase from 'firebase/compat/app';
import 'firebase/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { StartComponent } from './tipsPage/start/start.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { environmentD } from 'src/environments/environment.development';
import { MatchListComponent } from './modals/match-list/match-list.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentRoundResponse } from './interfaces/currentRoundResponse';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { collection, getDocs } from 'firebase/firestore/lite';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { FastAverageColor } from 'fast-average-color';
import { YourTipsComponent } from './yourTips/your-tips/your-tips.component';
import { RegisterComponent } from './register-page/register/register.component';
firebase.initializeApp(environmentD.firebase);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StartComponent,
    MatchListComponent,
    LoginPageComponent,
    YourTipsComponent,
    RegisterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environmentD.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    DialogModule,
    AngularFireAuthModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    PanelModule,
    ChartModule,
    provideFirebaseApp(() => initializeApp(environmentD.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    NavbarComponent,
    LoginPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
