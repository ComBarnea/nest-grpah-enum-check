process.env.NODE_ENV = 'dev';
process.env.PORT = '3000';

import { INestApplication, ValidationPipe, Logger } from '@nestjs/common';

import * as compression from 'compression';
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module';

export async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.NODE_ENV === 'dev' ? '*' : [process.env.FRONT_BASE_URL],
    preflightContinue: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

  app.setGlobalPrefix('v1');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  app.use(compression());


  await app.listen(process.env.PORT);

  Logger.log(`Started application in NODE_ENV=${process.env.NODE_ENV} port ${process.env.PORT}`);
  return app;
}
