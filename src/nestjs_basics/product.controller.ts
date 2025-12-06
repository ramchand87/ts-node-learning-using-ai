import { Controller, Get, Post, Body, Query, Param, NotFoundException, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiBody, ApiHeader } from '@nestjs/swagger';
import { ProductService, Product } from './product.service';
import { CreateProductDto } from './create-product.dto';
import { AuthGuard } from './auth.guard';
import { TransformInterceptor } from './transform.interceptor';

@ApiTags('products')
@Controller('products')
@UseInterceptors(TransformInterceptor)
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    @ApiOperation({ summary: 'Get all products' })
    @ApiQuery({ name: 'name', required: false, description: 'Filter products by name' })
    @ApiResponse({ status: 200, description: 'Return all products.' })
    getAll(@Query('name') name?: string): Product[] {
        return this.productService.getAll(name);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a product by ID' })
    @ApiParam({ name: 'id', description: 'The ID of the product' })
    @ApiResponse({ status: 200, description: 'Return the product.' })
    @ApiResponse({ status: 404, description: 'Product not found.' })
    getOne(@Param('id') id: string): Product {
        const product = this.productService.findById(+id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Create a new product' })
    @ApiHeader({
        name: 'Authorization',
        description: 'Auth token (use "secret_token")',
        required: true,
    })
    @ApiBody({ type: CreateProductDto })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    create(@Body() product: CreateProductDto): Product {
        return this.productService.create(product);
    }
}
