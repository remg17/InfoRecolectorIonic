import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, TruckModel } from '../../services/identity.service';

/**
 * Generated class for the TrucksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trucks',
  templateUrl: 'trucks.html',
})
export class TrucksPage {
  camiones: TruckModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
      this.identiyService.getCamiones().subscribe(ans => this.cargarCamiones(ans));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrucksPage');
  }

  cargarCamiones(t:TruckModel[]){
    this.camiones = [...t];
    console.log(this.camiones);
  }

}
