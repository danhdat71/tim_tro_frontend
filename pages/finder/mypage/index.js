import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import React, { useEffect, useState } from 'react';
import cl from './index.module.css';
import defaultAvatarIcon from '../../../assets/imgs/default_avatar.jpg';
import ModalAvatar from '@/components/modals/modal-avatar/modal-avatar';
import ModalAppId from '@/components/modals/modal-app-id/modal-app-id';
import ModalFullName from '@/components/modals/modal-full-name/modal-full-name';
import ModalTel from '@/components/modals/modal-tel/modal-tel';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import VoterBar from '@/components/voter-bar/voter-bar';
import { Pagination } from '@mui/material';
import ModalGender from '@/components/modals/modal-gender/modal-gender';
import ModalBirthday from '@/components/modals/modal-birthday/modal-birthday';
import ModalAboutDesc from '@/components/modals/modal-about-desc/modal-about-desc';
import ModalChangePassword from '@/components/modals/modal-change-password/modal-change-password';
import Product from '@/components/product/product';

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

    function handleSubmitAvatar()
    {
        if (selectedAvatar) {
            console.log('post', selectedAvatar.preview)
        }
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
                        <img src={defaultAvatarIcon.src}></img>
                    </div>
                    <div className={cl.icon}>
                        <i className="fas fa-camera"></i>
                    </div>
                </div>
            </div>
            <div className={cl.wrap_action_btns}>
                <ButtonIcon
                    text="Theo dõi"
                    icon={<i className="far fa-heart"></i>}
                ></ButtonIcon>
                <ButtonIcon
                    text="Chặn"
                    icon={<i className="fas fa-ban"></i>}
                ></ButtonIcon>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowAppIdModal(true);
                }}
            >
                <label className='label label-block'>App ID</label>
                <div className={cl.info_item_content_bold}>nguyenvana0112</div>
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
                <div className={cl.info_item_content_bold}>Nguyễn Văn A</div>
                <div className={cl.info_item_icon}>
                    <i className="fal fa-edit"></i>
                </div>
            </div>
            <div className={`${cl.info_item_box} ${cl.disable}`}>
                <label className='label label-block'>Email</label>
                <div className={cl.info_item_content_bold}>nguyenvana@yopmail.com</div>
            </div>
            <div
                className={cl.info_item_box}
                onClick={()=>{
                    setIsShowTelModal(true);
                }}
            >
                <label className='label label-block'>Số điện thoại</label>
                <div className={cl.info_item_content_bold}>0123123123</div>
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
                <div className={cl.info_item_content_bold}>Chưa cung cấp</div>
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
                <div className={cl.info_item_content_bold}>Chưa cung cấp</div>
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
                <div className={cl.info_item_content}>
                    <div>Giới thiệu các phòng trọ của bạn</div>
                    <div>Giới thiệu các phòng trọ của bạn</div>
                    <div>Giới thiệu các phòng trọ của bạn</div>
                    <div>Giới thiệu các phòng trọ của bạn</div>
                </div>
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
            />
            <ModalAppId
                isShowModal={isShowAppIdModal}
                onClose={()=>{
                    setIsShowAppIdModal(false);
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
