import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as express from 'express';
import { logger } from './middleware/logger.middleware';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AllExceptionsFilter } from './filter/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 监听所有的请求路由，并打印日志
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  app.use(logger);

  // 使用全局拦截器打印出参
  app.useGlobalInterceptors(new TransformInterceptor());

  // 设置全局路由前缀
  app.setGlobalPrefix('api');

  // 过滤处理所有异常
  app.useGlobalFilters(new AllExceptionsFilter());

  // 过滤处理 HTTP 异常
  app.useGlobalFilters(new HttpExceptionFilter());

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
