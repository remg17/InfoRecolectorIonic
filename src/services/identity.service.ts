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

    constructor(
        private http: HttpClient
    ){}

    getUsuarios():Observable<UserModel[]>{
        return this.http.get(this.getUsers);
        //return of(USERS_DATA);
    }
} 

const USERS_DATA : UserModel[] = [
    {
        email: "ftalero@123.com",
        id: 4,
        name: "JFTO"
    },
    {
        email: "imartine@123.com",
        id: 3,
        name: "IDMG"
    }
];

export interface UserModel{
    name: string,
    id: number,
    email: string
}