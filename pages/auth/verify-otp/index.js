import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import cl from './verify-otp.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';

const VerifyOtp = () => {

    const [otp, setOtp] = useState('');
    
    function handleSetOTP(value) {
        setOtp(value);
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
                        handleSetOTP(value)
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
                    icon={<span>(59)</span>}
                />
                <ButtonIcon
                    text="Xác nhận"
                    backgroundColor="#00995b"
                    border="1px solid #00995b"
                    color="white"
                    icon={<i className="far fa-check"></i>}
                />
            </div>
        </div>
    );
}

export default VerifyOtp;
