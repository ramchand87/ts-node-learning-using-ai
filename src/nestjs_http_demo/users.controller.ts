import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users from external API' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    findAll(): Observable<any[]> {
        return this.usersService.findAll();
    }
}
