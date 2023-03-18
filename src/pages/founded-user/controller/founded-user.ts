import {GlobalEnv} from "../../../global/global.env";

import chel_img from '../../../assets/chel.png'

export class FoundedUserController {
    static getUser() {
        if(GlobalEnv.iS_DEV) {
            return FoundedUserController.getUserMock()
        }

        return FoundedUserController.getUserReal()
    }

    static getUserMock(): any {
        return {
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
        }
    }

    static getUserReal(): any {

    }
}