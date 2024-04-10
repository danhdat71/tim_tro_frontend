import React, { useState } from 'react';
import cl from './register.module.css';
import InputPassword from '@/components/inputs/input-password/input-password';
import ModalReviewRegister from '@/components/modals/modal-review-register/modal-review-register';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import InputGroup from '@/components/inputs/input-group/input-group';
import axios from '../../../helpers/http-requests/axios';
import { FINDER, PROVIDER } from '../../../config/userType';
import { useRouter } from 'next/navigation'
import useAccountCheck from '@/hooks/useAccountCheck';

const Register = () => {

    let [registerData, setRegisterData] = useState({
        user_type: FINDER,
    });
    let [isShowModalReview, setIsShowModalReview] = useState(false);
    let [errors, setErrors] = useState({});
    let [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
    let router = useRouter();
    let authCheck = useAccountCheck();

    if (authCheck) {
        router.push('/');
    }

    function handleSetRegisterData(key, value) {
        let newRegisterData = {...registerData};
        newRegisterData[key] = value;
        setRegisterData(newRegisterData);
    };

    function handleSubmitCheckValidate() {
        setErrors({});
        axios.post(`/auth/register?check=true`, registerData)
            .then(response => {
                if (response.status == 422) {
                    window.scrollTo(0, 0)
                    setErrors(response.errors);
                }
                if (response.status == 200) {
                    setIsShowModalReview(true);
                }
            });
    }

    function handleSubmitRegist() {
        axios.post(`/auth/register`, registerData)
            .then(response => {
                if (response.status == 422) {
                    window.scrollTo(0, 0)
                    setErrors(response.errors);
                }
                if (response.status == 200) {
                    let email = registerData.email;
                    setSubmitBtnDisabled(false);
                    setIsShowModalReview(false);
                    setRegisterData({
                        user_type: FINDER,
                    });

                    router.push({
                        pathname: '/auth/verify-otp',
                        query: { 
                            user_identifier : email,
                        },
                    })
                }
            });
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
                    errMsg={errors.full_name}
                    value={registerData?.full_name}
                ></InputGroup>
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
                        errMsg={errors?.email}
                        value={registerData?.email}
                    ></InputGroup>
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
                        errMsg={errors?.tel}
                        value={registerData?.tel}
                    ></InputGroup>
                </div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Loại tài khoản</label>
                <div className='label-group'>
                    <input
                        type='radio'
                        className='radio-md'
                        checked={registerData?.user_type == FINDER}
                        id='finder'
                        onChange={()=>{
                            handleSetRegisterData('user_type', FINDER);
                        }}
                        name='user_type'
                    ></input>
                    <label htmlFor='finder'>Tìm thuê</label>
                </div>
                <div className='label-group'>
                    <input
                        type='radio'
                        className='radio-md'
                        id='provider'
                        checked={registerData?.user_type == PROVIDER}
                        onChange={()=>{
                            handleSetRegisterData('user_type', PROVIDER);
                        }}
                        name='user_type'
                    ></input>
                    <label htmlFor='provider'>Cho thuê</label>
                </div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu <span>*</span></label>
                <InputPassword
                    className={`${cl.input} input`}
                    onChange={(value)=>{
                        handleSetRegisterData('password', value);
                    }}
                    value={registerData?.password}
                />
                <div className='err-msg'>{errors?.password}</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Nhắc lại mật khẩu <span>*</span></label>
                <InputPassword
                    className={`${cl.input} input`}
                    onChange={(value)=>{
                        handleSetRegisterData('re_password', value);
                    }}
                    value={registerData?.re_password}
                />
                <div className='err-msg'>{errors?.re_password}</div>
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
                    onClick={()=>{
                        // setIsShowModalReview(true);
                        handleSubmitCheckValidate();
                    }}
                />
            </div>
            <ModalReviewRegister
                isShowModal = {isShowModalReview}
                onClose={()=>{
                    setIsShowModalReview(false);
                }}
                registData = {registerData}
                onSubmit={()=>{
                    setSubmitBtnDisabled(true);
                    handleSubmitRegist();
                }}
                submitBtnDisabled={submitBtnDisabled}
            ></ModalReviewRegister>
        </form>
    );
}

export default Register;
