import { AuthGuard } from './guard/auth.guard.js';
import { AuthService } from './auth.service.js';
import { Controller ,Post,Body, UseGuards ,Get, Res } from '@nestjs/common';
import type { Response } from 'express';
type AuthInput={username:string,password:string};

@Controller('auth')
export class AuthController  {

    
    constructor(private authService:AuthService){}

    @Get('me')
    @UseGuards(AuthGuard)
    info(){
        return 'a'
    }

    @Post('login')
    async login(@Body() input:AuthInput , @Res({passthrough:true}) res:Response ){
       const result= await this.authService.login(input);

        res.cookie('acces_token',result.acessToken,{
            httpOnly:true,
            sameSite:'lax',
            secure:process.env.NODE_ENV==='production',
            maxAge:24 * 60 * 60 * 1000
        })
        
    }



}
