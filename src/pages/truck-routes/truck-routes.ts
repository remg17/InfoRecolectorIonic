import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, TruckRouteModel } from '../../services/identity.service';

/**
 * Generated class for the TruckRoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truck-routes',
  templateUrl: 'truck-routes.html',
})
export class TruckRoutesPage {
  rutasCamiones: TruckRouteModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
    this.identiyService.getRutasCamiones().subscribe(ans => this.cargarRutasCamiones(ans));
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TruckRoutesPage');
  }

  cargarRutasCamiones(t:TruckRouteModel[]){
    this.rutasCamiones = [...t];
    //console.log(this.rutasCamiones);
  }
}
