import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
    let controller: ProductController;
    let service: ProductService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [ProductService],
        }).compile();

        controller = module.get<ProductController>(ProductController);
        service = module.get<ProductService>(ProductService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return all products', () => {
        const result = [{ id: 1, name: 'Test', price: 100 }];
        jest.spyOn(service, 'getAll').mockReturnValue(result);

        expect(controller.getAll()).toBe(result);
    });

    it('should filter products', () => {
        const result = [{ id: 1, name: 'Test', price: 100 }];
        jest.spyOn(service, 'getAll').mockReturnValue(result);

        expect(controller.getAll('Test')).toBe(result);
        expect(service.getAll).toHaveBeenCalledWith('Test');
    });

    it('should return one product', () => {
        const result = { id: 1, name: 'Test', price: 100 };
        jest.spyOn(service, 'findById').mockReturnValue(result);

        expect(controller.getOne('1')).toBe(result);
        expect(service.findById).toHaveBeenCalledWith(1);
    });

    it('should create a new product', () => {
        const dto = { name: 'Test', price: 100 };
        const result = { id: 1, ...dto };
        jest.spyOn(service, 'create').mockReturnValue(result);

        expect(controller.create(dto)).toBe(result);
    });
});
