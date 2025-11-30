import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
    @ApiProperty({ example: 'Keyboard', description: 'The name of the product' })
    @IsString()
    name: string;

    @ApiProperty({ example: 50, description: 'The price of the product' })
    @IsNumber()
    price: number;
}
