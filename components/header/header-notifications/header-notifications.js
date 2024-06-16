import React, { useEffect, useRef, useState } from 'react';
import cl from './header-notifications.module.css';
import Link from 'next/link';
import { useAppSelector } from '@/redux/store';
import { useOutsideAlerter } from '@/hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { toggleNotificationBox } from '@/redux/features/header';
import axios from '@/helpers/http-requests/axios';
import { useRouter } from 'next/router';
import auth, { updateUserDataAttr } from '@/redux/auth';

const HeaderNotifications = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const headerState = useAppSelector(function(state){
        return state.headerReducer.header;
    });
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function handleSetEnableHeaderNotificationsBox(status) {
        dispatch(toggleNotificationBox(status));
    }

    function handleReadAll() {
        dispatch(updateUserDataAttr({
            key: 'notifications_count',
            value: 0
        }));
        handleSetEnableHeaderNotificationsBox(false);
        axios.post(`/notification/mark-read-all`, null, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        });
    }

    function handleClickNotificationItem(notificationData) {
        // Redirect to notification link
        if (notificationData.link != null) {
            handleSetEnableHeaderNotificationsBox(false);
            router.push(notificationData.link);
        }
        // Set notification item is read
        axios.post(`/notification/mark-read`, {
            id: notificationData.id,
            status: true
        }, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(function(res) {
            console.log('res', res);
            if (res.status == 200) {
                dispatch(updateUserDataAttr({
                    key: 'notifications_count',
                    value: res?.data?.un_read_count || 0
                }));
            }
        });
    }

    function handleRenderLoading() {
        if (isLoading == true) {
            return <div className={cl.loading}>Đang tải ...</div>
        }
    }

    function handleClickViewAll() {
        handleSetEnableHeaderNotificationsBox(false);
        router.push('/notifications');
    }

    function handleRenderViewAll() {
        return isLoading == false && notifications.length > 0
            ? <div
                className={cl.view_all}
                href='/notifications'
                onClick={()=>{
                    handleClickViewAll();
                }}
            >Xem tất cả</div>
            : false;
    }

    function handleRenderNotifications() {
        if (notifications.length > 0) {
            return notifications.map(function(val, index) {
                return (
                    <div
                        className={`${cl.notification_item} ${val.status == true ? cl.is_read : false}`}
                        key={index}
                        onClick={()=>{
                            handleClickNotificationItem(val);
                        }}
                    >
                        <div className={cl.title}>{val.title}</div>
                        <div className={cl.sub_title}>{val.description}</div>
                        <div className={cl.time}>{val.sent_at_ago}</div>
                    </div>
                )
            });
        }

        return <div className={cl.loading}>Chưa có thông báo nào</div>
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, function(){
        handleSetEnableHeaderNotificationsBox(false);
    });

    useEffect(function(){
        // Listen event open notification
        if (headerState.is_enable_notification_box == true) {
            axios.get(`/notifications?limit=15`, {
                headers: {
                    Authorization : 'Bearer ' + localStorage.getItem('access_token')
                }
            })
                .then(response => {
                    if (response?.status == 200) {
                        setIsLoading(false);
                        setNotifications(response.data.data);
                    }
                });
            axios.get(`/auth/get-me`, {
                headers: {
                    Authorization : 'Bearer ' + localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    if (res.status == 200) {
                        console.log('res', res);
                        dispatch(updateUserDataAttr({
                            key: 'notifications_count',
                            value: res?.data?.notifications_count || 0
                        }));
                    }
                });
        }
    }, [headerState.is_enable_notification_box]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            ref={wrapperRef}
            className={`${cl.wrap_notifications} ${headerState.is_enable_notification_box ? cl.show : false}`}
        >
            <div className={cl.header}>
                <div>Thông báo</div>
                <div
                    onClick={()=>{
                        handleReadAll();
                    }}
                >Đánh dấu đã xem</div>
            </div>
            <div className={`scrollbar ${cl.list}`}>
                {handleRenderLoading()}
                {handleRenderNotifications()}
            </div>
            <div className={cl.view_all}>
                {handleRenderViewAll()}
            </div>
        </div>
    );
}

export default HeaderNotifications;
