import {ICard} from '../interfaces/card.interface';
import {CARDS} from '../pages/cards/cardsItems';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../consts/urls';
import { Injectable } from '@angular/core';
@Injectable()
export class CardsService {
    cards:ICard[] = [];
    constructor(private http: HttpClient) {}

    getCards() {
    return this.http.get(urls.baseUrl + 'cards.json');
    }
    addCard(card: ICard) {
        this.cards.push(card);
    }
    deleteCard(card: ICard) {
        this.cards.splice(this.cards.indexOf(card), 1);
    }
    editCard(card: ICard) {
        this.cards.splice(this.cards.indexOf(card), 1, card);
    }
}