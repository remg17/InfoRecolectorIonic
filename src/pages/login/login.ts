import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IdentityService } from '../../services/identity.service';
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  isValidated: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private identityService: IdentityService,
    private alertControl: AlertController) {
      this.isValidated = false;
      this.identityService.getUsuarios().subscribe(ans => identityService.cargarUsuarios(ans));
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  validateData(){
    this.identityService.isValidData(this.email, this.password).subscribe(ans => {
      if(ans){
        //console.log("Listo Mijo!!!");
        this.navCtrl.setRoot(HomePage);
        return;
      }
      this.isValidated = true;
      let alert = this.alertControl.create({
        title: 'Lo siento',
        subTitle: 'Los datos ingresados no corresponden',
        buttons: ['Volver']
      });
      alert.present();
    })

  }

}
