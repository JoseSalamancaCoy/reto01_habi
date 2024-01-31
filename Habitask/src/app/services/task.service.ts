import { Injectable } from '@angular/core';

import {Task} from './../models/task.models'
import { Observable,of } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class TaskService {

    constructor() { }

    getTasksbyUser(userId:String) : Task[]{
      // Consulta para traer la lista de todos los usuarios
      const listTasks:Task[] =[
        {
          "id": "60dafa2a-3b06-250f-ca97-3386f41caa40",
          "title": "Task 1",
          "userCreated": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "userAssigned": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "dateCreated": 1706678908219,
          "dateFinished": 0,
          "completed": false
        },
        {
          "id": "6e32411f-970d-f198-6374-b3742c570eae",
          "title": "Task 2",
          "userCreated": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "userAssigned": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "dateCreated": 1706678908219,
          "dateFinished": 0,
          "completed": false
        },
        {
          "id": "fb555db2-65bc-8c0f-cb5f-4a0f19993d03",
          "title": "Task 3",
          "userCreated": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "userAssigned": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "dateCreated": 1706678908219,
          "dateFinished": 1706679908219,
          "completed": true
        },
        {
          "id": "fb555db2-65bc-8c0f-cb5f-4a0f19993d03",
          "title": "Task 4",
          "userCreated": "a3c07a02-eee2-4909-af17-acd50570f3da",
          "userAssigned": "d687bc8b-cc7a-4a4d-8a49-73bd862e571f",
          "dateCreated": 1706678908219,
          "dateFinished": 1706679908219,
          "completed": false
        }
      ];
      return listTasks;
    }
  
  createTask(title:String, userAssigned:String, currentUserId:String): Task {
      const newTask = {
        id : this.generateUUID(),
        title,
        userCreated: currentUserId,
        userAssigned,
        dateCreated: Date.now(),
        dateFinished: 0,
        completed: false
      }
      return newTask;
    }
  updateTask(task:Task){
    
    //Conuslta para actualizar valor de la tarea
  }
  deleteTask(id: String): Observable<any>{
    //Consulta para eliminar tarea de base de datos
    return of({ success: true });
  }
  private generateUUID(): string {
    // Genera un número hexadecimal aleatorio de cierta longitud
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    
    // Retorna el formato UUID v4
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }
}
