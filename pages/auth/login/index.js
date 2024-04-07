import React, { useState } from 'react';
import cl from './login.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import InputPassword from '@/components/inputs/input-password/input-password';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import Link from 'next/link';

const Index = () => {

    const [loginData, setLoginData] = useState({});
    const [errors, setErrors] = useState({});

    function handleSetLoginData(key, value) {
        let newLoginData = {...loginData};
        newLoginData[key] = value;
        setLoginData(newLoginData);
    }

    function handleSubmitLogin() {
        
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
                <div className='err-msg'></div>
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
                />
            </div>
            <div className={cl.others}>
                <Link href="/auth/reset-password">Quên mật khẩu</Link>
                <Link href="/auth/register">Đăng ký tài khoản</Link>
            </div>
        </div>
    );
}

export default Index;
