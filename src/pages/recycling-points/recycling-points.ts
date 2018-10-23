import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, RecyclingPointModel } from '../../services/identity.service';

/**
 * Generated class for the RecyclingPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recycling-points',
  templateUrl: 'recycling-points.html',
})
export class RecyclingPointsPage {
  puntos: RecyclingPointModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
    this.identiyService.getPuntosReciclaje().subscribe(ans => this.cargarPuntos(ans));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecyclingPointsPage');
  }

  cargarPuntos(p:RecyclingPointModel[]){
    this.puntos = [...p];
    console.log(this.puntos);
  }

}
