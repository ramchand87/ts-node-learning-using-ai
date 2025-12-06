import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('config')
@Controller('config')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @ApiOperation({ summary: 'Show loaded configuration values' })
    @ApiResponse({ status: 200, description: 'Returns config object.' })
    getConfig() {
        return this.appService.getConfig();
    }
}
