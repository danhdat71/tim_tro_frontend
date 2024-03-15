import React from 'react';
import cl from './provider-menu-items.module.css';
import Link from 'next/link';

const ProviderMenuItems = () => {
    return (
        <div className={cl.list_menu_item}>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fas fa-comment-alt-edit"></i>
                    </div>
                    <div className={cl.text}>
                        Đăng phòng trọ
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fas fa-list"></i>
                    </div>
                    <div className={cl.text}>
                        Quản lý tin đăng
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="far fa-address-card"></i>
                    </div>
                    <div className={cl.text}>
                        Trang cá nhân
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="far fa-exclamation-triangle"></i>
                    </div>
                    <div className={cl.text}>
                        Báo lỗi hệ thống
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="far fa-user-slash"></i>
                    </div>
                    <div className={cl.text}>
                        Xóa tài khoản
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="far fa-sign-out"></i>
                    </div>
                    <div className={cl.text}>
                        Đăng xuất
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProviderMenuItems;
