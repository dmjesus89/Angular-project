import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { UserModel } from '../../../model/user-model';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  users: Array<UserModel>;
  usersExample2: Array<UserModel>;
  usersExample3: Observable<any>;
  usersExample4: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.listUsers()
    .then( (response => { 
      this.users = response;
    }))
    .catch(e => {
      console.log(e);
    });

    this.userService.listUsersExample2().subscribe(resp => {
      this.usersExample2 = resp;
      }
    );

    this.usersExample3  = this.userService.listUsersExample3();

    this.usersExample4  = this.userService.listUsersExample4();

//     this.userService.listUsersExample2().subscribe( (value: any) => {
//       console.log('sku changed to:', value);
//     }
// );

//     this.userService.listUsersExample2().subscribe(( response => {
//       console.log(response);
//     }));
  //  this.usersExample3 = this.userService.listUsers().subscribe();
//    this.usersExample4 = this.userService.listUsers()
  }

}
