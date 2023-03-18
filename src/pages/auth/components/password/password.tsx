import React, {useContext, useState} from 'react';

import {AuthContext} from "../../auth";

import './style/password.scss'

const Password = () => {

    const authContext = useContext(AuthContext)

    const [type, setType] = useState<'text' | 'password'>('password')

    const onChange = (e) => {
        authContext.password = e.target.value
    }

    const changeType = () => {
        if(type == 'text') {
            setType('password')

            return
        }

        setType('text')
    }

    return (
        <div className={'password input-back'}>
            <input
                type={type}
                placeholder={'пароль'}
                onChange={onChange}
            />
            <div className={'password__state'} onClick={changeType}>
                <span>
                    {
                        type == 'password'
                            ? 'показать'
                            : 'скрыть'
                    }
                </span>
            </div>
        </div>
    );
};

export default Password;