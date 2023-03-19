import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AppRoutes} from "../../app-router/app-router";

import {FindUserController} from "./controller/find-user";

import NavTo from "../../ui/nav-to/nav-to";
import Button from "../../ui/button/button";
import LoadImg from "./components/load-img/load-img";
import PhotoError from "./components/photo-error/photo-error";

import './style/find-user.scss'

const contextValue = {
    img: null
}

export const FindUserContext = React.createContext(contextValue)

const FindUser = () => {

    const nav = useNavigate()

    const fuContext = useContext(FindUserContext)

    const [isError, setIsError] = useState<boolean>(false)

    const onClick = async () => {
        console.log('send photo')
        const res = await FindUserController.findUser(fuContext.img)

        if(!res) {
            setError(true)
            return
        }

        fuContext.img = null
        nav(AppRoutes.foundedUser,{ replace: true })
    }

    const setError = (is: boolean) => {
        setIsError(is)
    }

    return (
        <FindUserContext.Provider value={contextValue}>
            <div className={'find-user'}>
                <NavTo title={'Добавить человека'} link={AppRoutes.createUser}/>
                <div className={'find-user__container'}>
                    <LoadImg/>
                    <Button title={'Отправить'} onClick={onClick}/>
                </div>
                <PhotoError is={isError} cb={setError}/>
            </div>
        </FindUserContext.Provider>
    );
};

export default FindUser;