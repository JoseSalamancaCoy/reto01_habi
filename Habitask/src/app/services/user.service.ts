import { Injectable } from '@angular/core';

import {User} from './../models/user-models'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(): User{
    const currentUser:User={
      id:"d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
      name:"Jose",
      email:"jose@gmail.com"
    };
    return currentUser;
  }

  getListUsers(): User[]{
    // Consulta para traer la lista de todos los usuarios
    const listUsers:User[] =[
      {
        "id": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
        "name": "Jose",
        "email": "jose@gmail.com"
      },
      {
        "id": "a3c07a02-eee2-4909-af17-acd50570f3da",
        "name": "Jose1",
        "email": "jose1@gmail.com"
      },
      {
        "id": "fcb76b9a-95d2-406c-ae27-7addc8c60cf5",
        "name": "Jose2",
        "email": "jose2@gmail.com"
      }
    ];
    return listUsers;
  }
}
