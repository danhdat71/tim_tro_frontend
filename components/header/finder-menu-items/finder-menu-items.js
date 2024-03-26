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
                            <i className="fal fa-home"></i>
                        </div>
                        <div className={cl.text}>
                            Trang chủ
                        </div>
                    </div>
                </Link>
                <Link
                    href="/notifications"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-bell"></i>
                        </div>
                        <div className={cl.text}>
                            Thông báo
                        </div>
                        <div className={cl.counter}>
                            10
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
                            <i className="fal fa-search"></i>
                        </div>
                        <div className={cl.text}>
                            Tìm phòng trọ
                        </div>
                    </div>
                </Link>
                <Link
                    href="/finder/hostel-manager"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-list-ul"></i>
                        </div>
                        <div className={cl.text}>
                            Quản lý tìm trọ
                        </div>
                    </div>
                </Link>
                <Link
                    href="/finder/loves"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-heart"></i>
                        </div>
                        <div className={cl.text}>
                            Trọ quan tâm
                        </div>
                    </div>
                </Link>
                <Link
                    href="/finder/mypage"
                    className={cl.menu_item_wrap}
                    onClick={()=>{handleSetEnableHeader(false)}}
                >
                    <div className={cl.menu_item}>
                        <div className={cl.icon}>
                            <i className="fal fa-address-card"></i>
                        </div>
                        <div className={cl.text}>
                            Trang cá nhân
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
                            <i className="fal fa-exclamation-triangle"></i>
                        </div>
                        <div className={cl.text}>
                            Báo lỗi & góp ý
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
                            <i className="fal fa-user-alt-slash"></i>
                        </div>
                        <div className={cl.text}>
                            Xóa tài khoản
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
