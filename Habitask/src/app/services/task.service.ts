import { Injectable } from '@angular/core';

//import {Task} from './../models/task.models'
import { type Client, generateClient } from 'aws-amplify/api';
import * as mutations from './../../graphql/mutations';
import * as query from './../../graphql/queries';
import {Tasks} from './../API.service'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public client: Client;

  constructor() {
    const client = generateClient();
    this.client = generateClient(); 
  }

  public async getTasksbyUser(userId:string) : Promise<Tasks[]>{
    // Consulta para traer la lista de todos los usuarios
    try {
      const response = await this.client.graphql({
        query: query.listTasksV2,
        variables: { filter: {usersTaskAssignedId: {contains: userId} }} // Pasando el userId como variable
      });
      if (response.data && response.data.listTasks && response.data.listTasks.items) {
        console.log('Tareas obtenidas:', response.data.listTasks.items);
        return response.data.listTasks.items;
      } else {
        throw new Error('No se pudieron obtener las tareas');
      }
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error; // O maneja el error de acuerdo a tus necesidades
    }
  
  }
  
  public async createTask(title:string, userAssignedId:string, currentUserId:string): Promise<Tasks> {
    try{
      console.log("Creando tarea")
      const newTask = {
        title,
        usersTaskCreatedId: currentUserId,
        usersTaskAssignedId: userAssignedId,
        dateCreated: Math.floor(Date.now() / 1000), //Almacena el numero de segundos UNIX Time
        dateFinished: 0, //Valor por defecto para indicar que no ha sido terminada
        completed: false
      }
      const response = await this.client.graphql({
        query: mutations.createTasks,
        variables: {
          input: newTask
        }
      });

      console.log('Tarea Creada', response.data.createTasks);
      return response.data.createTasks
    } catch(e){
      console.error('Error al crear la tarea', e);
      throw e; // O maneja el error como sea más apropiado para tu aplicación
    } 
  }
  public async  updateTask(task:Tasks){
    //Consulta para eliminar tarea de base de datos
    
    // Preparar la tarea actualizada
    const taskUpdate = {
      ...task,
      completed: !task.completed,
      dateFinished: Math.floor(Date.now() / 1000)
    };
    try{
      const response = await this.client.graphql({
        query: mutations.updateTasks,
        variables: {
          input: {id:task.id, completed:taskUpdate.completed, dateFinished:taskUpdate.dateFinished }
        }
      });
      return taskUpdate;
    } catch(e){
      console.error(e);
      throw e;
    }
    //Conuslta para actualizar valor de la tarea
  }
  
  public async  deleteTask(taskId: string) {
    //Consulta para eliminar tarea de base de datos
    try{
      const response = await this.client.graphql({
        query: mutations.deleteTasks,
        variables: {
          input: {id:taskId}
        }
      });
    } catch(e){
      console.error(e);
      throw e;
    }
  }

  private generateUUID(): string {
    // Genera un número hexadecimal aleatorio de cierta longitud
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    
    // Retorna el formato UUID v4
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }
}
