import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 @Input() originalListItems: any[] = [];
 @Input() searchPlaceholder: string = '';
 filteredItems: any[] = [];
  searchType="search";

  constructor() { 
    console.log("constructor");
    this.filteredItems = [...this.originalListItems];
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges");
    if (changes['originalListItems']) {
      this.filteredItems = [...this.originalListItems];
    }
  }


  onSearchChange(searchEvent: Event): void {
    const searchValue = (searchEvent.target as HTMLInputElement).value;
    if(searchValue===""){
      this. filteredItems = [...this.originalListItems];
      return;
    }
    this.filteredItems = this.originalListItems.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
