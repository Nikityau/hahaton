import React from 'react';

import './style/button.scss'

type ButtonProps = {
    title: string,
    onClick: () => void
}

const Button = ({title, onClick}: ButtonProps) => {
    return (
        <div className={'button-ui input-back'}
            onClick={onClick}
        >
            <span>{title}</span>
        </div>
    );
};

export default Button;