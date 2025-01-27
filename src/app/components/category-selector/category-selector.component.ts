import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-category-selector',
  imports: [FormsModule],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.scss'
})
export class CategorySelectorComponent {
  selectedCategory:string='';
  @Output() categorySelected= new EventEmitter<string>();

  categories:string[]=['Work','Personal','Urgent'];

  onCategoryChange(event:Event):void{
    const target = event.target as HTMLSelectElement;
    this.selectedCategory=target.value;
    this.categorySelected.emit(this.selectedCategory);    
  } 
}

