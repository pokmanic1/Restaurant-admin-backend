import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtModule } from '@nestjs/jwt';

const JWT_SECRET="fnciwej9c032nf0dnau091ej"

@Module({
    imports: [
    JwtModule.register({
      global: true,
      secret: JWT_SECRET??'fnoewcjiwemcopq',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
