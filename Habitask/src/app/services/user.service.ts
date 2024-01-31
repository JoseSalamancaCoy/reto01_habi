import { Injectable } from '@angular/core';
import { type Client, generateClient } from 'aws-amplify/api';
import * as query from './../../graphql/queries';
import { Users } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public client: Client;

  constructor() {
    const client = generateClient();
    this.client = generateClient();

   }
  
   public async getCurrentUser(id:string): Promise<Users>{
    try {
      const response = await this.client.graphql({
        query: query.getUsers,
        variables: { id } // Pasando el ID como variable
      });
  
      if (response.data && response.data.getUsers) {
        console.log('Usuario obtenido:', response.data.getUsers);
        const users : Users ={
          __typename : response.data.getUsers.__typename,
          id: response.data.getUsers.id,
          name: response.data.getUsers.name,
          email: response.data.getUsers.email,
        }
        return users;
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch(e){
      throw e;
    }
  }

  public async getListUsers(): Promise<Users[]>{
    try {
      const response = await this.client.graphql({
        query: query.listUsers,
      });
      console.log('Lista de usaurios!', response.data.listUsers.items);
     
      return response.data.listUsers.items;
    } catch (e) {
      console.log('error creating todo...', e);
      return [];
    }
  }
}
