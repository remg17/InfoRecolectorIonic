import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of"

@Injectable()
export class IdentityService{
    getUsuarios():Observable<UserModel[]>{
        return of(USERS_DATA);
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