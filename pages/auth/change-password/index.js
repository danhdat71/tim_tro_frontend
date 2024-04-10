import InputPassword from '@/components/inputs/input-password/input-password';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import axios from 'axios';
import { useRouter } from 'next/router';
import AlertError from '@/components/alerts/alert-error/alert-error';
import { setUserData } from '@/redux/auth';
import { useDispatch } from 'react-redux';

const Index = () => {

    let router = useRouter();

    let [passwordData, setPasswordData] = useState({});
    let [errors, setErrors] = useState({});
    let [errorModal, setErrorModal] = useState({
        isShow: false,
    });
    let timeoutError = useRef();
    const dispatch = useDispatch();
    let [disableSubmit, setDisableSubmit] = useState(false);

    useEffect(function(){
        timeoutError.current = setTimeout(function(){
            setErrorModal({
                isShow: false,
            });
            clearTimeout(timeoutError.current);
        }, 3000);

        return () => {
            clearTimeout(timeoutError.current);
        }
    }, [errorModal]);

    function handleSetPasswordData(key, value) {
        let newPasswordData = {...passwordData};
        newPasswordData[key] = value;
        setPasswordData(newPasswordData);
    }

    function handleSetUserLogin(userData) {
        dispatch(setUserData(userData));
    }

    function handleSubmitChangePassword() {
        setErrors({});
        setDisableSubmit(true);
        passwordData.token = router.query.token;
        axios.post('/auth/change-password', passwordData)
            .then(function(response) {
                setDisableSubmit(false);
                if (response.status == 422) {
                    setErrors(response.errors);
                } else if (response.status == 200) {
                    let accessToken = response.data.access_token;
                    localStorage.setItem('access_token', accessToken);

                    handleSetUserLogin(response.data);
                    router.push('/');
                } else if (response.status == 400) {
                    setErrorModal({
                        message: response.message,
                        isShow: true,
                    })
                }
            });
    }

    return (
        <div>
            <TitleCenterBig
                title="Thay đổi mật khẩu"
            />
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu mới <span>*</span></label>
                <InputPassword
                    className='w-100 input'
                    onChange={(value)=>{
                        handleSetPasswordData('password', value);
                    }}
                    value={passwordData?.password}
                />
                <div className='err-msg'>{errors?.password}</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Nhập lại mật khẩu mới <span>*</span></label>
                <InputPassword
                    className='w-100 input'
                    onChange={(value)=>{
                        handleSetPasswordData('re_password', value);
                    }}
                    value={passwordData?.re_password}
                />
                <div className='err-msg'>{errors?.re_password}</div>
            </div>
            <div className={cl.wrap_button}>
                <ButtonIcon
                    text="Xác nhận"
                    icon={<i className="fal fa-check"></i>}
                    backgroundColor="rgb(0, 148, 137)"
                    color="white"
                    onClick={()=>{
                        handleSubmitChangePassword();
                    }}
                    disabled={disableSubmit}
                />
            </div>
            <AlertError
                message={errorModal?.message}
                isShow={errorModal.isShow}
            >

            </AlertError>
        </div>
    );
}

export default Index;
