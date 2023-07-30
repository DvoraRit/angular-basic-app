import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output() tabSelected = new EventEmitter<string>();
selectedTab: string = 'search';

onSelect(tab:string) {
  this.tabSelected.emit(tab);
  this.selectedTab = tab;
}

}
