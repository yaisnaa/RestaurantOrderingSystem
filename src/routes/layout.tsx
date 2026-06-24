import { useContextProvider, useStore, Slot, component$ } from "@builder.io/qwik";
import { CartContext, type CartStore } from "~/context/cart";

export default component$(() => {
    const cart = useStore<CartStore>({items: []});
    useContextProvider(CartContext, cart);
    return (<Slot />
    )
}
);
