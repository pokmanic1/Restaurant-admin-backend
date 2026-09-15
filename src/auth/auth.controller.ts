import { Controller ,Post,Body } from '@nestjs/common';

type AuthInput={username:string,password:string};

@Controller('auth')
export class AuthController {

    @Post('login')
    login(@Body() input:AuthInput){
        return {input:input}
    }

}
