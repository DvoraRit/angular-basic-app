import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  originalListItems = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
  ]
  listItems = [...this.originalListItems];

  onSearchChange(searchEvent: Event): void {
    const searchValue = (searchEvent.target as HTMLInputElement).value;
    if(searchValue===""){
      this.listItems = [...this.originalListItems];
      return;
    }
    this.listItems = this.listItems.filter((item) => {
      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      // return item.name===searchValue;
    });
  }
}
