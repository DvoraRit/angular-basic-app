import { Component,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/consts/urls';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output() tabSelected = new EventEmitter<string>();
selectedTab: string = 'cards';
menuItems = [
  {name:'home',path:'home'},
  {name:'cards',path:'cards'},
  ];

constructor(private router: Router) { }

onSelect(tab:string) {
  this.tabSelected.emit(tab);
  this.selectedTab = tab;
}
logout(){
  localStorage.removeItem("token");
  this.router.navigate([urls.routes.login]);
}

}
