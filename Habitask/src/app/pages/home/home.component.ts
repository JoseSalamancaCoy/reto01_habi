import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Task} from './../../models/task.models'
import {User} from './../../models/user-models'

import {UserService} from './../../services/user.service'
import {TaskService} from './../../services/task.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  //--Define variables del componente --
  tasks = signal<Task[]>([]);
  Users = signal<User[]>([]);
  currentUser!: User;   //Esto debe provenir del proceso de autenticacion
  assignedUser!: User;  //Inicialmente sera el usuario autenticado
  //-------------------------------------
  private userService = inject(UserService);
  private taskService = inject(TaskService);
  ngOnInit() {
    //  ************Consulta API para traer todas las tareas asignadas a un usuario a partir del id de usuario  ******************
    // Consulta para traer los valores del usuario actual
    // Consulta para traer la lista de todos los usuarios
    this.currentUser = this.userService.getCurrentUser();
    this.assignedUser= this.currentUser; //El usuario asignado por defecto es el mismo
    this.Users.set(this.userService.getListUsers());
    this.tasks.set(this.taskService.getTasksbyUser(this.currentUser.id));
  }
  
  assignedUserEvent(event:Event){
    const selectedId = (event.target as HTMLSelectElement).value;
  
    const user = this.Users().find(user => user.id === selectedId);
    if (user) {
      this.assignedUser = user;
      alert(`Usuario asignado: ${this.assignedUser.name}`);
    } else {
      alert("Usuario no encontrado");
    }
  }

  newTaskEvent(event: Event){
    const input = event.target as HTMLInputElement;
    const titleNewTask = input.value;
    const newTask:Task = this.taskService.createTask(titleNewTask,this.assignedUser.id, this.currentUser.id);
    this.tasks.update((tasks) => [...tasks, newTask]);
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
      if (tasks[index].userCreated === this.currentUser.id && !tasks[index].completed) {
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
