import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks:Task[]=[];

  getTasks():Task[]{
    return this.tasks;
  }

  addTasks(task:Task){
    this.tasks.push(task);
  }

  updateTasks(updatedTask:Task){
    const index=this.tasks.findIndex(task=>task.id===updatedTask.id);
    if(index!==-1){
      this.tasks[index]=updatedTask;
    }
  }

  deleteTasks(id:number){
    this.tasks=this.tasks.filter(task=>task.id!==id);
  }
}
