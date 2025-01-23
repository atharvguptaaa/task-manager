import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Output() taskAdded=new EventEmitter<void>();
  title='';
  desc='';
  constructor(private taskService:TaskService){};

  addTask():void{
    const newTask:Task={
      id:Date.now(),
      title:this.title,
      desc:this.desc,
      completed:false
    }
    this.taskService.addTasks(newTask);
    this.taskAdded.emit();
    this.title='';
    this.desc='';
    }
}
