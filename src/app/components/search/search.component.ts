import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges, OnInit {
  @Output() selectedValue = new EventEmitter<string>();
 @Input() originalListItems: any[] = [];
 @Input() searchPlaceholder: string = '';
 @Input() componentName: string = '';
 @Input() showListOptions=true;
 selectedOption:any;
 openOptions:boolean=false;
  listItems:any[] = [...[this.originalListItems]];
  searchType="search";

  constructor() { }

  ngOnChanges(){
    this.listItems = [...this.originalListItems];
  }

  ngOnInit(){
    this.listItems = [...this.originalListItems];
  }
  
  onSearchFocus(event:any): void {
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

  onSelectItem(item:any){
    this.selectedOption = item.name;
    this.openOptions=false;
  }

  onFilterItems(filterEvent: string): void {
    this.selectedValue.emit(filterEvent);
  }
    
}
