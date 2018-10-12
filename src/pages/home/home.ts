import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdentityService, UserModel } from '../../services/identity.service';

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
    console.log("Fredy Talero");

    this.identityService.getUsuarios().subscribe(ans  => this.cargarUsuarios(ans));
  }

  cargarUsuarios(u:UserModel[]){
    this.usuarios = [...u];
    console.log(this.usuarios);
  }


}

// REMG Prueba de ingreso por Git Hub, estación trabajo