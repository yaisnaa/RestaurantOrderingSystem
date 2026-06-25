import {component$, useContext, useStore} from "@builder.io/qwik";
import {CartContext} from "~/context/cart";


export default component$(() => {
    const cart = useContext(CartContext);
    return (
        <div>
            <h1 class= "ml-4 mt-4 text-2xl font-bold mb-4 text-blue-500">Keranjang Belanja</h1>
            <div class= "ml-4 mt-2"> {
                cart.items.map((item) => (
                    <div key={item.id}>
                        {item.name} - {item.quantity} x Rp{item.harga.toLocaleString("id-ID")} = Rp{(item.quantity * item.harga).toLocaleString("id-ID")}
                        <button onClick$={() => {
                            const existing = cart.items.find((x) => x.id === item.id);
                            if (existing) {
                                existing.quantity += 1;
                            }
                        }}> + </button>
                        <button onClick$={() => {
                            const existing = cart.items.find((x) => x.id === item.id);
                            if (existing) {
                                existing.quantity -= 1;
                            }
                        }}> - </button>
                    </div>
                ))}
            </div>
        </div>
    );
});