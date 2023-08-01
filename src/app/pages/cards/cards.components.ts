import { Component } from '@angular/core';
import {ICard} from '../../interfaces/card.interface';
import {CARDS} from './cardsItems';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {urls} from '../../../consts/urls';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: ICard[] = [];

  constructor(private router: Router, private http: HttpClient) { 
    this.getCards();
  }

  showDetails(card: ICard) {
    //navigate to card details
    this.router.navigate(['/cards', card.id]);
  }

  getCards() {
    this.http.get(urls.baseUrl + 'cards.json').subscribe((data: any) => {
      this.cards = data;
    });
  }
  addCard(){
    console.log('add card');
   
  }
}
