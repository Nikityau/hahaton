import {nanoid} from "nanoid";

import {GlobalEnv} from "../../../global/global.env";

type ReqResponse = {
    type: string,
    title: string
}

const NonZeroInputError: ReqResponse = {
    type: "ERROR",
    title: "поля не должны быть пустыми"
}

const OkResponse: ReqResponse = {
    type: "OK",
    title: "OK"
}

export class AuthController {
    static auth(login:string, password:string): ReqResponse {
        console.log(login, password)
        return AuthController.authMock(login, password)
        /*if(GlobalEnv.iS_DEV) {
            return AuthController.authMock(login, password)
        }

        return AuthController.authReal(login, password)*/
    }

    static authMock(login:string, password:string): ReqResponse {
        if(login.length == 0 || password.length == 0) {
            localStorage.removeItem('token')

            return NonZeroInputError
        }

        localStorage.setItem('token', `not-real-${nanoid()}`)

        return OkResponse
    }
    static authReal(login:string, password:string): ReqResponse {
        // ...very hard auth

        if(login.length == 0 || password.length == 0) {
            return NonZeroInputError
        }

        return OkResponse
    }
}