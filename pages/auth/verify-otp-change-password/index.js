import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import AlertSuccess from '@/components/alerts/alert-success/alert-success';
import AlertError from '@/components/alerts/alert-error/alert-error';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import OtpInput from 'react-otp-input';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import { useRouter } from 'next/router';
import axios from '../../../helpers/http-requests/axios';

const Index = () => {
    const [otp, setOtp] = useState('');
    const [disabledResendButton, setDisabledResendButton] = useState(false);
    const [disabledVerifyButton, setDisabledVerifyButton] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [countDown, setCountDown] = useState(30);
    const timeInterval = useRef();
    const timeoutError = useRef();
    const timeoutSuccess = useRef();
    const timeoutRedirect = useRef();
    let router = useRouter();

    useEffect(function(){
        timeInterval.current = setInterval(function(){
            if (countDown >= 1) {
                setCountDown(countDown - 1);
            } else {
                setDisabledResendButton(false);
            }
        }, 1000);

        return () => {
            clearInterval(timeInterval.current);
        };
    }, [countDown]);

    useEffect(function(){
        timeoutError.current = setTimeout(function(){
            setError(null);
        }, 3000);

        return () => {
            clearInterval(timeoutError.current);
        }
    }, [error]);

    useEffect(function(){
        timeoutSuccess.current = setTimeout(function(){
            setSuccess(null);
        }, 3000);

        return () => {
            clearInterval(timeoutSuccess.current);
        }
    }, [success]);

    function handleResendOTP() {
        setDisabledResendButton(true);
        setCountDown(30 - 1);
        axios.post(`/auth/forgot-password`, {
            user_identifier : router.query.user_identifier
        })
        .then(response => {
        });
    }

    function handleVerifyOTP() {
        axios.post(`/auth/verify-otp-change-password`, {
            user_identifier : router.query.user_identifier,
            verify_otp: otp,
        })
        .then(response => {
            if (response.status == 400) {
                setError({
                    message: response.message,
                    sub: 'Nếu vẫn không xác nhận xin hãy thử gửi lại mã OTP'
                })
            }
            if (response.status == 200) {
                router.push({
                    pathname: '/auth/change-password',
                    query: { 
                        'token' : response.data.token,
                    },
                });
            }
        });
    }

    return (
        <div className={cl.verify}>
            <TitleCenterBig
                title="Xác nhận mã xác thực"
            />
            <div className={cl.desc}>Chúng tôi đã gửi mã xác thực đến email của bạn, xin vui lòng kiểm tra email.</div>
            <div className={cl.desc}>Mã xác thực gồm 4 chữ số.</div>
            <div className='form-group verify-input'>
                <OtpInput
                    value={otp}
                    onChange={(value)=>{
                        setOtp(value)
                    }}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <div className={cl.buttons}>
                <ButtonIcon
                    text="Gửi lại mã"
                    backgroundColor="rgb(133 133 133)"
                    border="1px solid rgb(133 133 133)"
                    color="white"
                    icon={disabledResendButton ? <span>({countDown})</span> : null}
                    onClick={()=>{
                        handleResendOTP();
                    }}
                    disabled={disabledResendButton}
                />
                <ButtonIcon
                    text="Xác nhận"
                    backgroundColor="#00995b"
                    border="1px solid #00995b"
                    color="white"
                    icon={<i className="far fa-check"></i>}
                    onClick={()=>{
                        handleVerifyOTP();
                    }}
                    disabled={disabledVerifyButton}
                />
            </div>
            <AlertSuccess
                message={success?.message}
                sub={success?.sub}
                isShow={success}
            ></AlertSuccess>
            <AlertError
                message={error?.message}
                sub={error?.sub}
                isShow={error}
            ></AlertError>
        </div>
    );
}

export default Index;
