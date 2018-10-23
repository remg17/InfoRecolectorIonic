import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of"
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';
import { Type } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class IdentityService{

    private api: string = "https://info-recolector-rails.herokuapp.com/api/v1/";
    private usuarios: UserModel[];
    private camiones: TruckModel[];

    //Auth
    currentUsr: UserModel;
    userChange: EventEmitter<UserModel> = new EventEmitter<UserModel>();

    private get getUsers():string{
        return this.api + "users"
    }

    private get getTrucks():string{
        return this.api + "trucks"
    }

    constructor(
        private http: HttpClient,
        private storage: Storage
    ){
        this.storage.get('usr').then(ans => {
            if(ans){
                this.currentUsr = {...ans};
                this.userChange.emit(this.currentUsr);
            }
        })
    }

    getUsuarios():Observable<UserModel[]>{
        return this.http.get(this.getUsers).map(obj => <UserModel[]>obj);
        //return of(USERS_DATA);
    }

    getCamiones():Observable<TruckModel[]>{
        return this.http.get(this.getTrucks).map(obj => <TruckModel[]>obj);
    }

    cargarUsuarios(u:UserModel[]){
        this.usuarios = [...u];
        console.log(this.usuarios);
    }

    isValidData(email: string, password: string) : Observable<boolean>{
        this.storage.set('Test', '');
        const usr = this.usuarios.find(u => u.email == email && u.password == password);
        if(usr){
            this.currentUsr = {...usr};
            this.storage.set('usr', this.currentUsr);
            return of(true);
        }
        return of(false);
    }

    // Comprobar los eventos que se ejecutan
    // x: number = 0;

    isAuthenticated():boolean{
        //this.x++;
        //console.log('isAuthenticated',this.x);
        return this.currentUsr ? true : false;
    }

    logOut():void{
        this.storage.clear();
        this.currentUsr = null;
        this.userChange.emit(this.currentUsr);
        // this.navCtrl.setRoot(HomePage);
    }
} 

const USERS_DATA : UserModel[] = [
    {
        email: "ftalero@123.com",
        id: 4,
        name: "JFTO",
        password: "123456789"
    },
    {
        email: "imartine@123.com",
        id: 3,
        name: "IDMG",
        password: "987654321"
    }
];

export interface UserModel{
    name: string,
    id: number,
    email: string,
    password: string
}

export interface TruckModel{
    id: number,
    name: string,
    licensePlate: string,
    type_truck: Object,

}