import React, { useRef } from 'react';
import cl from './header-notifications.module.css';
import Link from 'next/link';
import { useAppSelector } from '@/redux/store';
import { useOutsideAlerter } from '@/hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { toggleNotificationBox } from '@/redux/features/header';

const HeaderNotifications = (props) => {
    const dispatch = useDispatch();
    const headerState = useAppSelector(function(state){
        return state.headerReducer.header;
    });

    function handleSetEnableHeaderNotificationsBox(status) {
        dispatch(toggleNotificationBox(status));
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, function(){
        handleSetEnableHeaderNotificationsBox(!headerState.is_enable_notification_box);
    });

    return (
        <div
            ref={wrapperRef}
            className={`${cl.wrap_notifications} ${headerState.is_enable_notification_box ? cl.show : false}`}
        >
            <div className={`scrollbar ${cl.list}`}>
                <div className={cl.notification_item}>
                    <div className={cl.title}>Nhà môi giới Nguyễn Văn A vừa đăng bài thuê trọ</div>
                    <div className={cl.sub_title}>Cùng xem chi tiết bài đăng của thành viên này ngay</div>
                </div>
                <div className={cl.notification_item}>
                    <div className={cl.title}>Nhà môi giới Nguyễn Văn A vừa đăng bài thuê trọ</div>
                    <div className={cl.sub_title}>Cùng xem chi tiết bài đăng của thành viên này ngay</div>
                </div>
                <div className={cl.notification_item}>
                    <div className={cl.title}>Nhà môi giới Nguyễn Văn A vừa đăng bài thuê trọ</div>
                    <div className={cl.sub_title}>Cùng xem chi tiết bài đăng của thành viên này ngay</div>
                </div>
                <div className={cl.notification_item}>
                    <div className={cl.title}>Nhà môi giới Nguyễn Văn A vừa đăng bài thuê trọ</div>
                    <div className={cl.sub_title}>Cùng xem chi tiết bài đăng của thành viên này ngay</div>
                </div>
                <div className={cl.notification_item}>
                    <div className={cl.title}>Nhà môi giới Nguyễn Văn A vừa đăng bài thuê trọ</div>
                    <div className={cl.sub_title}>Cùng xem chi tiết bài đăng của thành viên này ngay</div>
                </div>
            </div>
            <div className={cl.view_all}>
                <Link href='/notifications'>Xem tất cả</Link>
            </div>
        </div>
    );
}

export default HeaderNotifications;
