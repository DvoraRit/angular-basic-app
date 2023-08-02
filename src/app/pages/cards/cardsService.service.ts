import {ICard} from '../../interfaces/card.interface';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../consts/urls';
import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
@Injectable()
export class CardsService {
    cards:ICard[] = [];
    httpClient = new HttpService(this.http);
    constructor(private http: HttpClient) {}

    getCards() {
        return this.httpClient.get(urls.cards_json);
    }
}
