import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;
    let configService: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                {
                    provide: ConfigService,
                    useValue: {
                        get: jest.fn((key: string) => {
                            if (key === 'DATABASE_HOST') return 'mock-host';
                            if (key === 'DATABASE_PORT') return 5432;
                            if (key === 'API_KEY') return 'mock-api-key';
                            return null;
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<AppService>(AppService);
        configService = module.get<ConfigService>(ConfigService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return config values from ConfigService', () => {
        const config = service.getConfig();
        expect(config).toEqual({
            database: {
                host: 'mock-host',
                port: 5432,
            },
            apiKey: 'mock-api-key',
        });
        expect(configService.get).toHaveBeenCalledWith('DATABASE_HOST');
        expect(configService.get).toHaveBeenCalledWith('API_KEY');
    });
});
