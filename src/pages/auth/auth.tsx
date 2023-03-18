import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'

import {AppRoutes} from "../../app-router/app-router";

import {AuthController} from "./controller/auth";

import Login from "./components/login/login";
import Password from "./components/password/password";
import Button from "../../ui/button/button";
import Error from "./components/error/error";

import './style/auth.scss'


const contextValue = {
    login: '',
    password: '',
    error: null
}

export const AuthContext = React.createContext(contextValue)

const Auth = () => {

    const [isError, setError] = useState<boolean>(false)

    const authContext = useContext(AuthContext)
    const nav = useNavigate()

    const onClickBtn = () => {
        const response = AuthController.auth(authContext.login, authContext.password)

        if(response.type == "ERROR") {
            authContext.error = response.title
            setError(true)

            return
        }

        setError(false)
        authContext.error = null


        nav(AppRoutes.findUser, { replace: true })
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <div className={'auth'}>
                <div className={'auth__form'}>
                    <div className={'auth__title'}>
                        <span>Авторизация</span>
                    </div>
                    <div className={'auth__data'}>
                        <Login/>
                        <Password/>
                    </div>
                    <Error is={isError}/>
                    <Button
                        title={'авторизоваться'}
                        onClick={onClickBtn}
                    />
                </div>
            </div>
        </AuthContext.Provider>
    );
};

export default Auth;