import { AddressModel } from "./address-model";

export class UserModel {

    id: number;
    name: string;
    age: number;
    adresses: Array<AddressModel> = new Array<AddressModel>();

    constructor(id?:number, name?:string, age?:number, adresses?: Array<AddressModel>){
        this.id = id;
        this.name = name;
        this.age = age;
        this.adresses = adresses;
    }

}

