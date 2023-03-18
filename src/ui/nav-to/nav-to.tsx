import React from 'react';
import {Link} from "react-router-dom";

import './style/nav-to.scss'

type NavToProps = {
    title: string,
    link: string
}

const NavTo = ({link, title}: NavToProps) => {
    return (
        <Link to={link}>
            <div className={'nav-to input-back'}>
                <span>{title}</span>
            </div>
        </Link>
    );
};

export default NavTo;