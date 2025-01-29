import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import {FormsModule} from '@angular/forms';
import { CategorySelectorComponent } from "../category-selector/category-selector.component";
@Component({
  selector: 'app-task-form',
  imports: [FormsModule, CategorySelectorComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Output() taskAdded=new EventEmitter<void>();
  
  resetTrigger:boolean=false;

  title='';
  desc='';
  category="";
  constructor(private taskService:TaskService){};

  onCategorySelected(category:string):void{
    this.category=category;
  }

  addTask():void{
    const newTask:Task={
      id:Date.now(),
      title:this.title,
      desc:this.desc,
      completed:false,
      category: this.category
    }
    this.taskService.addTasks(newTask);
    this.taskAdded.emit();
    this.title='';
    this.desc='';
    this.category='';
    console.log("Add button clicked"); 
    this.resetTrigger=!this.resetTrigger;
    }
}
