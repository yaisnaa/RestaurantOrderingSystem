import { component$, useContext, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { menuList } from "~/data/menu";
import {CartContext} from "~/context/cart";


export const useMenu = routeLoader$(() => menuList);

export default component$(() => {
    const menu = useMenu();
    const cart = useContext(CartContext);
    const menu2 = useStore({list: structuredClone(menu.value)});
    return (
        <div>
            <h1 class= "ml-4 mt-4 text-2xl font-bold mb-4 text-blue-500">Daftar Menu</h1>
            {menu2.list.map((item) => (
                <div key={item.id} class= "ml-4 mt-2">
                    {item.id}. {item.name}: Rp{item.harga.toLocaleString("id-ID") } 
                    <button onClick$={() => {
                        const existing = cart.items.find((x) => x.id === item.id);
                        if(item.stock > 0){
                        if (existing) {
                            existing.quantity += u1;
                        }else{
                            cart.items.push({...item, quantity: 1});
                        }
                    }
                        const KurangStock = menu2.list.find((x) => x.id === item.id);
                        if(KurangStock && KurangStock.stock > 0){
                            KurangStock.stock -= 1;
                        }
                    }} class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah ke Keranjang</button>
                </div>
            ))}
            <div class= "ml-4 mt-4">
                <h2 class= "text-xl font-bold mb-2 text-blue-500">Keranjang Belanja</h2>
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x Rp{item.harga.toLocaleString("id-ID")} = Rp{(item.quantity * item.harga).toLocaleString("id-ID")}
                            Stock: {menu2.list.find((x) => x.id === item.id)?.stock}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
})