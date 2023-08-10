import { Component,EventEmitter,OnInit,Output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';
import { urls } from 'src/consts/urls';
import {selectorCart, selectorCartLength} from '../../store/cart.selector';
import {headerTabs} from '../../../consts/headerTabs';
import { UpdateSearchFilter } from 'src/app/store/cart.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() tabSelected = new EventEmitter<string>();
numOfCardsInCart$:Observable<number>;
numOfCardsInCart:number = 0;
headerTabs = headerTabs;
componentName:string='';
listOfOptions$ : Observable<ICard[]>;
listOfOptions:any[] = [];

constructor(private router: Router, private store:Store<{cart:ICard[]}>) { 
  this.numOfCardsInCart$ = store.select(selectorCartLength);

  //if on tab 'my-cards' get cards from store
  if(this.router.url.includes(urls.routes.myCards)){
    this.componentName = headerTabs.filter((tab)=>`/${tab.path}`===urls.routes.myCards)[0].name;
    this.listOfOptions$ = store.select(selectorCart);
  }
  else{
    this.listOfOptions$ = new Observable<ICard[]>();
  }
}

ngOnInit(): void {
  this.listOfOptions$.subscribe((cards)=>{
    this.listOfOptions = cards.map((item)=>{
      return {
        name:item.title,
        key:item.id
      }});
  });
}

onSelectedValue(value:string){
  console.log("onSelectedValue", value);
  this.store.dispatch(new UpdateSearchFilter(value));
}

logout(){
  localStorage.removeItem("token");
  this.router.navigate([urls.routes.login]);
}


}
