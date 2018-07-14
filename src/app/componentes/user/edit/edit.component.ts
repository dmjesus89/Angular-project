import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../model/user-model';
import { UserService } from '../../../services/user/user.service';
import { AddressModel } from '../../../model/address-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  user: UserModel;
  address: AddressModel;

  constructor(private userService: UserService,  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.address = new AddressModel();
    let id  = this.route.snapshot.params['id'];
    this.userService.getUserById(id).then( user => {
      this.user = user;
    } );
  }

  addAddress(){
    this.userService.createAddress(this.user.id, this.address);
    this.userService.getUserById(this.user.id).then(resposta => {
    this.user = resposta;
    });
  }

}
