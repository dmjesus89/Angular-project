import { AddressModel } from "./address-model";

export class UserModel {

    name: string;
    age: number;
    adresses: Array<AddressModel> = new Array<AddressModel>();

    constructor(name?:string, age?:number, adresses?: Array<AddressModel>){
        this.name = name;
        this.age = age;
        this.adresses = adresses;
    }

}

