import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(tasks: Task[], category: string): Task[] {
    if(!category || category=="All") return tasks;
    return tasks.filter(task=>task.category===category);
  }

}
