export interface MenuItem {
    id: number;
    name: string;
    harga: number;
    gambar: string; //url path lokal
    kategori: string;
}

export const menuList: MenuItem[] = [
    {
        id: 1,
        name: "Nasi Goreng",
        harga: 15000,
        gambar: "/images/nasi-goreng.jpg",
        kategori: "Main Course"
    },
    {
        id: 2,
        name: "Mie Goreng",
        harga: 12000,
        gambar: "/images/mie-goreng.jpg",
        kategori: "Main Course"
    },
    {
        id: 3,
        name: "Ayam Bakar",
        harga: 20000,
        gambar: "/images/ayam-bakar.jpg",
        kategori: "Main Course"
    }
]