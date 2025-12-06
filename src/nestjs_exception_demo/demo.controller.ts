import { Controller, Get, HttpException, HttpStatus, ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('demo')
@Controller('demo')
export class DemoController {

    @Get('forbidden')
    @ApiOperation({ summary: 'Throws ForbiddenException (403)' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    throwForbidden() {
        throw new ForbiddenException('You are not allowed here!');
    }

    @Get('error')
    @ApiOperation({ summary: 'Throws InternalServerErrorException (500)' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    throwError() {
        throw new InternalServerErrorException('Something went terribly wrong');
    }

    @Get('custom')
    @ApiOperation({ summary: 'Throws generic HttpException (418)' })
    @ApiResponse({ status: 418, description: 'I am a teapot.' })
    throwCustom() {
        throw new HttpException('I am a teapot', HttpStatus.I_AM_A_TEAPOT);
    }
}
