import {GlobalEnv} from "../../../global/global.env";

import chel_img from '../../../assets/chel.png'
import axios from "axios";

export class FoundedUserController {
    static async getUser():Promise<any> {
        if(GlobalEnv.iS_DEV) {
            return await FoundedUserController.getUserMock()
        }

        return await FoundedUserController.getUserReal()
    }

    static async getUserMock():Promise<any> {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    user: {
                        photo: chel_img,
                        fio: 'Иванов Пётр Дмитриевич',
                        email: 'ivanoww@yandex.ru',
                        date_beth: '10.01.1998',
                        city: 'Ростов-на-Дону',
                        inn: '79543607186'
                    },
                    similar: [
                        {
                            photo: chel_img,
                            fio: 'Михайлюк Дмитрий Хакатонович',
                            email: 'ivanoww@yandex.ru',
                            date_beth: '10.01.1998',
                            city: 'Ростов-на-Дону',
                            inn: '79543607186'
                        },
                        {
                            photo: chel_img,
                            fio: 'Иванов Пётр Дмитриевич',
                            email: 'ivanoww@yandex.ru',
                            date_beth: '10.01.1998',
                            city: 'Ростов-на-Дону',
                            inn: '79543607186'
                        },
                        {
                            photo: chel_img,
                            fio: 'Иванов Пётр Дмитриевич',
                            email: 'ivanoww@yandex.ru',
                            date_beth: '10.01.1998',
                            city: 'Ростов-на-Дону',
                            inn: '79543607186'
                        }
                    ]
                })
            }, 3000)
        })
    }

    static async getUserReal():Promise<any> {
        try {
            const qId = localStorage.getItem('queueId')

            const res = await axios.get(`${GlobalEnv.URL_REQUEST}/api/get-info/${qId}`)

            if(res.status == 200) {
                return {
                    user: res.data,
                    similar: res.data.similar
                }
            }

            return {
                user: {},
                similar: []
            }
        } catch (args: any) {
            return {
                user: {},
                similar: []
            }
        }
    }
}