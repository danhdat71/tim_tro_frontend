import React from 'react';
import cl from './finder-menu-items.module.css';
import Link from 'next/link';

const FinderMenuItems = () => {
    return (
        <div className={cl.list_menu_item}>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fas fa-search"></i>
                    </div>
                    <div className={cl.text}>
                        Tìm phòng trọ
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="far fa-list-alt"></i>
                    </div>
                    <div className={cl.text}>
                        Quản lý tìm trọ
                    </div>
                </div>
            </Link>
            <Link href="" className={cl.menu_item_wrap}>
                <div className={cl.menu_item}>
                    <div className={cl.icon}>
                        <i className="fal fa-list"></i>
                    </div>
                    <div className={cl.text}>
                        Trọ quan tâm
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

export default FinderMenuItems;
