import { Controller, Get, Post, Body, Query, Param, NotFoundException } from '@nestjs/common';
import { ProductService, Product } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getAll(@Query('name') name?: string): Product[] {
        return this.productService.getAll(name);
    }

    @Get(':id')
    getOne(@Param('id') id: string): Product {
        const product = this.productService.findById(+id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    @Post()
    create(@Body() product: { name: string; price: number }): Product {
        return this.productService.create(product);
    }
}
