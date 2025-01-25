import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [NgClass, FormsModule],
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


ngOnInit():void{
  this.editedTitle=this.task.title;
  this.editedDesc=this.task.desc;
}

onEdit():void{
  this.isEditing=true;
}

onSave():void{
  const updatedTask={
    ...this.task,
    title:this.editedTitle,
    desc:this.editedDesc
  };
  this.taskUpdated.emit(updatedTask);
  this.isEditing=false;
}

onCancel():void{
  this.isEditing=false;
  this.editedTitle=this.task.title;
  this.editedDesc=this.task.desc;
}

onDelete():void{
  this.taskDeleted.emit(this.task.id);
}

}
