import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskFormComponent } from "../task-form/task-form.component";
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "../../task/task.component";
import { NgFor, NgIf } from '@angular/common';
import { FilterCategoryPipe } from '../../pipes/filter-category.pipe';

@Component({
  selector: 'app-task-list',
  imports: [TaskFormComponent, FormsModule, TaskComponent,NgFor, FilterCategoryPipe,NgIf],
  templateUrl: './task-list.component.html',  
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
tasks:Task[]=[];

constructor(private taskService:TaskService){};

categories = ['All', 'Work', 'Personal', 'Urgent'];
selectedCategory = 'All';

onCategoryFilterChange(category: string) {
  this.selectedCategory = category;
}


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

onTaskUpdated(updatedTask:Task):void{
  this.taskService.updateTasks(updatedTask);
  this.refreshComponents();
}

onTaskDeleted(id:number):void{
  this.taskService.deleteTasks(id);
  this.refreshComponents();
}

}
