import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import AvatarUsername from '@/components/avatar-username/avatar-username';
import Product from '@/components/product/product';
import ModalAvatar from '@/components/modals/modal-avatar/modal-avatar';
import ModalAppId from '@/components/modals/modal-app-id/modal-app-id';
import ModalFullName from '@/components/modals/modal-full-name/modal-full-name';
import ModalTel from '@/components/modals/modal-tel/modal-tel';
import ModalGender from '@/components/modals/modal-gender/modal-gender';
import ModalBirthday from '@/components/modals/modal-birthday/modal-birthday';
import ModalAboutDesc from '@/components/modals/modal-about-desc/modal-about-desc';
import ModalChangePassword from '@/components/modals/modal-change-password/modal-change-password';
import defaultAvatarIcon from '../../../assets/imgs/default_avatar.jpg';
import axios from '../../../helpers/http-requests/axios';
import { getStringValue } from '@/config/userGender';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { updateUserDataAttr } from '@/redux/auth';
import useAccountCheck from '@/hooks/useAccountCheck';
import { useRouter } from 'next/router';

const Index = () => {
    let [isShowAvatarModal, setIsShowAvatarModal] = useState(false);
    let [isShowFullnameModal, setIsShowFullnameModal] = useState(false);
    let [isShowAppIdModal, setIsShowAppIdModal] = useState(false);
    let [isShowTelModal, setIsShowTelModal] = useState(false);
    let [isShowGenderModal, setIsShowGenderModal] = useState(false);
    let [isShowBirthdayModal, setIsShowBirthdayModal] = useState(false);
    let [isShowDescModal, setIsShowDescModal] = useState(false);
    let [isShowChangePasswordModal, setIsShowChangePasswordModal] = useState(false);
    let [selectedAvatar, setSelectedAvatar] = useState();
    let [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
    let [errors, setErrors] = useState({});
    let formDataRef = useRef();
    const dispatch = useDispatch();
    let router = useRouter();
    const authCheck = useAccountCheck();

    if (authCheck!= undefined && authCheck == false) {
        router.push('/auth/login')
    }

    const userMypageData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });

    function handleUpdateAuthUserData(key, value) {
        dispatch(updateUserDataAttr({
            key: key,
            value: value,
        }));
    }

    useEffect(function(){
        axios.get(`/provider/mypage`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(response => {
                if (response.status == 200) {
                    handleUpdateAuthUserData('avatar', response.data.avatar);
                }
            });
    }, []);

    function handleSubmitAvatar(avatarFile) {
        setSubmitBtnDisabled(true);
        setErrors({});
        formDataRef.current = new FormData();
        formDataRef.current.append('avatar', avatarFile);
        axios.post(`/provider/update-avatar`, formDataRef.current, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(response => {
                setSubmitBtnDisabled(false);
                formDataRef.current = null;
                if (response.status == 200) {
                    handleUpdateAuthUserData('avatar', response.data.avatar);
                    setIsShowAvatarModal(false);
                } else if (response.status == 422) {
                    setErrors(response.errors);
                }
            });
    }
    

    return (
        <div className={cl.mypage}>
            <TitleCenterBig title="Trang cá nhân"></TitleCenterBig>
            <div className={cl.wrap_avatar_box}>
                <div
                    className={cl.wrap_avatar}
                    onClick={()=>{
                        setIsShowAvatarModal(true);
                    }}
                >
                    <div className={cl.preview_img}>
                        <img src={userMypageData?.avatar
                                ? `${process.env.BACKEND_URL}/${userMypageData.avatar}`
                                : defaultAvatarIcon.src}></img>
                    </div>
                    <div className={cl.icon}>
                        <i className="fas fa-camera"></i>
                    </div>
                </div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowAppIdModal(true);
                }}
            >
                <label className='label label-block'>App ID</label>
                <div className={cl.info_item_content_bold}>{userMypageData?.app_id}</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowFullnameModal(true);
                }}
            >
                <label className='label label-block'>Họ tên</label>
                <div className={cl.info_item_content_bold}>{userMypageData?.full_name}</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div className={`${cl.info_item_box} ${cl.disable}`}>
                <label className='label label-block'>Email</label>
                <div className={cl.info_item_content_bold}>{userMypageData?.email}</div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowTelModal(true);
                }}
            >
                <label className='label label-block'>Số điện thoại</label>
                <div className={cl.info_item_content_bold}>{userMypageData?.tel}</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowGenderModal(true);
                }}
            >
                <label className='label label-block'>Giới tính</label>
                <div className={cl.info_item_content_bold}>{getStringValue(userMypageData?.gender)}</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowBirthdayModal(true);
                }}
            >
                <label className='label label-block'>Ngày sinh</label>
                <div className={cl.info_item_content_bold}>{userMypageData?.birthday ? userMypageData.birthday : 'Chưa cung cấp'}</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowDescModal(true);
                }}
            >
                <label className='label label-block'>Giới thiệu</label>
                <div className={cl.info_item_content}>{userMypageData?.description ? userMypageData.description : 'Chưa cung cấp'}</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowChangePasswordModal(true);
                }}
            >
                <label className='label label-block'>Đổi mật khẩu</label>
                <div className={cl.info_item_content_bold}>**********</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>

            <TitleLeftBig
                title="Người theo dõi"
                style={{paddingTop: '20px', paddingBottom: '5px'}}
            ></TitleLeftBig>
            <div>
                <AvatarUsername></AvatarUsername>
                <AvatarUsername></AvatarUsername>
                <AvatarUsername></AvatarUsername>
            </div>

            <TitleLeftBig
                title="Các trọ đăng tuyển"
                style={{paddingTop: '20px'}}
            ></TitleLeftBig>
            <div>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>

            <ModalAvatar
                isShowModal={isShowAvatarModal}
                onClose={()=>{
                    setIsShowAvatarModal(false);
                }}
                onSubmit={()=>{
                    handleSubmitAvatar(selectedAvatar);
                }}
                selectedAvatar={selectedAvatar}
                setSelectedAvatar={setSelectedAvatar}
                submitBtnDisabled={submitBtnDisabled}
                errors={errors}
                defaultAvatar={
                    userMypageData?.avatar
                        ? `${process.env.BACKEND_URL}/${userMypageData?.avatar}`
                        : defaultAvatarIcon.src
                }
            />
            <ModalAppId
                isShowModal={isShowAppIdModal}
                onClose={()=>{
                    setIsShowAppIdModal(false);
                }}
                value={userMypageData?.app_id}
                onChange={(value)=>{
                    console.log(value)
                }}
                onSubmit={()=>{
                    
                }}
            />
            <ModalFullName
                isShowModal={isShowFullnameModal}
                onClose={()=>{
                    setIsShowFullnameModal(false);
                }}
            />
            <ModalTel
                isShowModal={isShowTelModal}
                onClose={()=>{
                    setIsShowTelModal(false);
                }}
            />
            <ModalGender
                isShowModal={isShowGenderModal}
                onClose={()=>{
                    setIsShowGenderModal(false);
                }}
            />
            <ModalBirthday
                isShowModal={isShowBirthdayModal}
                onClose={()=>{
                    setIsShowBirthdayModal(false);
                }}
            />
            <ModalAboutDesc
                isShowModal={isShowDescModal}
                onClose={()=>{
                    setIsShowDescModal(false);
                }}
            />
            <ModalChangePassword
                isShowModal={isShowChangePasswordModal}
                onClose={()=>{
                    setIsShowChangePasswordModal(false);
                }}
            />
        </div>
    );
}

export default Index;
