import Link from 'next/link';
import React from 'react';
import cl from './notification.module.css';

const NotificationItem = () => {
    return (
        <div className={cl.item}>
            <div className={cl.icon}>
                <i class="fas fa-bell"></i>
            </div>
            <div>
                <Link href='/' className={cl.link}>
                    <div className={cl.title}>Vui lòng đánh giá buổi xem trọ</div>
                </Link>
                <div className={cl.desc}>Hi Nguyễn</div>
                <div className={cl.time}>2 phút trước</div>
            </div>
            <div className={cl.wrap_clear}>
                <button><i class="far fa-times"></i></button>
            </div>
        </div>
    );
}

export default NotificationItem;
