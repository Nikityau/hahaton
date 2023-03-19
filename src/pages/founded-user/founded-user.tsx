import React, {useEffect, useState} from 'react';

import {AppRoutes} from "../../app-router/app-router";
import {FoundedUserController} from "./controller/founded-user";

import NavTo from "../../ui/nav-to/nav-to";

import User from "./components/user/user";
import Similar from "./components/similar/similar";

import './style/founded-user.scss'

const FoundedUser = () => {

    const [user, setUser] = useState({})
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        queryUser()
    }, [])

    const queryUser = async () => {
        const res = await FoundedUserController.getUser()

        if('fio' in res.user) {
            setUser(res.user)
            setSimilar(res.similar)
        } else {
            setTimeout(() => {
                queryUser()
            }, 1000)
        }
    }

    return (
        <div className={'founded-user'}>
            <NavTo title={'Добавить человека'} link={AppRoutes.createUser}/>

            {
                'fio' in user
                    ? <div className={'founded-user__container'}>
                        <div className={'founded-user__founded'}>
                            <User data={user}/>
                            <Similar data={similar}/>
                        </div>
                    </div>
                    : <div className={'founded-user__loading'}>
                        <span>Загрузка...</span>
                    </div>
            }
        </div>
    );
};

export default FoundedUser;