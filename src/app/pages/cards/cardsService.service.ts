import {ICard} from '../../interfaces/card.interface';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../consts/urls';
import { Injectable } from '@angular/core';
@Injectable()
export class CardsService {
    cards:ICard[] = [];
    constructor(private http: HttpClient) {}

    getCards() {
        return this.http.get(urls.baseUrl + urls.cards_json);
    }
}
