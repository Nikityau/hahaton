import React, {useContext, useEffect} from 'react';

import {AuthContext} from "../../auth";

import './style/error.scss'

type ErrorProps = {
    is: boolean
}

const Error = ({is}:ErrorProps) => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log(authContext)
    }, [authContext])

    return (
        <>
            {
                is
                    ?
                    <div className={'error'}>
                        <span>
                            { authContext.error }
                        </span>
                    </div>
                    : ''
            }
        </>
    );
};

export default Error;