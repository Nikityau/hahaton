import React from 'react';

import './style/similar.scss'

import {nanoid} from "nanoid";

type SimilarProps = {
    data: any
}
const Similar = ({data}: SimilarProps) => {
    return (
        <div className={'similar'}>
            <div className={'similar__title'}>
                <span>Похожие люди:</span>
            </div>
            <div className={'similar__users'}>
                {
                    data.map(user => (
                        <div
                            key={nanoid()}
                            className={'similar__user'}
                        >
                            <div className={'similar__user-photo'}>
                                <img src={user.photo} alt={'photo'}/>
                            </div>
                            <div className={'similar__user-name'}>
                                <span>{ user.fio }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Similar;