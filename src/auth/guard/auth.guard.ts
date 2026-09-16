import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService) { }
  async canActivate(context: ExecutionContext,): Promise<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies?.acces_token;

    if (!token) {
      throw new UnauthorizedException('Nu sa gasit tokenul de autorizare')
    }
    try {
      const tokenPayload = await this.jwtService.verifyAsync(token);
      console.log('-------------------------------------------')
      console.log('-------------------------------------------')
      console.log('-------------------------------------------')
      console.log('-------------------------------------------')
      console.log('-------------------------------------------')
      console.log(tokenPayload)


      return true;
    } catch (err) {
      throw new UnauthorizedException("Lipseste tokenul de autoriare")
    }
  }


}
