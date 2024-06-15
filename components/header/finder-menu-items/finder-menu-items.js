import React from 'react';
import cl from './finder-menu-items.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMenuHeader } from '@/redux/features/header';
import { FULL_HOUSE, HOSTEL, TOGETHER } from '@/config/productUsedType';

const FinderMenuItems = (props) => {

    let {
        onLogout
    } = props;

    const dispatch = useDispatch();

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    return (
        <>
            <div className={cl.list_menu_item}>
                <Link
                    href={`/?used_type=${HOSTEL}`}
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
                    href={`/?used_type=${FULL_HOUSE}`}
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
                    href={`/?used_type=${TOGETHER}`}
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
                <div
                    className={cl.menu_item_wrap}
                    onClick={()=>{
                        onLogout();
                        handleSetEnableHeader(false)
                    }}
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
        </>
    );
}

export default FinderMenuItems;
