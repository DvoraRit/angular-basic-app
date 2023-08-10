import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges, OnInit {
 @Input() originalListItems: any[] = [];
 @Input() searchPlaceholder: string = '';
 @Input() componentName: string = '';
 @Input() showListOptions=true;
 openOptions:boolean=false;
  listItems:any[] = [...[this.originalListItems]];
  searchType="search";

  constructor() { 
    console.log("constructor");
  }

  ngOnChanges(){
    this.listItems = [...this.originalListItems];
  }

  ngOnInit(){
    this.listItems = [...this.originalListItems];
  }
  
  onSearchFocus(event:any): void {
    console.log("onSearchFocus");
    this.openOptions=!this.openOptions;

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
