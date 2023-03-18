import React, {useEffect, useState} from 'react';

import {AppRoutes} from "../../app-router/app-router";
import {FoundedUserController} from "./controller/founded-user";

import NavTo from "../../ui/nav-to/nav-to";

import User from "./components/user/user";
import Similar from "./components/similar/similar";

import './style/founded-user.scss'

const FoundedUser = () => {

    const [user, setUser] = useState()
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        (() => {
            const res = FoundedUserController.getUser()
            setUser(res.user)
            setSimilar(res.similar)
        })()
    }, [])

    return (
        <div className={'founded-user'}>
            <NavTo title={'Добавить человека'} link={AppRoutes.createUser}/>

            <div className={'founded-user__container'}>
                <div className={'founded-user__founded'}>
                    <User data={user}/>
                    <Similar data={similar}/>
                </div>
            </div>
        </div>
    );
};

export default FoundedUser;