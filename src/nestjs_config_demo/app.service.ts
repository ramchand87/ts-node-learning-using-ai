import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) { }

    getConfig() {
        return {
            database: {
                host: this.configService.get<string>('DATABASE_HOST'),
                port: this.configService.get<number>('DATABASE_PORT'),
            },
            apiKey: this.configService.get<string>('API_KEY'),
        };
    }
}
