import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureMicroservice } from 'incident-management-commons/dist/bootstrapping';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureMicroservice(app, {
    title: 'Equipment Microservices',
    description: 'API for equipment microservices',
    version: '1.0',
    basePath: 'api/equipment',
  });

  const configService = app.select(AppModule).get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
}

bootstrap();
