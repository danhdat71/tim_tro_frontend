import React, { useEffect, useRef, useState } from 'react';
import cl from './login.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import InputPassword from '@/components/inputs/input-password/input-password';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import Link from 'next/link';
import axios from '../../../helpers/http-requests/axios';
import AlertError from '@/components/alerts/alert-error/alert-error';
import { useRouter } from 'next/navigation';
import useAccountCheck from '@/hooks/useAccountCheck';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/redux/auth';
import { ACTIVE, INACTIVE } from '@/config/userStatus';

const Index = () => {
    const [loginData, setLoginData] = useState({});
    const [errors, setErrors] = useState({});
    const [alertError, setAlertError] = useState({
        isShow: false,
    });
    const [isDisabledLogin, setIsDisabledLogin] = useState(false);
    const timeoutAlertError = useRef();
    let router = useRouter();
    const dispatch = useDispatch();
    let authCheck = useAccountCheck();

    if (authCheck) {
        router.push('/');
    }

    useEffect(function(){
        timeoutAlertError.current = setTimeout(function(){
            setAlertError({
                isShow: false,
            });
        }, 3000);

        return () =>{
            clearTimeout(timeoutAlertError.current);
        }
    }, [alertError]);

    function handleSetLoginData(key, value) {
        let newLoginData = {...loginData};
        newLoginData[key] = value;
        setLoginData(newLoginData);
    }

    function handleSetUserLogin(userData) {
        dispatch(setUserData(userData));
    }

    function handleSubmitLogin() {
        setErrors({});
        setIsDisabledLogin(true);
        axios.post(`/auth/login`, loginData)
            .then(response => {
                if (response.status == 422) {
                    window.scrollTo(0, 0)
                    setErrors(response.errors);
                }
                if (response.status == 400) {
                    setAlertError({
                        isShow: true,
                        message:response.message
                    });
                }
                if (response.status == 200) {
                    // Case user is not active
                    if (response.data.status == INACTIVE) {
                        router.push({
                            pathname: '/auth/verify-otp',
                            query: { 
                                user_identifier : loginData.user_identifier,
                            },
                        })
                    } else if (response.data.status == ACTIVE) {
                        let accessToken = response.data.access_token;
                        localStorage.setItem('access_token', accessToken);
                        handleSetUserLogin(response.data);
                        router.push({
                            pathname: '/',
                        });
                    }                    
                }
                setIsDisabledLogin(false);
            });
    }

    return (
        <div className={cl.login}>
            <TitleCenterBig
                title="Đăng nhập"
            />
            <div className='form-group'>
                <label className='label label-block'>Email hoặc số điện thoại <span>*</span></label>
                <input
                    className='w-100 input'
                    onChange={(e)=>{
                        handleSetLoginData('user_identifier', e.target.value);
                    }}
                ></input>
                <div className='err-msg'>{errors?.user_identifier}</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu <span>*</span></label>
                <InputPassword
                    className='w-100 input'
                    onChange={(value)=>{
                        handleSetLoginData('password', value);
                    }}
                    value={loginData?.password}
                />
                <div className='err-msg'>{errors?.password}</div>
            </div>
            <div className={`form-group ${cl.remember}`}>
                <div className='label-group'>
                    <input
                        type='checkbox'
                        id='remember'
                        className='radio-md'
                        onChange={(e)=>{
                            handleSetLoginData('is_remember', e.target.checked);
                        }}
                    ></input>
                    <label htmlFor='remember'>Ghi nhớ đăng nhập</label>
                </div>
            </div>
            <div className={cl.wrap_button}>
                <ButtonIcon
                    text="Đăng nhập"
                    icon={<i className="fal fa-sign-in-alt"></i>}
                    backgroundColor="rgb(0, 148, 137)"
                    color="white"
                    onClick={()=>{
                        handleSubmitLogin();
                    }}
                    disabled={isDisabledLogin}
                />
            </div>
            <div className={cl.others}>
                <Link href="/auth/reset-password">Quên mật khẩu</Link>
                <Link href="/auth/register">Đăng ký tài khoản</Link>
            </div>
            <AlertError
                message={alertError?.message}
                sub="Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu"
                isShow={alertError.isShow}
            ></AlertError>
        </div>
    );
}

export default Index;
