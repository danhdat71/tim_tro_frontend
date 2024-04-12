import React, { useEffect, useState } from 'react';
import Modal from '../modal/modal';
import InputPassword from '@/components/inputs/input-password/input-password';

const ModalChangePassword = (props) => {
    let {
        isShowModal,
        onClose,
        onChange,
        onSubmit,
        errMsg,
        submitBtnDisabled,
        value,
    } = props;

    let [dataPassword, setDataPassword] = useState({});

    useEffect(function(){
        setDataPassword(value);
    }, [value]);

    function handleChangePassword(key, value) {
        let newDataPassword = {...dataPassword};
        newDataPassword[key] = value;
        setDataPassword(newDataPassword);
        onChange(newDataPassword);
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Đổi mật khẩu"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu cũ <span>*</span></label>
                <InputPassword
                    className='input'
                    onChange={(value)=>{
                        handleChangePassword('old_password', value);
                    }}
                    value={dataPassword?.old_password}
                ></InputPassword>
                <div className='err-msg'>{errMsg?.old_password}</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu mới <span>*</span></label>
                <InputPassword
                    className='input'
                    onChange={(value)=>{
                        handleChangePassword('password', value);
                    }}
                    value={dataPassword?.password}
                ></InputPassword>
                <div className='err-msg'>{errMsg?.password}</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Nhập lại mật khẩu mới <span>*</span></label>
                <InputPassword
                    className='input'
                    onChange={(value)=>{
                        handleChangePassword('re_password', value);
                    }}
                    value={dataPassword?.re_password}
                ></InputPassword>
                <div className='err-msg'>{errMsg?.re_password}</div>
            </div>
            <div className='form-group'>
                <div className='label-group'>
                    <input 
                        type='checkbox'
                        className='checkbox-md'
                        id='logout-ther'
                        onChange={(e)=>{
                            handleChangePassword('logout_other', e.target.checked);
                        }}
                        checked={dataPassword?.logout_other}
                    ></input>
                    <label htmlFor='logout-ther'>Đăng xuất khỏi thiết bị khác</label>
                </div>
            </div>
        </Modal>
    );
}

export default ModalChangePassword;
