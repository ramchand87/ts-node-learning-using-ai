import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
    let controller: UsersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
        }).compile();

        controller = module.get<UsersController>(UsersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a user', () => {
        const dto = { email: 'test@test.com', age: 25, password: 'password123' };
        const result = controller.create(dto);
        expect(result).toEqual({
            message: 'User created successfully',
            data: dto,
        });
    });
});
