import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { IdentityService } from '../services/identity.service';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { IonicStorageModule } from '@ionic/storage';
import { TrucksPage } from '../pages/trucks/trucks';
import { RecyclingPointsPage } from '../pages/recycling-points/recycling-points';
import { StopsPage } from '../pages/stops/stops';
import { RoutesPage } from '../pages/routes/routes';
import { TruckRoutesPage } from '../pages/truck-routes/truck-routes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AccountPage,
    TrucksPage,
    RecyclingPointsPage,
    StopsPage,
    RoutesPage,
    TruckRoutesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AccountPage,
    TrucksPage,
    RecyclingPointsPage,
    StopsPage,
    RoutesPage,
    TruckRoutesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IdentityService,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
