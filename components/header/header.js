"use client";

import React from 'react';
import cl from './header.module.css';
import logoImg from '../../assets/imgs/logo.png';
import ToggleHeader from './toggle-header/toggle-header';
import { toggleMenuHeader } from '@/redux/features/header';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Header = () => {

    const dispatch = useDispatch();

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    return (
        <div className={cl.wrap_header}>
            <div className={cl.left}>
                <div className={cl.brand_logo}>
                    <Link href='/'><img src={logoImg.src} alt='logo'></img></Link>
                </div>
                <div className={cl.fast_menu}>
                    <div className={`${cl.fast_menu_item} ${cl.active}`}><Link href=''>Tìm phòng trọ</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Tìm văn phòng</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Tìm nhà nguyên căn</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Tìm ở ghép</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Bảng giá trọ</Link></div>
                    <div className={cl.fast_menu_item}><Link href=''>Tin tức</Link></div>
                </div>
            </div>

            <div className={cl.right}>
                <Link href='/finder/loves' className={cl.menu_button}>
                    <span className={cl.count}>1</span>
                    <span><i className="fal fa-heart"></i></span>
                </Link>
                <Link href='/notifications' className={cl.menu_button}>
                    <span className={cl.count}>1</span>
                    <span><i className="fal fa-bell"></i></span>
                </Link>
                {/* <Link href='/auth/login' className={cl.menu_button}>
                    <span>Đăng nhập</span>
                </Link>
                <Link href='/auth/register' className={`${cl.menu_button} ${cl.register}`}>
                    <span>Đăng ký</span>
                </Link> */}
                <div
                    className={cl.menu_button}
                    onClick={()=>{handleSetEnableHeader(true)}}
                >
                    <i className="far fa-bars"></i>
                </div>
            </div>
            <ToggleHeader></ToggleHeader>
        </div>
    );
}

export default Header;
