import React, { useState } from 'react';
import cl from './register.module.css';
import InputPassword from '@/components/inputs/input-password/input-password';
import ModalReviewRegister from '@/components/modals/modal-review-register/modal-review-register';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import InputGroup from '@/components/inputs/input-group/input-group';

const Register = () => {

    let [registerData, setRegisterData] = useState({
        user_type: 1,
    });

    function handleSetRegisterData(key, value) {
        let newRegisterData = {...registerData};
        newRegisterData[key] = value;
        setRegisterData(newRegisterData);
    };

    function handleSubmitRegister() {
        
    }

    return (
        <form className={cl.form}>
            <TitleCenterBig
                title="Đăng ký tài khoản"
            />
            <div className='form-group'>
                <label className='label label-block'>
                    Họ tên <span>*</span>
                </label>
                <InputGroup
                    min="5"
                    max="50"
                    type="text"
                    onChange={(value)=>{
                        handleSetRegisterData('full_name', value);
                    }}
                ></InputGroup>
                <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
            </div>
            <div className={cl.name_group}>
                <div className='form-group'>
                    <label className='label label-block'>Email <span>*</span></label>
                    <InputGroup
                        min="5"
                        max="100"
                        type="text"
                        onChange={(value)=>{
                            handleSetRegisterData('email', value);
                        }}
                    ></InputGroup>
                    <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Điện thoại <span>*</span></label>
                    <InputGroup
                        min="5"
                        max="100"
                        type="number"
                        onChange={(value)=>{
                            handleSetRegisterData('tel', value);
                        }}
                    ></InputGroup>
                    <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
                </div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Loại tài khoản</label>
                <div className='label-group'>
                    <input
                        type='radio'
                        className='radio-md'
                        checked
                        id='finder'
                        onClick={(e)=>{
                            handleSetRegisterData('user_type', 1);
                        }}
                    ></input>
                    <label htmlFor='finder'>Tìm trọ</label>
                </div>
                <div className='label-group'>
                    <input
                        type='radio'
                        className='radio-md'
                        id='provider'
                        onClick={(e)=>{
                            handleSetRegisterData('user_type', 0);
                        }}
                    ></input>
                    <label htmlFor='provider'>Cho thuê trọ</label>
                </div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu <span>*</span></label>
                <InputPassword
                    className={`${cl.input} input`}
                    onChange={(value)=>{
                        handleSetRegisterData('password', value);
                    }}
                />
                <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Nhắc lại mật khẩu <span>*</span></label>
                <InputPassword
                    className={`${cl.input} input`}
                    onChange={(value)=>{
                        handleSetRegisterData('re_password', value);
                    }}
                />
                <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
            </div>
            <div className={cl.buttons}>
                {/* <button type='button' className={cl.button}>
                    <span className={cl.button_text}>Đăng ký ngay</span>
                    <span><i className="fal fa-check"></i></span>
                </button> */}
                <ButtonIcon
                    text="Xác nhận"
                    backgroundColor="#00995b"
                    border="1px solid #00995b"
                    color="white"
                    icon={<i className="far fa-check"></i>}
                />
            </div>
            {/* <ModalReviewRegister></ModalReviewRegister> */}
        </form>
    );
}

export default Register;
