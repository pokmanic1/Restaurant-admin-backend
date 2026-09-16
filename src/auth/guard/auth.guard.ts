import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService:JwtService){}
  async canActivate(context: ExecutionContext,): Promise<boolean> {
    
    const request=context.switchToHttp().getRequest<Request>();
    const token=request.cookies;

    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log(request);

    return true;
  }


}
