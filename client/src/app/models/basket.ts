export interface BasketItem {
    productId: number;
    name: string;
    price: number;
    pictureUrlBlack: string;
    plasticType: string;
    productType: string;
    quantity: number;
}

export interface Basket {
    id: number;
    buyerId: string;
    items: BasketItem[];
}