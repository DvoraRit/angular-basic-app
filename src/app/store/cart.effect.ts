import { ICard } from './../interfaces/card.interface';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {removeFromCart, addToCart, init, set} from './cart.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorCart } from './cart.selector';
import { Injectable } from '@angular/core';

@Injectable()
export class CartEffects {

    loadCart = createEffect(()=>
        this.actions$.pipe(
            ofType(init),
            switchMap(()=>{
                const cartLocalStorage = localStorage.getItem('cart');
                if(cartLocalStorage) {
                    return of(set({cards:JSON.parse(cartLocalStorage)}));
                }
                return of(set({cards:[]}));
            })

        )
    );

    saveCart = createEffect(() => this.actions$.pipe(
        ofType(addToCart, removeFromCart),
        withLatestFrom(this.store.select(selectorCart)),
        tap(([action,cart])=>{
            localStorage.setItem('cart', JSON.stringify(cart));
        })
    )
    , {dispatch: false});

    constructor(private actions$: Actions, private store:Store<{cart:ICard[]}>) {}
}