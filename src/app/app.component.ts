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
import { RoutesPage } from '../pages/routes/routes';
import { TruckRoutesPage } from '../pages/truck-routes/truck-routes';
import { RouteStopsPage } from '../pages/route-stops/route-stops';
import { RouteSchedulesPage } from '../pages/route-schedules/route-schedules';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, authLevel: number}>;

  userState: string = "No user changes";
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private identityService: IdentityService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, authLevel: 2},
      { title: 'Iniciar Sesión', component: LoginPage, authLevel: 1},
      { title: 'Camiones', component: TrucksPage, authLevel: 2},
      // { title: 'Rutas / Camiones', component: TruckRoutesPage, authLevel: 2},
      { title: 'Rutas / Paradas', component: RouteStopsPage, authLevel: 2},
      { title: 'Rutas / Horarios', component: RouteSchedulesPage, authLevel: 2},      
      { title: 'Puntos de reciclaje', component: RecyclingPointsPage, authLevel: 2},
      // { title: 'Paradas', component: StopsPage, authLevel: 2},
      // { title: 'Rutas', component: RoutesPage, authLevel: 2}      
    ];
    this.identityService.userChange.subscribe(ans => {
      this.onUserChange(ans);
    })

  }

  onUserChange(ans){
    if(ans){
      this.userState = "User has change: ";
      this.rootPage = HomePage;
    }else{
      this.userState = "User has exit";
      this.rootPage = LoginPage;
    }
    //console.log(this.userState, ans);
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

    if(authLevel === 0){
      ans = true;
    }else if(authLevel === 1){
      ans = !this.identityService.isAuthenticated();
    }else if(authLevel === 2){
      ans = this.identityService.isAuthenticated();
    }else{
      ans = true;
    }

    return ans;
  }

  logOut():void{
    this.identityService.logOut();
    this.nav.setRoot(LoginPage);
  }
}
