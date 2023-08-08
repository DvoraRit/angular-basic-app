import { Component,EventEmitter,Output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';
import { urls } from 'src/consts/urls';
import {selectorCartLength} from '../../store/cart.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output() tabSelected = new EventEmitter<string>();
selectedTab: string = 'cards';
numOfCardsInCart$:Observable<number>;
numOfCardsInCart:number = 0;
menuItems = [
  {name:'home',path:'home'},
  {name:'cards',path:'cards'},
  {name:'my cards',path:'my-cards'}
  ];

constructor(private router: Router, private store:Store<{cart:ICard[]}>) { 
  this.numOfCardsInCart$ = store.select(selectorCartLength);
}

onSelect(tab:string) {
  this.tabSelected.emit(tab);
  this.selectedTab = tab;
}
logout(){
  localStorage.removeItem("token");
  this.router.navigate([urls.routes.login]);
}

}
