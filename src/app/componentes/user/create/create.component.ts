import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { UserModel } from '../../../model/user-model';

@Component({
  selector: 'dm-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

    user:UserModel;

  constructor(private userService: UserService) { 
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  createUser(){
    this.userService.createUser(this.user);
    this.user = new UserModel();
  }

}
