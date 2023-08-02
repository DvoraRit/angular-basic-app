import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CardsService } from './cardsService.service';
export const CardsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  cardsService: CardsService = inject(CardsService),
): Observable<{}> => {
  return cardsService.getCards().pipe(
    catchError((err) => {
      return of('No data' + err);
    }),
  );
};
