import React, {useContext, useRef, useState} from 'react';

import {FindUserContext} from "../../find-user";

import './style/load-img.scss'

import bg from '../../../../assets/dashed-bg.png'

const LoadImg = () => {

    const fuContext = useContext(FindUserContext)

    const ref = useRef<HTMLInputElement>()

    const [imgUrl, setImgUrl] = useState<any>(null)

    const onChange = (e) => {
        const tgt = e.target || window.event.srcElement
        const files = tgt.files;

        console.log(e.target.value)

        const fs = new FileReader()
        fs.onload = () => {
            fuContext.img = e.target.value
            setImgUrl(fs.result)
        }
        fs.readAsDataURL(files[0])
    }

    const chooseImage = () => {
        console.log('click image field')
        ref.current.click()
    }

    return (
        <div className={'load-img'}>
            <div className={'load-img__img'}
                onClick={chooseImage}
            >
                {
                    imgUrl
                        ? <div className={'load-img__real-img'}>
                            <img src={imgUrl} alt={'url'}/>
                        </div>
                        : <div className={'load-img__template'}
                            style={{
                                backgroundImage: `url(${bg})`
                            }}
                        >
                            <div className={'load-img__info'}>
                                <span>Добавьте фотографию</span>
                            </div>
                        </div>

                }
            </div>
            <input ref={ref} type={"file"} accept={'image/png, image/jpeg'} onChange={onChange}/>
        </div>
    );
};

export default LoadImg;