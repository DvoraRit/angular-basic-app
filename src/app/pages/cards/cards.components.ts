import { Component } from '@angular/core';
import {ICard} from '../../interfaces/card.interface';
import {Router} from '@angular/router';

import {urls} from '../../../consts/urls';
import { CardsService } from 'src/app/pages/cards/cardsService.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: ICard[] = [];
  isLoading: boolean = false;
  pageTitle: string = 'Cards Component';
  loadingMessage: string = 'Loading...';
  noCardsMessage: string = 'No cards found';
  constructor(private router: Router, private cardsService: CardsService) { 
    this.getCards()
  }

  showDetails(card: ICard) {
    this.router.navigate([urls.cards, card.id]);
  }

  getCards() {
    this.isLoading = true;
    this.cardsService.getCards().subscribe((data: any) => {
     this.isLoading = false;
      this.cards= data;
    });
  }
  addCard(){
    console.log('add card');
   
  }
}
