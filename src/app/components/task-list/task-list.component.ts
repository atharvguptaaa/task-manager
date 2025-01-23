import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskFormComponent } from "../task-form/task-form.component";
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskFormComponent,FormsModule, NgClass],
  templateUrl: './task-list.component.html',  
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
tasks:Task[]=[];

constructor(private taskService:TaskService){};

ngOnInit(): void {
  this.refreshComponents();
}

refreshComponents():void{
  this.tasks=this.taskService.getTasks();

}

deleteTask(id:number):void{
  this.taskService.deleteTasks(id);
  this.refreshComponents();
  
}

onTaskAdded():void{
  this.refreshComponents();
}
}
