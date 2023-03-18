import React from 'react';

import {AppRoutes} from "../../app-router/app-router";

import NavTo from "../../ui/nav-to/nav-to";

const FoundedUser = () => {
    return (
        <div className={'founded-user'}>
            <NavTo title={'Добавить человека'} link={AppRoutes.createUser}/>
        </div>
    );
};

export default FoundedUser;