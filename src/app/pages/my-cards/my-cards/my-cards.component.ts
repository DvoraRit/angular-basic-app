import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';
import { removeFromCart } from 'src/app/store/cart.actions';
import { selectorCart } from 'src/app/store/cart.selector';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})

export class MyCardsComponent implements OnInit {
  myCardsList$:Observable<ICard[]>;
  myCardsList:ICard[]=[];
  noCardsMessage="No cards found";
  constructor(private store:Store<{cart:ICard[]}>) { 
    this.myCardsList$ = store.select(selectorCart);
  }

  ngOnInit(): void {
    this.myCardsList$.subscribe((cards)=>{
      this.myCardsList = cards;
    });
  }

  removeFromCart(card:ICard){
    this.store.dispatch(removeFromCart({card:card}));
  }
}
