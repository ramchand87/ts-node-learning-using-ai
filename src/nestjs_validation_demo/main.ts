import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1. Enable Global Validation Pipe
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // Strips properties not in DTO
        forbidNonWhitelisted: true, // Throws error if extra props sent
    }));

    // 2. Setup Swagger
    if (process.env.NODE_ENV !== 'production') {
        const config = new DocumentBuilder()
            .setTitle('Validation Demo API')
            .setDescription('API demonstrating Input Validation')
            .setVersion('1.0')
            .addTag('users')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(3003);
    console.log('Validation Demo is running on: http://localhost:3003');
}
bootstrap();
