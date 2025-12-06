import { IsString, IsInt, IsEmail, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123', description: 'The password (min 8 chars)' })
    @IsString()
    @MinLength(8)
    password: string;

    @ApiProperty({ example: 25, description: 'The age of the user (must be 18+)' })
    @IsInt()
    @Min(18)
    age: number;
}
