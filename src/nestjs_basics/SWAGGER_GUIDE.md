# Swagger (OpenAPI) Setup Guide

This guide explains how to add Swagger documentation to a NestJS application.

## 1. Installation

Install the required dependencies:

```bash
npm install @nestjs/swagger swagger-ui-express
```

## 2. Configuration (`main.ts`)

In your bootstrap function, initialize the Swagger document builder:

```typescript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Create Config
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth() // Optional: Add if using Token Auth
    .build();

  // 2. Create Document
  const document = SwaggerModule.createDocument(app, config);

  // 3. Setup UI Path (e.g., /api)
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

## 3. Decorators

Use these decorators in your Controllers and DTOs to enhance the documentation.

### Controller Level
```typescript
@ApiTags('products') // Groups endpoints under "products" in UI
@Controller('products')
export class ProductController {}
```

### Endpoint Level
```typescript
@Get()
@ApiOperation({ summary: 'Find all products' })
@ApiResponse({ status: 200, description: 'Return all products.' })
@ApiResponse({ status: 403, description: 'Forbidden.' })
findAll() { ... }
```

### DTO Level
```typescript
export class CreateProductDto {
  @ApiProperty({ example: 'Apple', description: 'The name of the product' })
  name: string;

  @ApiProperty({ example: 100, description: 'The price' })
  price: number;
}
```

## 4. Production Safety
Wrap the setup in a conditional check to disable it in production:

```typescript
if (process.env.NODE_ENV !== 'production') {
   SwaggerModule.setup('api', app, document);
}
```
