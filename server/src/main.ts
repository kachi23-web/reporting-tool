import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Allow only your Next.js frontend
    credentials: true,               // Allow cookies if necessary
  });
  
  await app.listen(3000);
}
bootstrap();



