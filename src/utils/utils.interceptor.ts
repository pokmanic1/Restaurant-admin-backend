import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable ,map } from 'rxjs';

@Injectable()
export class UtilsInterceptor<T> implements NestInterceptor {
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const response=context.switchToHttp().getResponse();
    const statusCode=response.statusCode??200;






    return next.handle().pipe(
      map((data:T)=>({
        statusCode,
        message:'succees',
        data
      }))
    )
  
  }
}
