import { ICard } from "../interfaces/card.interface";

export const selectorCart = (state:{cart:ICard[]}) => state.cart;
export const selectorCartLength = (state:{cart:ICard[]}) => state.cart.length;
