import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import React, { useEffect, useRef, useState } from 'react';
import cl from './reset-password.module.css';
import axios from '../../../helpers/http-requests/axios';
import AlertError from '@/components/alerts/alert-error/alert-error';
import { useRouter } from 'next/router';

const Index = () => {

    let [alertError, setAlertError] = useState({isShow: false});
    let [errors, setErrors] = useState({});
    let [userIdentifier, setUserIdentifier] = useState('');
    let [disableSubmit, setDisableSubmit] = useState(false);
    let timeoutError = useRef();
    let router = useRouter();

    useEffect(function(){
        timeoutError.current = setTimeout(function(){
            clearTimeout(timeoutError.current);
            setAlertError({isShow:false});
        }, 3000);

        return () => {
            clearTimeout(timeoutError.current);
        }
    }, [alertError]);

    function handleResetPassword() {
        setDisableSubmit(true);
        setErrors({});
        axios.post('/auth/forgot-password', {
            user_identifier: userIdentifier
        })
            .then(function(response) {
                setDisableSubmit(false);
                if (response.status == 404) {
                    setAlertError({
                        message: 'Số điện thoại hoặc địa chỉ email không đúng',
                        sub: 'Vui lòng kiểm tra lại'
                    });
                } else if (response.status == 422) {
                    setErrors(response.errors);
                } else if (response?.status == 200) {
                    router.push({
                        pathname: '/auth/verify-otp-change-password',
                        query: { 
                            'user_identifier' : userIdentifier,
                        },
                    })
                }
            });
    }

    return (
        <div className={cl.reset_password}>
            <TitleCenterBig
                title="Quên mật khẩu"
            />
            <div className='form-group'>
                <label className='label label-block'>Vui lòng cung cấp email hoặc số điện thoại của bạn <span>*</span></label>
                <div className={cl.wrap_input}>
                    <input
                        className={`input ${cl.input}`}
                        onChange={(e)=>{
                            setUserIdentifier(e.target.value)
                        }}
                    ></input>
                    <div className='err-msg'>{errors?.user_identifier}</div>
                </div>
                <div className={cl.wrap_button}>
                    <ButtonIcon
                        backgroundColor="#009489"
                        color="white"
                        text="Gửi OTP"
                        icon={<i className="fal fa-paper-plane"></i>}
                        onClick={()=>{
                            handleResetPassword();
                        }}
                        disabled = {disableSubmit}
                    />
                </div>
                <AlertError
                    message={alertError?.message}
                    sub="Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu"
                    isShow={alertError.isShow}
                ></AlertError>
            </div>
        </div>
    );
}

export default Index;
