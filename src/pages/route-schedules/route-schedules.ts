import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityService, RouteScheduleModel } from '../../services/identity.service';

/**
 * Generated class for the RouteSchedulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route-schedules',
  templateUrl: 'route-schedules.html',
})
export class RouteSchedulesPage {
  rutasHorarios: RouteScheduleModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private identiyService: IdentityService) {
    this.identiyService.getRutasHorarios().subscribe(ans => this.CargarRutasHorarios(ans));
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteSchedulesPage');
  }

  CargarRutasHorarios(r:RouteScheduleModel[]){
    this.rutasHorarios = [...r];
    console.log(this.rutasHorarios);
  }
}
