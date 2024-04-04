import React from 'react';
import cl from './finder-menu-items.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMenuHeader } from '@/redux/features/header';

const FinderMenuItems = () => {

    const dispatch = useDispatch();

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    return (
        <>
            <div className={cl.list_menu_item}>
                <Link
                    href="/"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-house-user"></i>
                        </div>
                        <div className={cl.text}>
                            Tìm phòng trọ
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-home"></i>
                        </div>
                        <div className={cl.text}>
                            Tìm nhà nguyên căn
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-users-medical"></i>
                        </div>
                        <div className={cl.text}>
                            Tìm ở ghép
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-list"></i>
                        </div>
                        <div className={cl.text}>
                            Bảng giá
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-rss-square"></i>
                        </div>
                        <div className={cl.text}>
                            Tin tức
                        </div>
                    </div>
                </Link>
                <Link
                    href=""
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-sign-out"></i>
                        </div>
                        <div className={cl.text}>
                            Đăng xuất
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default FinderMenuItems;
