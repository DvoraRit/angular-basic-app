import { createAction, props } from "@ngrx/store";
import { ICard } from "../interfaces/card.interface";


export const init = createAction(
    '[Cart] Init'
);

export const set = createAction(
    '[Cart] Set',
    props<{ cards: ICard[] }>()
);

export const addToCart = createAction(
    '[Cart] Add To Cart',
    props<{ card: ICard }>()

);

export const removeFromCart = createAction(
    '[Cart] Remove From Cart',
    props<{ card: ICard }>()
);