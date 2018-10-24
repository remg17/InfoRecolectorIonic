import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, RouteModel } from '../../services/identity.service';

/**
 * Generated class for the RoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html',
})
export class RoutesPage {
  rutas: RouteModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
    this.identiyService.getRutas().subscribe(ans => this.cargarRutas(ans));  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutesPage');
  }

  cargarRutas(r:RouteModel[]){
    this.rutas = [...r];
    console.log(this.rutas);
  } 
}
