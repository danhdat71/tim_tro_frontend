import React from 'react';
import cl from './index.module.css';
import EmptyList from '@/components/empty-list/empty-list';
import NotificationItem from '@/components/notification-item/notification-item';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';

const breadcrumbs = [
    {
        'label' : 'Trang chủ',
        'href' : '/'
    },
    {
        'label' : 'Thông báo',
        'href' : '/'
    },
];

const Index = () => {
    return (
        <div className={cl.notifications}>
            <Breadcrumb
                items={breadcrumbs}
            />
            <TitleLeftBig title="Thông báo" />
            {/* <EmptyList title="Hiện chưa có thông báo nào"></EmptyList> */}
            <div className={cl.notification_list}>
                <NotificationItem></NotificationItem>
            </div>
        </div>
    );
}

export default Index;
