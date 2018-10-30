import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, RouteStopModel } from '../../services/identity.service';

/**
 * Generated class for the RouteStopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route-stops',
  templateUrl: 'route-stops.html',
})
export class RouteStopsPage {
  rutasParadas: RouteStopModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
    this.identiyService.getRutasParadas().subscribe(ans => this.CargarRutasParadas(ans));
}

  ionViewDidLoad() {
   //console.log('ionViewDidLoad RouteStopsPage');
  }
  
  CargarRutasParadas(r:RouteStopModel[]){
    this.rutasParadas = [...r];
    //console.log(this.rutasParadas);
  }
}
