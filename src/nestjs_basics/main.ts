import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept, Authorization',
    });
    app.useGlobalInterceptors(new LoggingInterceptor());

    const config = new DocumentBuilder()
        .setTitle('Product Inventory API')
        .setDescription('The product inventory API description')
        .setVersion('1.0')
        .addTag('products')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
    console.log('Application is running on: http://localhost:3000');
    console.log('Swagger UI is available at: http://localhost:3000/api');
}

if (require.main === module) {
    bootstrap();
}
