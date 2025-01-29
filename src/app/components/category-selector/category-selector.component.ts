import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Input() resetTrigger:boolean=false;
  

  categories:string[]=['Work','Personal','Urgent'];

  onCategoryChange(event:Event):void{
    const target = event.target as HTMLSelectElement;
    this.selectedCategory=target.value;
    this.categorySelected.emit(target.value);    
  } 

  ngOnChanges(changes: SimpleChanges): void {
    if ('resetTrigger' in changes) {
      this.resetCategory();
    }
  }

  resetCategory(): void {
    this.selectedCategory = ''; // Reset the selection
    this.categorySelected.emit(this.selectedCategory);
  }


 
}

