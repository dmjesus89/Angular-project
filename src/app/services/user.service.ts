import { Injectable } from '@angular/core';
import { UserModel } from '../model/user-model';
import { AddressModel } from '../model/address-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_STORAGE_NAME = 'user';
  constructor() { }

  createUser(user: UserModel): Promise<UserModel> {

    return new Promise((resolve, reject) => {
      if (user) {
        localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Dados de usuario nao informados'));
      }
    });
  }

  getUser(): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if (user) {
        try {
          console.log(localStorage.getItem(this.USER_STORAGE_NAME) );
          resolve(JSON.parse(user))
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  }

  addAddress(address: AddressModel):Promise<AddressModel>{
    return new Promise ((resolve,reject) => {
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if (user) {
        try {
          const userModel = JSON.parse(user) as UserModel;
          if(userModel.adresses){
            userModel.adresses.push(address);
          } else {
            userModel.adresses = [address];
          }
          localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(userModel));
          resolve(address);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  }

  deleteAddress(index):Promise<Array<AddressModel>>{
    return new Promise ((resolve,reject) => {
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if (user) {
        try {
          const userModel = JSON.parse(user) as UserModel;
          if(userModel.adresses){
            userModel.adresses.splice(index,1);
          } 
          localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(userModel));
          resolve(userModel.adresses);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  }

}
