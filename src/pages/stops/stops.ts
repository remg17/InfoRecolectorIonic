import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, StopModel } from '../../services/identity.service';

/**
 * Generated class for the StopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html',
})
export class StopsPage {
  paradas: StopModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
    this.identiyService.getParadas().subscribe(ans => this.cargarParadas(ans));    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StopsPage');
  }

  cargarParadas(p:StopModel[]){
    this.paradas = [...p];
    //console.log(this.paradas);
  }  

}
