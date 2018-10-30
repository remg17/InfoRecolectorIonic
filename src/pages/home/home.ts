import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdentityService, UserModel } from '../../services/identity.service';
import { TrucksPage } from '../trucks/trucks';
import { RouteSchedulesPage } from '../route-schedules/route-schedules';
import { RoutesPage } from '../routes/routes';
import { RecyclingPointsPage } from '../recycling-points/recycling-points';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios: UserModel[];
  userState: string = "No user changes";

  constructor(
    public navCtrl: NavController,
    private identityService: IdentityService,
    private cd: ChangeDetectorRef
    ) {
      this.identityService.userChange.subscribe(ans => {
        this.onUserChange(ans);
      })
  }

  onUserChange(ans){
    if(ans){
      this.userState = "User has change: ";
    }else{
      this.userState = "User has exit";
    }

    console.log(this.userState, ans);
  }

  mostrarNombre():void{
    this.identityService.getUsuarios().subscribe(ans  => this.identityService.cargarUsuarios(ans));
  }

  // Listar los usuarios con el botón
  // cargarUsuarios(u:UserModel[]){
  //   this.usuarios = [...u];
  //   console.log(this.usuarios);
  // }

  navigateToTrucks():void{
    this.navCtrl.push(TrucksPage);
  }

  navigateToShedules():void{
    this.navCtrl.push(RouteSchedulesPage);
  }

  navigateToRoutes():void{
    this.navCtrl.push(RoutesPage);
  }

  navigateToRecycling():void{
    this.navCtrl.push(RecyclingPointsPage);
  }

}