import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";

import {AppRoutes} from "../../app-router/app-router";

import {FindUserController} from "./controller/find-user";

import NavTo from "../../ui/nav-to/nav-to";
import Button from "../../ui/button/button";
import LoadImg from "./components/load-img/load-img";

import './style/find-user.scss'
import PhotoError from "./components/photo-error/photo-error";

const contextValue = {
    img: null
}

export const FindUserContext = React.createContext(contextValue)

const FindUser = () => {

    const nav = useNavigate()

    const fuContext = useContext(FindUserContext)

    const onClick = () => {
        console.log('send photo')
        const res = FindUserController.findUser(fuContext.img)

        if(!res) {


            return
        }

        nav(AppRoutes.foundedUser,{ replace: true })
    }

    return (
        <FindUserContext.Provider value={contextValue}>
            <div className={'find-user'}>
                <NavTo title={'Добавить человека'} link={AppRoutes.createUser}/>
                <div className={'find-user__container'}>
                    <LoadImg/>
                    <Button title={'Отправить'} onClick={onClick}/>
                </div>
                <PhotoError/>
            </div>
        </FindUserContext.Provider>
    );
};

export default FindUser;