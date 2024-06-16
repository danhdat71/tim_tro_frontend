import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import AvatarUsername from '@/components/avatar-username/avatar-username';
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
import { useRouter } from 'next/router';
import AlertSuccess from '@/components/alerts/alert-success/alert-success';
import { isValidDateYmd } from '@/helpers/dateHelper';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';
import { get } from '@/helpers/http-requests/fetch';
import EmptyList from '@/components/empty-list/empty-list';
import { handleChangeRouterParam } from '@/helpers/routerHelper';
import { isNumeric } from '@/helpers/numberHelper';

export async function getServerSideProps(context) {
    let accessToken = getAccessTokenByContext(context);
    let data = {};
    let {
        page,
    } = context.query;

    // Get following
    let followings = await get(`/finder/followings?page=${page}`, accessToken);
    data.followings = followings.data;

    return {
        props: { data },
    }
}

const Index = ({data}) => {
    let [isShowAvatarModal, setIsShowAvatarModal] = useState(false);
    let [isShowFullnameModal, setIsShowFullnameModal] = useState(false);
    let [isShowAppIdModal, setIsShowAppIdModal] = useState(false);
    let [isShowTelModal, setIsShowTelModal] = useState(false);
    let [isShowGenderModal, setIsShowGenderModal] = useState(false);
    let [isShowBirthdayModal, setIsShowBirthdayModal] = useState(false);
    let [isShowDescModal, setIsShowDescModal] = useState(false);
    let [isShowChangePasswordModal, setIsShowChangePasswordModal] = useState(false);
    let [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false);
    let [selectedAvatar, setSelectedAvatar] = useState();
    let [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
    let [dataInfoItem, setDataInfoItem] = useState('');
    let [dataPassword, setDataInfoPassword] = useState({});
    let [errors, setErrors] = useState({});
    let formDataRef = useRef();
    let timeoutRef = useRef();
    const dispatch = useDispatch();
    let router = useRouter();

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
        timeoutRef.current = setTimeout(function(){
            setIsShowAlertSuccess(false);
            clearTimeout(timeoutRef.current);
        }, 3000);

        return () => {
            clearTimeout(timeoutRef.current);
        }
    }, [isShowAlertSuccess]);

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
                if (response?.status == 200) {
                    handleUpdateAuthUserData('avatar', response.data.avatar);
                    setIsShowAvatarModal(false);
                    setIsShowAlertSuccess(true);
                } else if (response.status == 422) {
                    setErrors(response.errors);
                } else if (response?.message == 'Unauthenticated.') {
                    router.push('/auth/login');
                }
            });
    }
    
    function handleSubmitInfoItem(paramName, value, callBackCloseModal) {
        setSubmitBtnDisabled(true);
        setErrors({});
        formDataRef.current = new FormData();
        formDataRef.current.append(paramName, value);
        axios.post(`/provider/update-item-info`, formDataRef.current, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(response => {
                setSubmitBtnDisabled(false);
                formDataRef.current = null;
                if (response?.status == 200) {
                    handleUpdateAuthUserData(paramName, response.data[paramName]);
                    callBackCloseModal(false);
                    setIsShowAlertSuccess(true);
                } else if (response.status == 422) {
                    setErrors(response.errors);
                } else if (response?.message == 'Unauthenticated.') {
                    router.push('/auth/login');
                }
            });
    }

    function handleSubmitPassword(dataPassword, callBackCloseModal) {
        setSubmitBtnDisabled(true);
        setErrors({});
        formDataRef.current = new FormData();
        formDataRef.current.append('old_password', dataPassword?.old_password ? dataPassword.old_password : '');
        formDataRef.current.append('password', dataPassword?.password ? dataPassword.password : '');
        formDataRef.current.append('re_password', dataPassword?.re_password ? dataPassword.re_password : '');
        formDataRef.current.append('logout_other', dataPassword?.logout_other ? dataPassword.logout_other : false);

        axios.post(`/provider/update-item-info`, formDataRef.current, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(response => {
                setSubmitBtnDisabled(false);
                formDataRef.current = null;
                if (response?.status == 200) {
                    callBackCloseModal(false);
                    setIsShowAlertSuccess(true);
                    setDataInfoPassword({});
                } else if (response.status == 422) {
                    setErrors(response.errors);
                } else if (response?.message == 'Unauthenticated.') {
                    router.push('/auth/login');
                }
            });
    }

    function handleUnfollow(payload) {
        axios.post(`/finder/follow`, payload, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response?.status == 200) {
                    handleChangeRouterParam(router, 'page', 1, '/finder/mypage');
                }
            });
    }

    function handleRenderFollowingList() {
        if (data?.followings?.data?.length > 0) {
            return data?.followings?.data?.map(function (val, index) {
                return (
                    <AvatarUsername
                        key={index}
                        createdAt={val.created_at}
                        fullName={val.full_name}
                        href={`/provider?app_id=${val.app_id}`}
                        avatar={val.avatar}
                        onUnfollowClick={()=>{
                            handleUnfollow({
                                follower_receive_id: val.id,
                                action: 0,
                            });
                        }}
                    />
                );
            });
        } else {
            return <div className={cl.follow_empty}>Hiện chưa có theo dõi nào.</div>
        }
    }

    function handleRenderPaginate() {
        return data?.followings?.links?.map(function (val, index) {
            if (isNumeric(val.label)) {
                return (
                    <div
                        key={index}
                        className={`handle-item ${val.label == router.query.page || (router.query.page == null && val.label == 1) ? 'active' : ''}`}
                        onClick={()=>{
                            handleChangeRouterParam(router, 'page', val.label, '/finder/mypage')
                        }}
                    ><span>{val.label}</span></div>
                );
            } else if (val.label == '...') {
                return (
                    <div
                        key={index}
                        className='handle-item dot'
                    >...</div>
                );
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
                        <img
                            src={userMypageData?.avatar
                                ? `${process.env.BACKEND_URL}/${userMypageData.avatar}`
                                : defaultAvatarIcon.src}
                            alt={userMypageData?.avatar
                                ? `${process.env.BACKEND_URL}/${userMypageData.avatar}`
                                : defaultAvatarIcon.src}
                        ></img>
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
                    setDataInfoItem(userMypageData?.app_id);
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
                    setDataInfoItem(userMypageData?.full_name);
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
                    setDataInfoItem(userMypageData?.tel);
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
                    setDataInfoItem(userMypageData?.gender);
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
                    setDataInfoItem(userMypageData?.birthday);
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
                    setDataInfoItem(userMypageData?.description);
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
                title="Đang theo dõi"
                style={{paddingTop: '20px', paddingBottom: '5px'}}
            ></TitleLeftBig>
            <div>
                {handleRenderFollowingList()}
            </div>
            <div className={`${cl.paginate_bar} paginate-md`}>
                {handleRenderPaginate()}
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
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowAppIdModal(false);
                    setErrors({});
                }}
                onChange={(value)=>{
                    setDataInfoItem(value);
                }}
                onSubmit={()=>{
                    handleSubmitInfoItem('app_id', dataInfoItem, setIsShowAppIdModal);
                }}
                errMsg={errors}
                value={dataInfoItem}
            />
            <ModalFullName
                isShowModal={isShowFullnameModal}
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowFullnameModal(false);
                    setErrors({});
                }}
                onChange={(value)=>{
                    setDataInfoItem(value);
                }}
                onSubmit={()=>{
                    handleSubmitInfoItem('full_name', dataInfoItem, setIsShowFullnameModal);
                }}
                errMsg={errors}
                value={dataInfoItem}
            />
            <ModalTel
                isShowModal={isShowTelModal}
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowTelModal(false);
                    setErrors({});
                }}
                onChange={(value)=>{
                    setDataInfoItem(value);
                }}
                onSubmit={()=>{
                    handleSubmitInfoItem('tel', dataInfoItem, setIsShowTelModal);
                }}
                errMsg={errors}
                value={dataInfoItem}
            />
            <ModalGender
                isShowModal={isShowGenderModal}
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowGenderModal(false);
                    setErrors({});
                }}
                onChange={(e)=>{
                    setDataInfoItem(e.target.value);
                }}
                onSubmit={()=>{
                    handleSubmitInfoItem('gender', dataInfoItem, setIsShowGenderModal);
                }}
                errMsg={errors}
                value={dataInfoItem ? dataInfoItem : userMypageData?.gender}
            />
            <ModalBirthday
                isShowModal={isShowBirthdayModal}
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowBirthdayModal(false);
                    setErrors({});
                }}
                onChange={(value)=>{
                    setDataInfoItem(value);
                }}
                onSubmit={()=>{
                    handleSubmitInfoItem('birthday', dataInfoItem, setIsShowBirthdayModal);
                }}
                errMsg={errors}
                value={dataInfoItem && isValidDateYmd(dataInfoItem)
                    ? dataInfoItem
                    : userMypageData?.birthday
                }
            />
            <ModalAboutDesc
                isShowModal={isShowDescModal}
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowDescModal(false);
                    setErrors({});
                }}
                onChange={(value)=>{
                    setDataInfoItem(value);
                }}
                onSubmit={()=>{
                    handleSubmitInfoItem('description', dataInfoItem, setIsShowDescModal);
                }}
                errMsg={errors}
                value={dataInfoItem ? dataInfoItem : ''}
            />
            <ModalChangePassword
                isShowModal={isShowChangePasswordModal}
                submitBtnDisabled={submitBtnDisabled}
                onClose={()=>{
                    setIsShowChangePasswordModal(false);
                    setDataInfoPassword({});
                    setErrors({});
                }}
                onChange={(value)=>{
                    let newDataPassword = {...dataPassword};
                    newDataPassword['old_password'] = value['old_password'];
                    newDataPassword['password'] = value['password'];
                    newDataPassword['re_password'] = value['re_password'];
                    newDataPassword['logout_other'] = value['logout_other'];
                    setDataInfoPassword(newDataPassword);
                }}
                onSubmit={()=>{
                    handleSubmitPassword(dataPassword, setIsShowChangePasswordModal);
                }}
                errMsg={errors}
                value={dataPassword}
            />
            <AlertSuccess
                message="Cập nhật thông tin thành công !"
                isShow={isShowAlertSuccess}
            ></AlertSuccess>
        </div>
    );
}

export default Index;
