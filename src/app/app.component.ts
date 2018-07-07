import { Component } from '@angular/core';
import { UserModel } from './model/user-model';
import { AddressModel } from './model/address-model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ]
})
export class AppComponent {
  title = 'app';
  newUser: UserModel = new UserModel();
  user: UserModel;
  address: AddressModel;
  animalName = '';

  constructor(private _userService: UserService){
    this.user = new UserModel('',0,new Array<AddressModel>());
    this.address = new AddressModel('',0,'');
  }

  showAlert(){
    alert('Fui clicado');
  }

  incluirEndereco(enderecoRua: string,enderecoNumero: number,enderecoUF: string){
    const address = new AddressModel(enderecoRua,enderecoNumero,enderecoUF);
    this.user.adresses.push(address);
  }

  incluirEndereco2(){
    this.user.adresses.push(this.address);
    this.address = new AddressModel('',0,'');
  }

  salvarUsuario(){
    this._userService.createUser(this.newUser).then(user => {
      this.user = user;
      console.log(user);
    }).catch(e => {
      console.log(e);
    });
  }

  addAddress(){
    this._userService.addAddress(this.address).then(address =>{
      console.log(address);
    }).catch(e => {
      console.log(e);
    });
  }

  deleteAddress(){
    this._userService.deleteAddress(this.address).then(address =>{
      console.log("excluido");
    }).catch(e => {
      console.log(e);
    });
  }


  update(nome: string,idade: number,animalName: string){
    this.user.name = nome;
    this.user.age = idade;

   

  //  this.user.adresses.push({
   //   street: enderecoRua,
  //    number: enderecoNumero,
  //    state: enderecoUF
  //  }) ;
    //this.user.adresses[0].street = enderecoRua;
    //this.user.adresses[0].number = enderecoNumero;
    //this.user.adresses[0].state = enderecoUF;
    //this.animalName = animalName;
  }



  updateAnimal(animalName: string){
    this.animalName = animalName;
  }

}
