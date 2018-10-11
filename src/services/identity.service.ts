import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of"
import { HttpClient } from "@angular/common/http";

@Injectable()
export class IdentityService{

    private api: string = "http://localhost:3000/api/v1";
    private get getUsers():string{
        return this.api + "getUsuarios"
    }

    currentUsr: UserModel;

    constructor(
        private http: HttpClient
    ){}

    getUsuarios():Observable<UserModel[]>{
        //return this.http.get(this.getUsers);
        return of(USERS_DATA);
    }

    isValidData(email: string, password: string) : Observable<boolean>{
        const usr = USERS_DATA.find(u => u.email == email && u.password == password);
        if(usr){
            return of(true);
        }
        return of(false);
    }

    isAuthenticated():boolean{
        return this.currentUsr ? true : false;
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