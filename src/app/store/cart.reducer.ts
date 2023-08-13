import {Action, createReducer, on} from '@ngrx/store';
import { CartState } from '../interfaces/cart-state.interface';
import { AddToCart,Set,RemoveFromCart,UpdateSearchFilter, CartActions,CartActionTypes } from './cart.actions';

// const cartLocalStorage = localStorage.getItem('cart') || '';
// const initialState: ICard[] |never[] = cartLocalStorage ? JSON.parse(cartLocalStorage) : [];



const initialState : CartState= {
    allCart: [],
    searchFilter: '',
}

export function cartReducer(state=initialState, action:CartActions): CartState{
    switch(action.type){ 
        case CartActionTypes.AddToCart:
            const addToCartAction = action as AddToCart;
            return {
                ...state,
                allCart: [...state.allCart, addToCartAction.payload]
            }
        case CartActionTypes.Set:
            const setAction = action as Set;
            return {
                ...state,
                allCart: [...state.allCart, ...setAction.payload]
            }
        case CartActionTypes.RemoveFromCart:
            const removeFromCartAction = action as RemoveFromCart;
            return {
                ...state,
                allCart: state.allCart.filter((c) => c.id !== removeFromCartAction.payload.id)
            }
        case CartActionTypes.UpdateSearchFilter:
            console.log('UpdateSearchFilter');
            
            const updateSearchFilterAction = action as UpdateSearchFilter;
            return {
                ...state,
                searchFilter: updateSearchFilterAction.payload
            }

        default:
            return state;
        }
}

// export const cartReducer = createReducer(
//     initialState,
//     on(addToCart, (state, {card}) => [...state, card]),
//     on(removeFromCart, (state, {card}) => state.filter((c) => c.id !== card.id)),
//     on(set, (state, action) => action.cards),
// );