import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1. Register Global Exception Filter
    app.useGlobalFilters(new HttpExceptionFilter());

    // 2. Setup Swagger
    if (process.env.NODE_ENV !== 'production') {
        const config = new DocumentBuilder()
            .setTitle('Global Exception Demo')
            .setDescription('API demonstrating Global Error Handling')
            .setVersion('1.0')
            .addTag('demo')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(3004);
    console.log('Exception Demo is running on: http://localhost:3004');
}
bootstrap();
