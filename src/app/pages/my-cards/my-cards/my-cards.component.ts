import { Component, OnInit } from '@angular/core';
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

export class MyCardsComponent implements OnInit {
  allCartList$:Observable<ICard[]>;
  allCartList:ICard[]=[];

  noCardsMessage="No cards found";
  constructor( private store:Store<{cart:{allCart:ICard[]}}>) { 
    this.allCartList$ = store.select(selectorFilteredCart);
  }

  ngOnInit(): void {
    this.allCartList$.subscribe((cards)=>{
      this.allCartList = cards;
    });
  }

  removeFromCart(card:ICard){
    this.store.dispatch(new RemoveFromCart(card));
  }
}
