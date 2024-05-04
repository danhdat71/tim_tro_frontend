"use client";

import React, { useEffect } from 'react';
import cl from './header.module.css';
import logoImg from '../../assets/imgs/logo.png';
import ToggleHeader from './toggle-header/toggle-header';
import { toggleMenuHeader } from '@/redux/features/header';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import axios from '../../helpers/http-requests/axios';
import auth, { setUserData } from '@/redux/auth';
import { useAppSelector } from '@/redux/store';

const Header = () => {

    const dispatch = useDispatch();

    const authUserData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    function handleSetUserLogin(userData) {
        dispatch(setUserData(userData));
    }

    useEffect(function(){
        axios.get(`/auth/get-me`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response.status == 200) {
                    handleSetUserLogin(response.data);
                }
            });
    }, []);

    function renderIsAuthButton() {
        if (authUserData.status == undefined) {
            return (
                <>
                    <Link href='/auth/login' className={`${cl.menu_button} ${cl.login}`}>
                        <span>Đăng nhập</span>
                    </Link>
                    <Link href='/auth/register' className={`${cl.menu_button} ${cl.register}`}>
                        <span>Đăng ký</span>
                    </Link>
                </>
            )
        } else {
            return (
                <>
                    <Link href='/loves' className={cl.menu_button}>
                        <span className={cl.count}>{authUserData?.user_saved_products_count}</span>
                        <span><i className="fal fa-heart"></i></span>
                    </Link>
                    <Link href='/' className={cl.menu_button}>
                        <span className={cl.count}>1</span>
                        <span><i className="fal fa-bell"></i></span>
                    </Link>
                    <div
                        className={cl.menu_button}
                        onClick={()=>{handleSetEnableHeader(true)}}
                    >
                        <i className="far fa-bars"></i>
                    </div>
                </>
            );
        }
    }

    return (
        <div className={cl.wrap_header}>
            <div className={cl.left}>
                <div className={cl.brand_logo}>
                    <Link href='/'><img src={logoImg.src} alt='logo'></img></Link>
                </div>
                <div className={cl.fast_menu}>
                    <div className={`${cl.fast_menu_item} ${cl.active}`}><Link href=''>Phòng trọ</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Văn phòng</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Nhà nguyên căn</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Ở ghép</Link></div>
                    {/* <div className={cl.fast_menu_item}><Link href=''>Bảng giá trọ</Link></div> */}
                    <div className={cl.fast_menu_item}><Link href=''>Tin tức</Link></div>
                </div>
            </div>

            <div className={cl.right}>
                {renderIsAuthButton()}
            </div>
            <ToggleHeader></ToggleHeader>
        </div>
    );
}

export default Header;
