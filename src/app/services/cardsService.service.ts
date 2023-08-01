import {ICard} from '../interfaces/card.interface';
import {CARDS} from '../pages/cards/cardsItems';

export class CardsService {
    cards = CARDS;
    constructor() { }
    getCards() {
        return CARDS;
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