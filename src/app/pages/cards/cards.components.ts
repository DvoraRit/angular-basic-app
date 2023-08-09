import { Component } from '@angular/core';
import { trigger, state } from '@angular/animations';
import { ICard } from '../../interfaces/card.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import {urls} from '../../../consts/urls';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/store/cart.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('addCardModal', [
      state('true',style({
        
      })),
      state()
    ])
  ]
})
export class CardsComponent {
  cards: ICard[] = [];
  pageTitle: string = 'Cards Component';
  loadingMessage: string = 'Loading...';
  noCardsMessage: string = 'No cards found';
  openAddCardModal: boolean = false;
 
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location,
    private store:Store<{cart:ICard[]}>
  ) {}

  ngOnInit() {
    const resolvedData: any = this.actRoute.snapshot.data['cards'];
    this.cards = resolvedData.cards;
    if(this.cards == null) {
      this.location.back();
    }
  }

  async addToCart(card: ICard) {
    // await this.router.navigate([urls.routes.cards, card.id]);
    this.store.dispatch(addToCart({card:card}));
  }
  openModal() {
    this.openAddCardModal = !this.openAddCardModal;
  }
  closeModal(){
    this.openAddCardModal = false;
  }
}
