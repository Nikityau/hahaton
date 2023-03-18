import {nanoid} from "nanoid";

import {GlobalEnv} from "../../../global/global.env";

export class FindUserController {
    static findUser(img): boolean {
        if(GlobalEnv.iS_DEV) {
            return FindUserController.findUserMock(img)
        }

        return FindUserController.findUserReal(img)
    }

    static findUserMock(img): boolean {
        if(!img) return false

        localStorage.setItem('queueId', nanoid())

        return true
    }

    static findUserReal(img): boolean {
        return false
    }
}