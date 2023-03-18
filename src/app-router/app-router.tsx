import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import IsToken from "../helpers/is-token";

import {Auth} from "../pages/auth";
import {CreateUser} from "../pages/create-user";
import {FindUser} from "../pages/find-user-data";
import {FoundedUser} from "../pages/founded-user";

export const AppRoutes = {
    auth: '/auth',
    createUser: '/crate-user',
    findUser: '/find-user',
    foundedUser: '/founded-user'
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoutes.auth} element={
                    <Auth/>
                }/>
                <Route path={AppRoutes.createUser} element={<IsToken> <CreateUser/> </IsToken>}/>
                <Route path={AppRoutes.findUser} element={<IsToken> <FindUser/> </IsToken>}/>
                <Route path={AppRoutes.foundedUser} element={<IsToken> <FoundedUser/> </IsToken>}/>


                <Route path={'*'} element={<Navigate to={AppRoutes.auth}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;