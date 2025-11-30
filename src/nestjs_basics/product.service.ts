import { Injectable } from '@nestjs/common';

export interface Product {
    id: number;
    name: string;
    price: number;
}

@Injectable()
export class ProductService {
    private products: Product[] = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Mouse', price: 25 },
    ];

    getAll(name?: string): Product[] {
        if (name) {
            return this.products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        }
        return this.products;
    }

    findById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    create(product: Omit<Product, 'id'>): Product {
        const newProduct = {
            id: this.products.length + 1,
            ...product,
        };
        this.products.push(newProduct);
        return newProduct;
    }
}
