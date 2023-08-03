import { Component } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import {urls} from '../../../consts/urls';
import { CardsService } from 'src/app/pages/cards/cardsService.service';
import { CardsResolver } from './cards.resolver';

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

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const resolvedData: any = this.actRoute.snapshot.data['cards'];
    this.cards = resolvedData.cards;

    if(this.cards == null) {
      this.location.back();
    }
  }

  async showDetails(card: ICard) {
    await this.router.navigate([urls.routes.cards, card.id]);
  }
  addCard() {
    console.log('add card');
  }
}
