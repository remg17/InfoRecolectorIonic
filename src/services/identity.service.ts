import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of"
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';

@Injectable()
export class IdentityService{

    private api: string = "http://localhost:3000/api/v1";

    private get getUsers():string{
        return this.api + "getUsuarios"
    }

    //Auth
    currentUsr: UserModel;

    userChange: EventEmitter<UserModel> = new EventEmitter<UserModel>();

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
        //return this.http.get(this.getUsers).map(obj => <UserModel[]>obj);
        return of(USERS_DATA);
    }

    isValidData(email: string, password: string) : Observable<boolean>{
        this.storage.set('Test', '');
        const usr = USERS_DATA.find(u => u.email == email && u.password == password);
        if(usr){
            this.currentUsr = {...usr};
            this.storage.set('usr', this.currentUsr);
            return of(true);
        }
        return of(false);
    }

    x: number = 0;

    isAuthenticated():boolean{
        this.x++;
        console.log('isAuthenticated',this.x);
        return this.currentUsr ? true : false;
    }

    logOut():void{
        this.storage.clear();
        this.currentUsr = null;
        this.userChange.emit(this.currentUsr);
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