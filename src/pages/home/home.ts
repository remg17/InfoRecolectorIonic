import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdentityService, UserModel } from '../../services/identity.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios: UserModel[];

  constructor(
    public navCtrl: NavController,
    private identityService: IdentityService
    ) {

  }

  mostrarNombre():void{
    console.log("Fredy Talero");

    this.identityService.getUsuarios().subscribe(ans  => this.cargarUsuarios(ans));
  }

  cargarUsuarios(u:UserModel[]){
    this.usuarios = [...u];
    console.log(this.usuarios);
  }


}
