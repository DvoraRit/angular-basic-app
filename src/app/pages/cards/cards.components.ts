import { Component } from '@angular/core';
import {ICard} from '../../interfaces/card.interface';
import {CARDS} from './cardsItems';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: ICard[] = CARDS;

  constructor(private router: Router) { }

  showDetails(card: ICard) {
    //navigate to card details
    this.router.navigate(['/cards', card.id]);
  }
 
}
