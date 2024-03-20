import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import React from 'react';
import cl from './reset-password.module.css';

const Index = () => {
    return (
        <div className={cl.reset_password}>
            <TitleCenterBig
                title="Quên mật khẩu"
            />
            <div className='form-group'>
                <label className='label label-block'>Vui lòng cung cấp email hoặc số điện thoại của bạn <span>*</span></label>
                <div className={cl.wrap_input}>
                    <input className={`input ${cl.input}`}></input>
                    <div className='err-msg'>Vui lòng nhập email hoặc số điện thoại</div>
                </div>
                <div className={cl.wrap_button}>
                    <ButtonIcon
                        backgroundColor="#009489"
                        color="white"
                        text="Gửi OTP"
                        icon={<i className="fal fa-paper-plane"></i>}
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Index;
