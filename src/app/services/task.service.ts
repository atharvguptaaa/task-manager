import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
/*   private tasks:Task[]=[];

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
  } */

    private localStorageKey='tasks';

    constructor(){
      if(!localStorage.getItem(this.localStorageKey)){
        localStorage.setItem(this.localStorageKey,JSON.stringify([]));
      }
    }

    getTasks():Task[]{
      const tasks=localStorage.getItem(this.localStorageKey);
      return tasks?JSON.parse(tasks):[];
    }

    saveTasks(tasks:Task[]):void{
      localStorage.setItem(this.localStorageKey,JSON.stringify(tasks));
    }
  
    addTasks(task:Task):void{
      const tasks=this.getTasks();
      tasks.push(task);
      this.saveTasks(tasks);
    }
  
    updateTasks(updatedTask:Task){
      const tasks=this.getTasks();
      const index=tasks.findIndex(task=>task.id===updatedTask.id);
      if(index!==-1){
        tasks[index]=updatedTask;
        this.saveTasks(tasks);
      }
    }
  
    deleteTasks(id:number){
      let tasks=this.getTasks();
      tasks=tasks.filter(task=>task.id!==id);
      this.saveTasks(tasks);
    }

    
}
