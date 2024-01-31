import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Task} from './../../models/task.models'
import {User} from './../../models/user-models'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //  ************Consulta API para traer todas las tareas asignadas a un usuario   ******************
  tasks = signal<Task[]>([]);
  Users = signal<User[]>([]);
  //Esto debe provenir del proceso de autenticacion
  currentUser!: User; 
  assignedUser!: User;
  ngOnInit() {
    // Añadir usuarios predeterminados
    this.currentUser={
      id:"jose",
      name:"",
      email:""
    };
    this.assignedUser= this.currentUser; //El usuario asignado por defecto es el mismo
    this.addUser('Fernando');
    this.addUser('Jose');
    this.addTask("Task1", this.assignedUser.id);
  }
  addTask(title: string, assign:String) {
    const newTask = {
      id : "Jose",
      title,
      userCreated: this.currentUser.id,
      userAssigned: assign,
      dateCreated: Date.now(),
      dateFinished: Date.now()+1000,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
    //************Consulta API para actualizar base de datos ************
  }


  addUser(name: string) {
    const user = {
      id : "Aja",
      name,
      email: "aja@gmail.com"
    }
    this.Users.update((Users) => [...Users, user]);
    //************Consulta API para actualizar base de datos ************
  }
  assignedUserEvent(event: Event){
    alert("Uusario asignado");
  }
  newTaskEvent(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask, this.assignedUser.id);
  }

  updateTask(index:Number){
    this.tasks.update((tasks) =>{
      return tasks.map((task,position) =>{
        if(position === index){
          //************Consulta API para actualizar tarea************
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => {
      // Solo permitir eliminar si el usuario actual creó la tarea y si no está completada
      if (tasks[index].userCreated === this.currentUser.id && !tasks[index].completed) {
        //************   Consulta API para eliminar tarea************
        return tasks.filter((_, position) => position !== index);
      }
      alert("No puedes eliminar esta tarea")
      return tasks; // Si no se cumplen las condiciones, no hacer cambios
    });
  }
}
