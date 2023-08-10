import { ICard } from './../interfaces/card.interface';
import {createEffect, Actions, ofType} from '@ngrx/effects';
// import {removeFromCart, addToCart, init, set} from './cart.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorCart } from './cart.selector';
import { Injectable } from '@angular/core';
import {CartActionTypes, Set, AddToCart} from './cart.actions';
@Injectable()
export class CartEffects {

    loadCart = createEffect(()=>
        this.actions$.pipe(
            ofType(CartActionTypes.Init),
            switchMap(()=>{
                const cartLocalStorage = localStorage.getItem('cart');
                if(cartLocalStorage) {
                    return of(new Set(JSON.parse(cartLocalStorage) as ICard[]));
                }
                return of(new Set([]));
            })
        )
    );

    saveCart = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.AddToCart, CartActionTypes.RemoveFromCart),
        withLatestFrom(this.store.select(selectorCart)),
        tap(([action,cart])=>{
            localStorage.setItem('cart', JSON.stringify(cart));
        })
    )
    , {dispatch: false});

    constructor(private actions$: Actions, private store:Store<{cart:ICard[]}>) {}
}