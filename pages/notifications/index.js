import React, { useEffect, useState } from 'react';
import cl from './index.module.css';
import EmptyList from '@/components/empty-list/empty-list';
import NotificationItem from '@/components/notification-item/notification-item';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';
import { isNumeric } from '@/helpers/numberHelper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from '@/helpers/http-requests/axios';
import auth, { updateUserDataAttr } from '@/redux/auth';
import { useDispatch } from 'react-redux';
import AlertConfirm from '@/components/alerts/alert-comfirm/alert-confirm';

const breadcrumbs = [
    {
        'label' : 'Trang chủ',
        'href' : '/'
    },
    {
        'label' : 'Thông báo',
        'href' : '/notifications'
    },
];

export async function getServerSideProps(context) {
    let accessToken = getAccessTokenByContext(context);
    let {
        page = 1,
    } = context.query;

    let fetchData = await fetch(`${process.env.API_SERVERSIDE}/notifications?page=${page}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });

    let data = {};
    if (fetchData.status != 500) {
        data = await fetchData.json();
        data = data.data;
    } else {
        data = null;
    }

    return {
        props: { data },
    }
}

const Index = ({data}) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [isWaitViewMark, setIsWaitViewMark] = useState(false);
    const [isWaitDeleteAll, setIsWaitDeleteAll] = useState(false);
    const [isShowConfirmDeleteAll, setIsShowDeleteAll] = useState(false);

    useEffect(function(){
        // Listen event open notification
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
    }, [router]);

    function handleRenderNotificationItem() {
        if (data?.data?.length > 0) {
            return data?.data?.map(function(val, index) {
                return (
                    <NotificationItem
                        id={val.id}
                        title={val.title}
                        description={val.description}
                        sentAtAgo={val.sent_at_ago}
                        link={val.link}
                        status={val.status}
                        onClick={handleClickNotificationItem}
                    />
                )
            });
        }

        return <EmptyList title="Hiện chưa có thông báo nào"></EmptyList>
    }

    function handleReadAll() {
        dispatch(updateUserDataAttr({
            key: 'notifications_count',
            value: 0
        }));
        setIsWaitViewMark(true);
        axios.post(`/notification/mark-read-all`, null, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then(function(res) {
            if (res.status == 200) {
                setIsWaitViewMark(false);
                router.replace(router.asPath);
            }
        });
    }
    
    function handleDeleteAll() {
        dispatch(updateUserDataAttr({
            key: 'notifications_count',
            value: 0
        }));
        setIsWaitDeleteAll(true);
        axios.post(`/notification/delete-all`, null, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then(function(res) {
            setIsShowDeleteAll(false);
            setIsWaitDeleteAll(false);
            if (res.status == 200) {
                router.replace(router.asPath);
            }
        });
    }

    function handleClickNotificationItem(notificationData) {
        // Redirect to notification link
        if (notificationData.link != null) {
            window.open(notificationData.link, '_blank').focus();
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
            if (res.status == 200) {
                dispatch(updateUserDataAttr({
                    key: 'notifications_count',
                    value: res?.data?.un_read_count || 0
                }));
                // Refresh page
                router.replace(router.asPath);
            }
        });
    }

    function handleRenderPaginate() {
        return data?.links?.map(function(val, index) {
            if (isNumeric(val.label)) {
                return (
                    <div
                        key={index}
                        className={`handle-item ${val.label == router.query.page || (router.query.page == null && val.label == 1) ? 'active' : ''}`}
                    ><Link href={`/notifications?page=${val.label}`}>{val.label}</Link></div>
                );
            } else if (val.label == '...') {
                return (
                    <div
                        key={index}
                        className='handle-item dot'
                    >...</div>
                );
            }
        });
    }

    return (
        <div className={cl.notifications}>
            <Breadcrumb
                items={breadcrumbs}
            />
            <TitleLeftBig title="Thông báo" />
            <div className={cl.button_bar}>
                <ButtonIcon
                    text="Đánh dấu tất cả là đã xem"
                    disabled={isWaitViewMark || data?.data?.length == 0}
                    backgroundColor="rgb(0, 154, 77)"
                    color="white"
                    onClick={()=>{
                        handleReadAll();
                    }}
                />
                <ButtonIcon
                    text="Xóa tất cả"
                    disabled={isWaitDeleteAll || data?.data?.length == 0}
                    backgroundColor="#e4e4e4"
                    color="#4d4d4d"
                    onClick={()=>{
                        setIsShowDeleteAll(true);
                    }}
                />
            </div>
            <div className={cl.notification_list}>
                {handleRenderNotificationItem()}
            </div>
            <div className={`${cl.wrap_paginate} paginate-md`}>
                {handleRenderPaginate()}
            </div>
            <AlertConfirm
                message="Bạn có chắc muốn xóa toàn bộ thông báo"
                sub="Toàn bộ thông báo sẽ bị xóa và không thể khôi phục"
                isShow={isShowConfirmDeleteAll}
                submitDisabled={isWaitDeleteAll}
                onCancel={()=>{
                    setIsShowDeleteAll(false);
                }}
                onSubmit={()=>{
                    handleDeleteAll();
                }}
            />
        </div>
    );
}

export default Index;
