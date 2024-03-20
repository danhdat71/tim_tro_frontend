import React from 'react';
import cl from './register.module.css';
import InputPassword from '@/components/inputs/input-password/input-password';
import ModalReviewRegister from '@/components/modals/modal-review-register/modal-review-register';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';

const Register = () => {
    return (
        <form className={cl.form}>
            <TitleCenterBig
                title="Đăng ký tài khoản"
            />
            <div className={cl.name_group}>
                <div className='form-group'>
                    <label className='label label-block'>
                        Họ <span>*</span>
                    </label>
                    <input type='text' className={`input ${cl.input}`}></input>
                    <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>
                        Tên <span>*</span>
                    </label>
                    <input type='text' className={`input ${cl.input}`}></input>
                    <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
                </div>
            </div>
            <div className={cl.name_group}>
                <div className='form-group'>
                    <label className='label label-block'>Email <span>*</span></label>
                    <input type='text' className={`input ${cl.input}`}></input>
                    <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Điện thoại <span>*</span></label>
                    <input type='tel' className={`input ${cl.input}`}></input>
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
                        name='user_type'
                        id='finder'
                        value="2"
                    ></input>
                    <label htmlFor='finder'>Tìm trọ</label>
                </div>
                <div className='label-group'>
                    <input
                        type='radio'
                        className='radio-md'
                        name='user_type'
                        id='provider'
                        value="1"
                    ></input>
                    <label htmlFor='provider'>Cho thuê trọ</label>
                </div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu <span>*</span></label>
                <InputPassword
                    className={`${cl.input} input`}
                />
                <div className='err-msg'>Vui lòng điền thông tin bên trên</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Nhắc lại mật khẩu <span>*</span></label>
                <InputPassword
                    className={`${cl.input} input`}
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
