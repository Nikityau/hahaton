import {nanoid} from "nanoid";
import axios from "axios";

import {GlobalEnv} from "../../../global/global.env";

export class FindUserController {
    static findUser(img): Promise<boolean> {
        if(GlobalEnv.iS_DEV) {
            return FindUserController.findUserMock(img)
        }

        return FindUserController.findUserReal(img)
    }

    static async findUserMock(img): Promise<boolean> {
        if(!img) return false

        localStorage.setItem('queueId', nanoid())

        return true
    }

    static async findUserReal(img): Promise<boolean> {
        try {
            const formData = new FormData()
            console.log('find',img)
            formData.append('photo', img)
            const res = await axios.post(`${GlobalEnv.URL_REQUEST}/api/search-user`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if(res.status == 201) {
                localStorage.setItem('queueId', res.data.queueId)

                return true
            }

            localStorage.removeItem('queueId')

            return false

        } catch (args:any) {
            return false
        }
    }
}