import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';
// import { removeFromCart } from 'src/app/store/cart.actions';
import { selectorCart, selectorFilteredCart } from 'src/app/store/cart.selector';
import {RemoveFromCart} from 'src/app/store/cart.actions';
@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})

export class MyCardsComponent implements OnInit, AfterContentInit {
  allCartList$:Observable<ICard[]>;

  noCardsMessage="No cards found";
  constructor( private store:Store<{cart:{allCart:ICard[]}}>) { 
    this.allCartList$ = new Observable<ICard[]>();
    console.log("constructor");
    
  }

  ngOnInit(): void {
    this.allCartList$ = this.store.select(selectorFilteredCart);
    console.log("ngOnInit");
  }

  ngAfterContentInit(): void {
   console.log("ngAfterContentInit");
   
  }


  removeFromCart(card:ICard){
    this.store.dispatch(new RemoveFromCart(card));
  }
}
