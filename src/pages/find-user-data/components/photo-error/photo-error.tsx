import React from 'react';
import cn from 'classnames'

import './style/photo-error.scss'

import bg from '../../../../assets/black-bg.png'
import crosshair from '../../../../assets/crosshair.png'

type PhotoError = {
    is: boolean,
    cb: (is: boolean) => void
}

const PhotoError = ({cb,is}:PhotoError) => {

    const close = () => {
        cb(false)
    }

    return (
        <div className={cn(
            'photo-error',
            {
                'photo-error_error': is
            }
        )}>
            <div className={'photo-error__error'}
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
                <div className={'photo-error__text'}>
                    <div className={'photo-error__close'} onClick={close}>
                        <img src={crosshair} alt={'cr'}/>
                    </div>
                    <span>Не удалось добавить фотографию</span>
                </div>
            </div>
        </div>
    );
};

export default PhotoError;