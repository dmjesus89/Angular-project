import { Injectable, ErrorHandler } from '@angular/core';
import { UserModel } from '../../model/user-model'
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../../app.error-handler'
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { AddressModel } from '../../model/address-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USERS_STORAGE_NAME = 'users';

  constructor(private http: Http) {

  }

  createUser(userModel: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {

      try {
        if (userModel) {
          let usersLocalStorage = localStorage.getItem(this.USERS_STORAGE_NAME);


          if (usersLocalStorage) {
            let users: Array<UserModel> = JSON.parse(usersLocalStorage);
            userModel.id= users.length+1;
            users.push(userModel)
            localStorage.setItem(this.USERS_STORAGE_NAME, JSON.stringify(users));
            }else{
              userModel.id= 1;
              localStorage.setItem(this.USERS_STORAGE_NAME, JSON.stringify(new Array<UserModel>().push(userModel)));
            }
          
          
          resolve(userModel);
        } else {
          console.log("Dados nao preenchidos")
          reject(null);
        }

      } catch (error) {
        console.log("Erro ao cadastrar usuario")
        reject(null);
      }

    });

  }

  getUserById(id: number): Promise<UserModel> {

    return new Promise((resolve, reject) => {

      try {
        let usersLocalStorage = localStorage.getItem(this.USERS_STORAGE_NAME);


        if (usersLocalStorage) {
          let users: Array<UserModel> = JSON.parse(usersLocalStorage);
          let found;
          for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
              resolve(users[i])
              found = true;
            }
          }
          if (found == false) {
            console.log("usuario nao encontrado")
            resolve(null);
          }

        } else {
          resolve(null);
          console.log("nenhum usuario  encontrado")
        }
      } catch (error) {
        reject(new Error('Usuario nao encontrado'));
      }

    });

  }

  createAddress(userId: number, address: AddressModel): Promise<AddressModel> {
    return new Promise((resolve, reject) => {

      let usersLocalStorage = localStorage.getItem(this.USERS_STORAGE_NAME);
      let users: Array<UserModel> = JSON.parse(usersLocalStorage) as Array<UserModel>;
      let userModel: UserModel;
      alert(users.length);
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {

          if(users[i].adresses == undefined){
            alert("null");
            users[i].adresses = new Array<AddressModel>();
            alert( users[i].adresses);
          } else {
            alert("nao null");
            alert(address);
            alert( users[i].adresses.length);
            users[i].adresses.push(address);
            alert( users[i].adresses);
          }
         
        }
      }
      resolve();
      console.log(address);
      localStorage.setItem(this.USERS_STORAGE_NAME, JSON.stringify(users));
    });
  }


  listUsers(): Promise<Array<UserModel>> {

    return new Promise((resolve, reject) => {

      try {
        let usersLocalStorage = localStorage.getItem(this.USERS_STORAGE_NAME);


        if (usersLocalStorage) {

          let users = JSON.parse(usersLocalStorage);
          resolve(users);

        } else {
          let userModel = new UserModel(1, 'teste 1 vez storage vazio', 0);
          let users: Array<UserModel> = new Array<UserModel>();

          users.push(userModel);

          localStorage.setItem(this.USERS_STORAGE_NAME, JSON.stringify(users));

          resolve(users);
        }
      } catch (error) {
        reject(new Error('Dados de usuario nao informados'));
      }

    });
  }


  listUsersExample2(): Observable<UserModel[]> {
    let queryURL = `http://localhost:3000/users`;
    return this.http.get(queryURL)
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError(this.handleError<UserModel>(`listUsersExample2`))
      );
  }

  listUsersExample3(): Observable<any> {
    let queryURL = `http://localhost:3000/users`;
    return this.http.get(queryURL)
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError(this.handleError<any>(`listUsersExample3`))
      );
  }

  listUsersExample4(): UserModel[] {
    let users;

    try {
      let usersLocalStorage = localStorage.getItem(this.USERS_STORAGE_NAME);


      if (usersLocalStorage) {

        users = JSON.parse(usersLocalStorage);


      }
      return users;
    } catch (error) {
      console.log(error)
    }
  }





  deleteUser(_id: string) {

  }

  editUser(_id: string, _userModel: UserModel) {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
