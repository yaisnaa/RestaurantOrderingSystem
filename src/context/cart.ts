import type {MenuItem} from "~/data/menu";
import {createContextId} from "@builder.io/qwik";

export interface CartItem extends MenuItem {
    quantity: number;
}

export interface CartStore {
    items: CartItem[];
}

export const CartContext = createContextId<CartStore>('cart.context');