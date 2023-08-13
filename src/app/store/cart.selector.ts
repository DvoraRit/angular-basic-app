import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICard } from "../interfaces/card.interface";
import { CartState } from '../interfaces/cart-state.interface';
// export const selectorCart = (state:{cart:ICard[]}) => state.cart;

// export const selectorCartLength = (state:{cart:ICard[]}) => state.cart.length;
const selectCartState = createFeatureSelector<CartState>('cart');
export const selectorCartLength = createSelector(
    selectCartState,
    (state: CartState) => state.allCart.length
  );
export const selectorCart = createSelector(
    selectCartState,
    (state: CartState) => state.allCart
    );

export const selectorFilteredCart = createSelector(
      selectCartState,
      (state: CartState) => {
        
        const searchFilter = state.searchFilter.toLowerCase().trim();
        console.log('selectorFilteredCart');

          return state.allCart.filter(card => card.title.toLowerCase().includes(searchFilter));
      }
  );

