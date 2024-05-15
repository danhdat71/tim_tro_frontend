import React from 'react';
import cl from './provider-menu-items.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMenuHeader } from '@/redux/features/header';

const ProviderMenuItems = (props) => {

    let {
        onLogout
    } = props;

    const dispatch = useDispatch();

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    return (
        <div className={cl.list_menu_item}>
            <Link
                href="/provider/hostel-regist"
                className={cl.menu_item_wrap}
                onClick={()=>{handleSetEnableHeader(false)}}
            >
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fal fa-comment-alt-edit"></i>
                    </div>
                    <div className={cl.text}>
                        Đăng phòng trọ
                    </div>
                </div>
            </Link>
            <Link
                href="/provider/hostel-manager"
                className={cl.menu_item_wrap}
                onClick={()=>{handleSetEnableHeader(false)}}
            >
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fal fa-list-ul"></i>
                    </div>
                    <div className={cl.text}>
                        Quản lý tin đăng
                    </div>
                </div>
            </Link>
            <Link
                href="/provider/mypage"
                className={cl.menu_item_wrap}
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
            <div
                onClick={onLogout}
                className={cl.menu_item_wrap}
            >
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fal fa-sign-out"></i>
                    </div>
                    <div className={cl.text}>
                        Đăng xuất
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProviderMenuItems;
