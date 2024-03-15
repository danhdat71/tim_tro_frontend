"use client";

import React from 'react';
import cl from './header.module.css';
import logoImg from '../../assets/imgs/logo.png';
import ToggleHeader from './toggle-header/toggle-header';
import { toggleMenuHeader } from '@/redux/features/header';
import { useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    return (
        <div className={cl.wrap_header}>
            <div className={cl.left}>
                <img src={logoImg.src}></img>
            </div>
            <div className='right'>
                <div
                    className={cl.menu_button}
                    onClick={()=>{handleSetEnableHeader(true)}}
                >
                    <span>Menu</span>
                    <i className="far fa-bars"></i>
                </div>
            </div>
            <ToggleHeader></ToggleHeader>
        </div>
    );
}

export default Header;
