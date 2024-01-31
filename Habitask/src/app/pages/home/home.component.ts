import { Component, inject, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Tasks, Users} from './../../API.service'

import {UserService} from './../../services/user.service'
import {TaskService} from './../../services/task.service'

import { generateClient, type Client } from 'aws-amplify/api';
import { ListUsersQuery,ListTasksQuery,CreateUsersMutation } from '../../API.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  //--Define variables del componente --
  tasks = signal<Tasks[]>([]);
  Users = signal<Users[]>([]);
  defaultUser:Users ={
    __typename : "Users",
    id : "",
    name: "",
    email: ""
  }
  currentUser = signal<Users>(this.defaultUser);   //Esto debe provenir del proceso de autenticacion
  assignedUser = signal<Users>(this.defaultUser);  
  //-------------------------------------
  private userService = inject(UserService);
  private taskService = inject(TaskService);
  private changeDetectorRef= inject(ChangeDetectorRef);
  ngOnInit() {
    //  ************Consulta API para traer todas las tareas asignadas a un usuario a partir del id de usuario  ******************
    // Consulta para traer los valores del usuario actual
    // Consulta para traer la lista de todos los usuarios
    const idUser  :string = "a3c07a02-eee2-4909-af17-acd50570f3da";
    this.userService.getCurrentUser(idUser).then(user =>{
      this.currentUser.set(user);
      this.assignedUser.set(user); //El usuario asignado por defecto es el mismo
      this.changeDetectorRef.detectChanges();
    }).catch(error =>{
      console.error('Error al obtener usuarios', error);
    })
    
    this.userService.getListUsers().then(users =>{
      this.Users.set(users);
    }).catch(error =>{
      console.error('Error al obtener usuarios', error);
    })

    this.taskService.getTasksbyUser(idUser).then(tasks =>{
      this.tasks.set(tasks);
    }).catch(error =>{
      console.error('Error al obtener usuarios', error);
    })


  }
  
  assignedUserEvent(event:Event){
    const selectedId = (event.target as HTMLSelectElement).value;
  
    const user = this.Users().find(user => user.id === selectedId);
    if (user) {
      this.assignedUser.set(user);
    } else {
      alert("Usuario no encontrado");
    }
  }

  newTaskEvent(event: Event){
    const input = event.target as HTMLInputElement;
    const titleNewTask = input.value;
    this.taskService.createTask(titleNewTask,this.assignedUser().id, this.currentUser().id).then(newTask =>{
      if(newTask.usersTaskAssignedId === this.currentUser().id){
        this.tasks.update((tasks) => [...tasks, newTask]);
      }
    }).catch(error =>{
      console.error('Error al obtener usuarios', error);
    })    
  }

  updateTask(index:Number){
    this.tasks.update((tasks) =>{
      return tasks.map((task,position) =>{
        if(position === index){
          //************Consulta API para actualizar tarea************
          const updatedTask ={
            ...task,
            completed: !task.completed,
            dateFinished: Date.now()
          };
          this.taskService.updateTask(updatedTask);
          return updatedTask;
        }
        return task;
      })
    })
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => {
      // Solo permitir eliminar si el usuario actual creó la tarea y si no está completada
      if (tasks[index].usersTaskCreatedId === this.currentUser().id && !tasks[index].completed) {
        this.taskService.deleteTask(tasks[index].id).subscribe(() => {
          // Actualiza el estado local solo después de una eliminación exitosa
          this.tasks.update(tasks => tasks.filter((_, position) => position !== index));
        }, error => {
          // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
          console.error('Error al eliminar la tarea', error);
        });
        return tasks.filter((_, position) => position !== index);
      }
      alert("No puedes eliminar esta tarea")
      return tasks; // Si no se cumplen las condiciones, no hacer cambios
    });
  }
}
