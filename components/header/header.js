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
            <Link href='/'>
                <div className={cl.left}>
                    <img src={logoImg.src} alt='logo'></img>
                </div>
            </Link>
            <div className={cl.right}>
                <Link href='/finder/loves' className={cl.menu_button}>
                    <span className={cl.count}>1</span>
                    <span><i className="fal fa-heart"></i></span>
                </Link>
                <Link href='/notifications' className={cl.menu_button}>
                    <span className={cl.count}>1</span>
                    <span><i className="fal fa-bell"></i></span>
                </Link>
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
