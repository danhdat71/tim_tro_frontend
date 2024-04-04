import Link from 'next/link';
import React, { memo } from 'react';
import cl from './sub-header.module.css';

const SubHeader = () => {
    return (
        <div className={cl.sub_header}>
            <div className={cl.item}>
                <Link href='/'>
                    Góp ý & báo lỗi
                </Link>
            </div>
            <div className={cl.item}>
                <Link href='/'>
                    Điều khoản
                </Link>
            </div>
            <div className={cl.item}>
                <Link href='/'>
                    Liên hệ
                </Link>
            </div>
            <div className={cl.item}>
                <Link href='/'>
                    Xóa tài khoản
                </Link>
            </div>
        </div>
    );
}

export default memo(SubHeader);
