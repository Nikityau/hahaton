import React, {useContext, useRef, useState} from 'react';
import cn from 'classnames'

import NavTo from "../../ui/nav-to/nav-to";
import {AppRoutes} from "../../app-router/app-router";

import './style/create-user.scss'
import bg from "../../assets/dashed-bg.png";
import Button from "../../ui/button/button";

const context = {
    fio: '',
    date: '',
    city: 'Ростов-на-Дону',
    inn: '',
    email: ''
}

import bg_b from '../../assets/black-bg.png'
import close from '../../assets/crosshair.png'
import {GlobalEnv} from "../../global/global.env";
import axios from "axios";

export const CreatUserContext = React.createContext(context)

const CreateUser = () => {

    const context = useContext(CreatUserContext)

    const ref = useRef<HTMLInputElement>()

    const [tabs, setTabs] = useState<'1' | '2'>("1")
    const [isError, setIsError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('Error')

    const [imgUrl, setImgUrl] = useState<any>(null)

    const changeTab = (tab) => {
        if (imgUrl) {
            setTabs(tab)
            return
        }

        setIsError(true)
        setErrorText('Добавьте изображение')
    }

    const onChange = (e) => {
        const tgt = e.target || window.event.srcElement
        const files = tgt.files;

        console.log(e.target.value)

        const fs = new FileReader()
        fs.onload = () => {
            setImgUrl(fs.result)
        }
        fs.readAsDataURL(files[0])
    }

    const chooseImage = () => {
        console.log('click image field')
        ref.current.click()
    }

    const closeError = () => {
        setIsError(false)
    }

    const onContinue = () => {
        if (imgUrl) {
            setTabs('2')

            return
        }

        setIsError(true)
        setErrorText('Добавьте изображение')
    }

    const islZero = (str) => {
        if(str.length == 0) return true
        return false
    }

    const emptyContext = () => {
        context.inn = ''
        context.fio = ''
        context.email = ''
        context.city = ''
        context.date = ''
    }

    const onSendClick = () => {
        if(GlobalEnv.iS_DEV) {
            emptyContext()
            setTabs('1')
            setImgUrl(null)
            setIsError(true)
            setErrorText('Отправлено')

            return
        }

        if(islZero(context.city) || islZero(context.fio) ||
            islZero(context.inn) || islZero(context.date) ||
            islZero(context.email)
        ) {
            setIsError(true)
            setErrorText('Все поля должны быть заполнены')

            return;
        }

        const ipf = document.querySelector('#create-user-file') as HTMLInputElement
        console.log('file',ipf.files[0])

        const formData = new FormData()
        formData.append('photo', ipf.files[0])
        formData.append('fio', context.fio)
        formData.append('inn', context.inn)
        formData.append('dateBeth', context.date)
        formData.append('city', context.city)
        formData.append('ema', context.email)

        const req = async () => {
           try {
               const res = await axios.post(`${GlobalEnv.URL_REQUEST}/api/users`, formData, {
                   headers: {
                       "Content-Type": "multipart/form-data"
                   }
               })

               if(res.status == 201) {
                   emptyContext()
                   setTabs('1')
                   setImgUrl(null)
                   setIsError(true)
                   setErrorText('Отправлено')

                   return
               }

               setIsError(true)
               setErrorText('Ашибка')
           } catch (err: Error) {
               setIsError(true)
               setErrorText(err.message)
           }
        }

        req()
    }

    return (
        <CreatUserContext.Provider value={context}>
            <div className={'create-user'}>
                <NavTo title={"Вычислить по АйПи"} link={AppRoutes.findUser}/>
                <div className={'create-user__container'}>
                    <div className={cn(
                        'create-user__tabs',
                        {
                            'create-user__tabs_1': tabs == '1',
                            'create-user__tabs_2': tabs == '2',
                        }
                    )}>
                        <div className={'create-user__tab tab_1'} onClick={() => changeTab('1')}>
                            <span>1</span>
                        </div>
                        <div className={'create-user__line'}></div>
                        <div className={'create-user__tab'} onClick={() => changeTab('2')}>
                            <span>2</span>
                        </div>
                    </div>

                    <div className={cn(
                        'create-user__load-img',
                        {
                            'load-tab': tabs == '1'
                        }
                    )}>
                        {
                            imgUrl
                                ? <div className={'create-user__real-img'}>
                                    <img src={imgUrl} alt={'url'}/>
                                </div>
                                : <div className={'create-user__template'}
                                       style={{
                                           backgroundImage: `url(${bg})`
                                       }}
                                       onClick={chooseImage}
                                >
                                    <div className={'create-user__info'}>
                                        <span>Добавьте фотографию</span>
                                    </div>
                                </div>

                        }
                        <input ref={ref} id={'create-user-file'} type={'file'} onChange={onChange}/>
                        <Button title={'Продолжить'} onClick={onContinue}/>
                    </div>
                    <div className={cn(
                        'create-user__user-form',
                        {
                            'this-form-user': tabs == '2'
                        }
                    )}>
                        <div className={'create-user__user-fio'}>
                            <span>ФИО:</span>
                            <div className={'create-user__in input-back'}>
                                <input className={'input-back'} type={'text'}
                                       onChange={(e) => {
                                           context.fio = e.target.value
                                       }}
                                />
                            </div>
                        </div>
                        <div className={'create-user__user-fio'}>
                            <span>ДР:</span>
                            <div className={'create-user__in input-back'}>
                                <input className={'input-back'} type={'date'}
                                       onChange={(e) => {
                                           context.date = e.target.value
                                       }}
                                />
                            </div>
                        </div>
                        <div className={'create-user__user-fio'}>
                            <span>Гор.:</span>
                            <div className={'create-user__in input-back'}>
                                <input className={'input-back'} type={'text'} value={'Ростов-на-Дону'}
                                       onChange={(e) => {
                                           context.city = e.target.value
                                       }}
                                />
                            </div>
                        </div>
                        <div className={'create-user__user-fio'}>
                            <span>ИНН:</span>
                            <div className={'create-user__in input-back'}>
                                <input className={'input-back'} type={'number'} placeholder={'number'}
                                       onChange={(e) => {
                                           context.inn = e.target.value
                                       }}
                                />
                            </div>
                        </div>
                        <div className={'create-user__user-fio'}>
                            <span>Email:</span>
                            <div className={'create-user__in input-back'}>
                                <input className={'input-back'} type={'email'} placeholder={'email'}
                                       onChange={(e) => {
                                           context.email = e.target.value
                                       }}
                                />
                            </div>
                        </div>
                        <Button title={'Отправить'} onClick={onSendClick}/>
                    </div>
                </div>
                <div className={cn(
                    'create-user__error',
                    {
                        'is-error': isError
                    }
                )}>

                    <div className={'create-user__error-e'}
                         style={{
                             backgroundImage: `url(${bg_b})`
                         }}
                    >
                        <div className={'create-user__error-c'} onClick={closeError}>
                            <img src={close}/>
                        </div>
                        <span>
                            {errorText}
                        </span>
                    </div>
                </div>
            </div>
        </CreatUserContext.Provider>
    );
};

export default CreateUser;