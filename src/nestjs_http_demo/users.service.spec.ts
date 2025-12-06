import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
// import { AxiosResponse } from 'axios'; // Removed to avoid ESM compilation issues in Jest

describe('UsersService', () => {
    let service: UsersService;
    let httpService: HttpService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: HttpService,
                    useValue: {
                        get: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
        httpService = module.get<HttpService>(HttpService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return an array of users', (done) => {
        const result: any[] = [{ id: 1, name: 'John Doe' }];
        const response: any = {
            data: result,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: { headers: undefined },
        };

        jest.spyOn(httpService, 'get').mockReturnValue(of(response));

        service.findAll().subscribe({
            next: (users) => {
                expect(users).toEqual(result);
                done();
            },
            error: (err) => done(err),
        });
    });
});
