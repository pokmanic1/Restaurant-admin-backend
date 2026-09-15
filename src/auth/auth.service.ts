import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler.js';
import { NotFoundError } from 'rxjs';
import { JwtModule } from '@nestjs/jwt';

type AuthInput = { username: string, password: string };
type userPayload={id:string,username: string};
const users = [
    {
        id:"5234f320kf",
        username: 'admin1',
        password: "fmn923jfahgnvbq43bv"
    },
    {
        id:"cvsf43vs",
        username: 'admin2',
        password: "lcaomsciwqnvuebnvss"
    },
    {
        id:"vxv34fsdf",
        username: 'admin3',
        password: "plqwkafnbfsuwn"
    },
    {
        id:"fsf2fh3121",
        username: 'admin4',
        password: "hdfqfhn9jdgsq4dgdf"
    },
]


@Injectable()
export class AuthService {

    async login(input: AuthInput): Promise<any> {
        const finduser = users.find(user => user.username === input.username)
        if (!finduser) {
            throw new UnauthorizedException("Nu exista user cu acest username")
        }
        if (finduser?.password !== input.password) {
            throw new UnauthorizedException("Parola e gresita")
        }




    }



    async Token(input:userPayload):Promise<any>{

        const payload={
            id:input.id,
            usersname:input.username
        }

    }



}
