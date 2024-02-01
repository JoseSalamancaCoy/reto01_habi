import { Component, inject, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Tasks, Users} from './../../API.service'

import {UserService} from './../../services/user.service'
import {TaskService} from './../../services/task.service'

import { generateClient, type Client } from 'aws-amplify/api';
import { ListUsersQuery,ListTasksQuery,CreateUsersMutation } from '../../API.service'; 
import { getCurrentUser } from 'aws-amplify/auth';
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
    getCurrentUser().then((userLog) => {
      const idUser  :string = userLog.userId;
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
    });
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

  updateTask(index:number){
    // Obtener la tarea a actualizar
    const taskToUpdate = this.tasks()[index];

    // Llamar a la API para actualizar la tarea
    this.taskService.updateTask(taskToUpdate).then((taskUpdate) => {
      // Si la API confirma la actualización, entonces actualizar el estado local
      this.tasks.update(tasks =>
        tasks.map((task, position) =>
          position === index ? taskUpdate : task
        )
      );
    }).catch(error => {
      // Manejar el error, por ejemplo, informando al usuario
      console.error('Error al actualizar la tarea', error);
    });
  }

  deleteTask(index: number) {

    const task = this.tasks()[index];

    // Comprueba si el usuario puede eliminar la tarea
    if (task.usersTaskCreatedId !== this.currentUser().id || task.completed) {
      alert("No puedes eliminar esta tarea"); // Considerar una alternativa a alert
      return;
    }
    this.taskService.deleteTask(task.id).then(() => {
      // Actualiza el estado local solo después de una eliminación exitosa
      this.tasks.update(tasks => tasks.filter((_, position) => position !== index));
    }).catch(error => {
      // Manejo de errores más detallado
      console.error('Error al eliminar la tarea', error);
      // Mostrar un mensaje de error al usuario
    });
  }
}
