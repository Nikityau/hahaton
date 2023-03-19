import React from 'react';
import {Link} from "react-router-dom";

import {AppRoutes} from "../../../../app-router/app-router";

import './style/user.scss'

type UserProps = {
    data: any
}

const User = ({data}: UserProps) => {

    const parseDate = (date):string => {
        const [y, m, d] = date.split(' ')[0].split('-')

        return `${d}.${m}.${y}`
    }

    const getAge = (date: string): number => {
        if(!date) {
            return 0
        }

        const [d,m,y] = date.split('.').map(v => Number.parseInt(v))

        const dateCurr = new Date(Date.now())
        const dateBirth = new Date(y,m,d)

        const year = dateCurr.getFullYear() - dateBirth.getFullYear()

        return year
    }

    return (
        <div className={'user'}>
            <div className={'user__title'}>
                <span>На фотографии распознан:</span>
            </div>
            <div className={'user__wrapper'}>
                <div className={'user__photo'}>
                    <img src={data?.url} alt={'photo'}/>
                </div>
                <div className={'user-data'}>
                    <div className={'user__data-keys'}>
                        <div className={'user__data-k'}>
                            <span>Совпадение:</span>
                        </div>
                        <div className={'user__data-k'}>
                            <span>ФИО:</span>
                        </div>
                        <div className={'user__data-k'}>
                            <span>Дата рождения:</span>
                        </div>
                        <div className={'user__data-k'}>
                            <span>Город:</span>
                        </div>
                        <div className={'user__data-k'}>
                            <span>ИНН:</span>
                        </div>
                        <div className={'user__data-k'}>
                            <span>Email:</span>
                        </div>
                    </div>
                    <div className={'user__data-values'}>
                        <div className={'user__data-v'}>
                            <span>{data?.percent} %</span>
                        </div>
                        <div className={'user__data-v'}>
                            <span>{data?.fio}</span>
                        </div>
                        <div className={'user__data-v user_data-age'}>
                            <span>{parseDate(data?.date_beth)}</span>
                            <span>({getAge(parseDate(data?.date_beth))} лет)</span>
                        </div>
                        <div className={'user__data-v'}>
                            <span>{data?.city}</span>
                        </div>
                        <div className={'user__data-v'}>
                            <span>{data?.inn}</span>
                        </div>
                        <div className={'user__data-v'}>
                            <span>{data?.email}</span>
                        </div>
                    </div>
                </div>
                <Link className={'go-back'} to={AppRoutes.findUser}>
                    <div className={'go-back__div input-back'}>
                        <span>Назад</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default User;