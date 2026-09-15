import { Injectable } from '@nestjs/common';


type AuthInput = { username: string, password: string };

const users=[
    {
        username:'admin1',
        password:"fmn923jfahgnvbq43bv"
    },
    {
        username:'admin2',
        password:"lcaomsciwqnvuebnvss"
    },
    {
        username:'admin3',
        password:"plqwkafnbfsuwn"
    },
    {
        username:'admin4',
        password:"hdfqfhn9jdgsq4dgdf"
    },
]


@Injectable()
export class AuthService {

    async login(input: AuthInput): Promise<any> {

    }



}
