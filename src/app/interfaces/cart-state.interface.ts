import { ICard } from "./card.interface";


export interface CartState {
    allCart: ICard[];
    searchFilter: string // Update this type if needed
}