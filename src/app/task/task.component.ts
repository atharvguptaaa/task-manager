import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';
import { CategorySelectorComponent } from "../components/category-selector/category-selector.component";

@Component({
  selector: 'app-task',
  imports: [NgClass, FormsModule, CategorySelectorComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input() task!:Task;
@Output() taskUpdated = new EventEmitter<Task>();
@Output() taskDeleted = new EventEmitter<number>();

isEditing=false;
editedTitle="";
editedDesc="";
editedCategory="";


ngOnInit():void{
  this.editedTitle=this.task.title;
  this.editedDesc=this.task.desc;
  this.editedCategory=this.task.category;
}

onEdit():void{
  this.isEditing=true;
}

onSave():void{
  const updatedTask={
    ...this.task,
    title:this.editedTitle,
    desc:this.editedDesc,
    category:this.editedCategory
  };
  this.taskUpdated.emit(updatedTask);
  this.isEditing=false;
}

onCancel():void{
  this.isEditing=false;
  this.editedTitle=this.task.title;
  this.editedDesc=this.task.desc;
  this.editedCategory=this.task.category;
}

onDelete():void{
  this.taskDeleted.emit(this.task.id);
}

onCategorySelected(category:string):void{
  this.editedCategory=category;
}
}
