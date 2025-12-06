import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    console.log(`Current Working Directory: ${process.cwd()}`);
    const app = await NestFactory.create(AppModule);

    if (process.env.NODE_ENV !== 'production') {
        const config = new DocumentBuilder()
            .setTitle('Config Demo API')
            .setDescription('API for demonstrating NestJS ConfigModule')
            .setVersion('1.0')
            .addTag('config')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(3002);
    console.log('Config Demo Application is running on: http://localhost:3002');
}
bootstrap();
