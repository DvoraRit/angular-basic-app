import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CardsService } from './cardsService.service';
import { EMPTY } from 'rxjs';


export const CardsResolver: ResolveFn<any> =  (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  cardsService: CardsService = inject(CardsService),
): Observable<{}> => {
  return cardsService.getCards().pipe(
    map((cards) => ({cards: cards})),
    catchError((err) => {
      const message = `Retrieval error: ${err}`;
      console.error(message);
      alert('Could not fetch cards');
      return EMPTY;
    }),
  );
};
