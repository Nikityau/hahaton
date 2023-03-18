import React from 'react';

import './style/photo-error.scss'

import bg from '../../../../assets/black-bg.png'

type PhotoError = {
    is: boolean,
    cb: (is: boolean) => void
}

const PhotoError = ({cb,is}:PhotoError) => {

    return (
        <div className={'photo-error'}>

        </div>
    );
};

export default PhotoError;