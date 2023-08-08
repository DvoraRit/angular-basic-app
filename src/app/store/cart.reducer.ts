import {createReducer, on} from '@ngrx/store';
import { ICard } from '../interfaces/card.interface';
import { addToCart, removeFromCart, set } from './cart.actions';

// const cartLocalStorage = localStorage.getItem('cart') || '';
// const initialState: ICard[] |never[] = cartLocalStorage ? JSON.parse(cartLocalStorage) : [];

const initialState: ICard[] = [];

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, {card}) => [...state, card]),
    on(removeFromCart, (state, {card}) => state.filter((c) => c.id !== card.id)),
    on(set, (state, action) => action.cards)
);