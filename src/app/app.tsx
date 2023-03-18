import React from "react";

import AppRouter from "../app-router/app-router";
import Logo from "../ui/logo/logo";

import './style/app.scss'
import '../assets/fonts/feature-mono'
import '../assets/fonts/inter'

import bg_img from '../assets/bg.png'

const App = () => {
    return (
        <div className={'app'}
            style={{
                backgroundImage: `url(${bg_img})`
            }}
        >
            <Logo/>
            <AppRouter />
        </div>
    );
};

export default App;