import React from 'react';

import './style/logo.scss'

import logo_img from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logo_img} alt={'logo'}/>
        </div>
    );
};

export default Logo;