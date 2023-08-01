import { Component } from '@angular/core';
import {ICard} from '../../interfaces/card.interface';
import {CARDS} from './cardsItems';
import {Router} from '@angular/router';

import {urls} from '../../../consts/urls';
import { CardsService } from 'src/app/services/cardsService.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: ICard[] = [];
  isLoading: boolean = false;

  constructor(private router: Router, private cardsService: CardsService) { 
    this.getCards()

  }

  showDetails(card: ICard) {
    this.router.navigate(['/cards', card.id]);
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
