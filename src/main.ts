import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置全局路由前缀
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('API')
    .setDescription('This is the api for fast and furious.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
