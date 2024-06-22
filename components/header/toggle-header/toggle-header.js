"use client";

import cl from './toggle-header.module.css';
import Link from 'next/link';
import ProviderMenuItems from '../provider-menu-items/provider-menu-items';
import FinderMenuItems from '../finder-menu-items/finder-menu-items';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleMenuHeader } from '@/redux/features/header';
import SubHeader from '../sub-header/sub-header';
import axios from '../../../helpers/http-requests/axios';
import { useRouter } from 'next/router';
import { setUserData } from '@/redux/auth';
import defaulAvatar from '@/assets/imgs/default_avatar.jpg';
import { PROVIDER } from '@/config/userType';
import { deleteCookie } from '@/helpers/http-requests/cookie';

const ToggleHeader = () => {

    const dispatch = useDispatch();
    const header = useAppSelector(function(state){
        return state.headerReducer.header;
    });
    const router = useRouter();
    const authUserData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });

    function handleEnableHeader() {
        return header.is_enable == true
            ? `${cl.toggle_header} ${cl.enable_header}`
            : `${cl.toggle_header}`;
    }

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    function handleSetUserLogin(userData) {
        dispatch(setUserData(userData));
    }

    function handleLogout() {
        axios.post(`/auth/logout`, 
        {
            fcm_token: localStorage.getItem('fcm_token')
        },
        {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response?.status == 200) {
                    handleSetEnableHeader(false);
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('fcm_token');
                    deleteCookie('access_token');
                    handleSetUserLogin({});
                    router.push({
                        pathname: '/auth/login',
                    });
                }
            });
    }

    function handleRenderMenuUserType() {
        if (authUserData?.user_type == PROVIDER) {
            return (
                <ProviderMenuItems
                    onLogout={()=>{
                        handleLogout();
                    }}
                ></ProviderMenuItems>
            )
        } else {
            return (
                <FinderMenuItems
                    onLogout={()=>{
                        handleLogout();
                    }}
                ></FinderMenuItems>
            );
        }
    }

    return (
        <div
            className={handleEnableHeader()}
        >
            <div
                className={cl.backdrop}
                onClick={()=>{
                    handleSetEnableHeader(false);
                }}
            ></div>
            <div className={cl.wrap_main_header}>
                <div className={cl.header_head}>
                    <div
                        className={cl.close_menu_btn}
                        onClick={()=>{
                            handleSetEnableHeader(false);
                        }}
                    >
                        <i className="fal fa-times"></i>
                    </div>
                    <div className={cl.person}>
                        <Link
                            onClick={()=>{
                                handleSetEnableHeader(false);
                            }}
                            href={authUserData?.user_type == PROVIDER ? '/provider/mypage' : '/finder/mypage'}
                            className={cl.person_avatar}
                        >
                            <img
                                loading='lazy'
                                src={authUserData?.avatar 
                                    ? `${process.env.BACKEND_URL}/${authUserData.avatar}`
                                    : defaulAvatar.src}
                                alt='avatar'
                            ></img>
                        </Link>
                        <div className={cl.little_info}>
                            <Link
                                onClick={()=>{
                                    handleSetEnableHeader(false);
                                }}
                                href={authUserData?.user_type == PROVIDER ? '/provider/mypage' : '/finder/mypage'}
                                className={cl.name}
                            >{authUserData?.full_name}</Link>
                            <div className={cl.person_link}>
                                <span>{authUserData?.app_id}</span>
                                <span className={cl.copy_clip}><i className="far fa-copy"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.header_main}>
                    {handleRenderMenuUserType()}
                </div>
                <div>
                    <SubHeader></SubHeader>
                </div>
            </div>
        </div>
    );
}

export default ToggleHeader;
