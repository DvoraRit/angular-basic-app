import { Component } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Store } from '@ngrx/store';
import { AddToCart } from 'src/app/store/cart.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: ICard[] = [];
  pageTitle: string = 'Cards Component';
  loadingMessage: string = 'Loading...';
  noCardsMessage: string = 'No cards found';
  openAddCardModal: boolean = false;
 
  constructor(
    private actRoute: ActivatedRoute,
    private location: Location,
    private store:Store<{cart:{allCart:ICard[]}}>
  ) {}

  ngOnInit() {
    const resolvedData: any = this.actRoute.snapshot.data['cards'];
    this.cards = Object.values(resolvedData.cards);
    // if(this.cards == null) {
    //   this.location.back();
    // }
  }

  async addToCart(card: ICard) {
    // this.store.dispatch(addToCart({card:card}));
    this.store.dispatch(new AddToCart(card));
  }
  openModal() {
    this.openAddCardModal = !this.openAddCardModal;
  }
  closeModal(){
    this.openAddCardModal = false;
  }
}
