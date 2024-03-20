import React from 'react';
import cl from './login.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import InputPassword from '@/components/inputs/input-password/input-password';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import Link from 'next/link';

const Index = () => {
    return (
        <div className={cl.login}>
            <TitleCenterBig
                title="Đăng nhập"
            />
            <div className='form-group'>
                <label className='label label-block'>Email hoặc số điện thoại <span>*</span></label>
                <input className='w-100 input'></input>
                <div className='err-msg'>Vui lòng điền thông tin</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Email hoặc số điện thoại <span>*</span></label>
                <InputPassword
                    className='w-100 input'
                />
                <div className='err-msg'>Vui lòng điền thông tin</div>
            </div>
            <div className={cl.wrap_button}>
                <ButtonIcon
                    text="Đăng nhập"
                    icon={<i className="fal fa-sign-in-alt"></i>}
                    backgroundColor="rgb(0, 148, 137)"
                    color="white"
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
