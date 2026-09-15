import { Controller ,Post } from '@nestjs/common';

type AuthInput={username:string,password:string};

@Controller('auth')
export class AuthController {

    @Post()
    login(input:AuthInput){
        
    }

}
