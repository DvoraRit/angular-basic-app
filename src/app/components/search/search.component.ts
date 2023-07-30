import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 @Input() originalListItems: any[] = [];
 @Input() searchPlaceholder: string = '';
  listItems = [...this.originalListItems];
  searchType="search";

  constructor() { 
    console.log("constructor");

  }

  ngOnChanges(){
    console.log("ngOnChanges");
    this.listItems = [...this.originalListItems];
  }

  ngOnInit(){
    this.listItems = [...this.originalListItems];
  }


  onSearchChange(searchEvent: Event): void {
    const searchValue = (searchEvent.target as HTMLInputElement).value;
    if(searchValue===""){
      this.listItems = [...this.originalListItems];
      return;
    }
    this.listItems = this.listItems.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
