import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductService],
        }).compile();

        service = module.get<ProductService>(ProductService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return all products', () => {
        const products = service.getAll();
        expect(products).toHaveLength(2);
        expect(products[0].name).toBe('Laptop');
    });

    it('should filter products by name', () => {
        const products = service.getAll('Mouse');
        expect(products).toHaveLength(1);
        expect(products[0].name).toBe('Mouse');
    });

    it('should find product by id', () => {
        const product = service.findById(1);
        expect(product).toBeDefined();
        expect(product?.id).toBe(1);
    });

    it('should return undefined if product not found', () => {
        const product = service.findById(999);
        expect(product).toBeUndefined();
    });

    it('should create a new product', () => {
        const newProduct = service.create({ name: 'Headphones', price: 100 });
        expect(newProduct.id).toBe(3);
        expect(newProduct.name).toBe('Headphones');
        expect(service.getAll()).toHaveLength(3);
    });
});
