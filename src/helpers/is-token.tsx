import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";

import {AppRoutes} from "../app-router/app-router";
import {GlobalEnv} from "../global/global.env";

const IsToken = ({children}: React.PropsWithChildren) => {

    useEffect(() => {
        console.log('token validate helper')

        return () => {
            console.log('/token validate helper')
        }
    }, [])

    const isValid = (): boolean => {

        return isValidMock()
        /*if(GlobalEnv.iS_DEV) {
            return isValidMock()
        }

        return isValidReal()*/
    }

    const isValidMock = (): boolean => {
        if(localStorage.getItem('token')) {
            return true
        }

        return false
    }

    const isValidReal = (): boolean => {
        // ...very hard logic

        return false
    }

    return (
        <>
            {
                isValid()
                    ? children
                    : <Navigate to={AppRoutes.auth}/>
            }
        </>
    );
};

export default IsToken;