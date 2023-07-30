import { Component, Input, OnInit } from '@angular/core';

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
      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }
}
