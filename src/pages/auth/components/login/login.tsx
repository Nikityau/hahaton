import React, {useContext} from 'react';

import {AuthContext} from "../../auth";

import './style/login.scss'

const Login = () => {

    const authContext = useContext(AuthContext)

    const onChange = (e) => {
        authContext.login = e.target.value
    }

    return (
        <div className={'login input-back'}>
            <input
                type={'text'}
                placeholder={'логин'}
                onChange={onChange}
            />
        </div>
    );
};

export default Login;