import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IdentityService } from '../services/identity.service';
import { TrucksPage } from '../pages/trucks/trucks';
import { RecyclingPointsPage } from '../pages/recycling-points/recycling-points';
import { StopsPage } from '../pages/stops/stops';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, authLevel: number}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private identityService: IdentityService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, authLevel: 0},
      { title: 'Iniciar Sesión', component: LoginPage, authLevel: 1},
      { title: 'Camiones', component: TrucksPage, authLevel: 2},
      { title: 'Puntos de reciclaje', component: RecyclingPointsPage, authLevel: 0},
      { title: 'Paradas', component: StopsPage, authLevel: 0}      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  isVisible(authLevel: number):boolean{
    let ans: boolean;

    switch(authLevel){
      case 0: ans = true;
      break;
      case 1: ans = !this.identityService.isAuthenticated();
      break;
      case 2: ans = this.identityService.isAuthenticated();
      break;
      default: ans = true;

    }
    return ans;
  }

  logOut():void{
    this.identityService.logOut();
    this.nav.setRoot(HomePage);
  }
}
