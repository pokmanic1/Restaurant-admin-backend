import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler.js';
import { NotFoundError } from 'rxjs';


type AuthInput = { username: string, password: string };

const users = [
    {
        username: 'admin1',
        password: "fmn923jfahgnvbq43bv"
    },
    {
        username: 'admin2',
        password: "lcaomsciwqnvuebnvss"
    },
    {
        username: 'admin3',
        password: "plqwkafnbfsuwn"
    },
    {
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



}
