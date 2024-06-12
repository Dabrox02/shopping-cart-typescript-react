export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rate;
}

export interface ShoppingCartProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rate;
    quantity: number;
}

export interface Rate {
    rate: number;
    count: number;
}