import { Component } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { urls } from '../../../consts/urls';
import { CardsService } from 'src/app/services/cardsService.service';

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
  constructor(
    private router: Router,
    private cardsService: CardsService,
    private actRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    //this.getCards();
    this.actRoute.data.subscribe((data) => {
      console.log('Check route resolver data');
      this.cards = data['cards'];
    });
  }

  async showDetails(card: ICard) {
    await this.router.navigate([urls.cards, card.id]);
  }

  getCards() {
    this.isLoading = true;
    this.cardsService.getCards().subscribe((data: any) => {
      this.isLoading = false;
      this.cards = data;
    });
  }
  addCard() {
    console.log('add card');
  }
}
