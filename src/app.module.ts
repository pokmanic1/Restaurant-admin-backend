import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
