import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { UtilsInterceptor } from './utils/utils.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalInterceptors(new UtilsInterceptor())


  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
