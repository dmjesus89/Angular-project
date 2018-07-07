import { Component } from '@angular/core';
import { UserModel } from './model/user-model';
import { AddressModel } from './model/address-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: UserModel;
  animalName = '';

  constructor(){
    this.user = new UserModel('',0,new Array<AddressModel>());
  }

  showAlert(){
    alert('Fui clicado');
  }

  incluirEndereco(enderecoRua: string,enderecoNumero: number,enderecoUF: string,){
    const address = new AddressModel(enderecoRua,enderecoNumero,enderecoUF);
    this.user.adresses.push(address);
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
