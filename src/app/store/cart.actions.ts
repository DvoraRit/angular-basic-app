import { createAction, props } from "@ngrx/store";
import { ICard } from "../interfaces/card.interface";
import {Action} from '@ngrx/store';

export const enum CartActionTypes {
    AddToCart = 'Add To Cart',
    RemoveFromCart = 'Remove From Cart',
    Init = 'Init',
    Set = 'Set',
    UpdateSearchFilter = 'Update Search Filter',
}

export class AddToCart implements Action{
    readonly type = CartActionTypes.AddToCart;
    constructor(public payload: ICard) {}
}

export class Init implements Action{
    readonly type = CartActionTypes.Init;
}
export class Set implements Action{
    readonly type = CartActionTypes.Set;
    constructor(public payload: ICard[]) {}
}
export class RemoveFromCart implements Action{
    readonly type = CartActionTypes.RemoveFromCart;
    constructor(public payload: ICard) {}
}

export class UpdateSearchFilter implements Action{
    readonly type = CartActionTypes.UpdateSearchFilter;
    constructor(public payload: string) {}
}

export type CartActions = AddToCart | UpdateSearchFilter|Set|Init|RemoveFromCart|Action;

// export const init = createAction(
//     '[Cart] Init'
// );

// export const set = createAction(
//     '[Cart] Set',
//     props<{ cards: ICard[] }>()
// );

// export const addToCart = createAction(
//     '[Cart] Add To Cart',
//     props<{ card: ICard }>()

// );

// export const removeFromCart = createAction(
//     '[Cart] Remove From Cart',
//     props<{ card: ICard }>()
// );