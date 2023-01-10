import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function prepareOpenApi(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Zuju API Docs')
    .setDescription('Zuju API description')
    .setVersion('1.0')
    .addTag('Zuju', 'Zuju API Documentation')
    .build();

  return SwaggerModule.createDocument(app, options);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/swagger', app, prepareOpenApi(app));

  await app.listen(3000);
}
bootstrap();
