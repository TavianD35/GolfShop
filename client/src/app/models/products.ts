export interface Product {
        id: number;
        description: string;
        name: string;
        price: number;
        pictureURL: string;
        type?: string;
        brand: string;
        quantityInStock?: number;
}