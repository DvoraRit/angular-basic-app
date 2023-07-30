import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTab = 'cards';
  listItems = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
    { id: 4, name: 'ddd' },  ];

  searchPlaceholder="Search";

  onNavigate(tab:string) {
    this.currentTab = tab;
  }

}
