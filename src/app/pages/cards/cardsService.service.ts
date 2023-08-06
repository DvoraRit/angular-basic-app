import {ICard} from '../../interfaces/card.interface';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../consts/urls';
import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
@Injectable()
export class CardsService {
    httpClient = new HttpService(this.http);
    constructor(private http: HttpClient) {}

     getCards() {
        let res =  this.httpClient.get(urls.cards_json);
        return res;
    }
    addCard(card:ICard) {
        debugger
        let res = this.httpClient.post(urls.cards_json, card);
        return res;
    }
}
