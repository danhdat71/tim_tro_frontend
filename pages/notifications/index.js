import React from 'react';
import cl from './index.module.css';
import EmptyList from '@/components/empty-list/empty-list';
import NotificationItem from '@/components/notification-item/notification-item';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';

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

const Index = () => {
    return (
        <div className={cl.notifications}>
            <Breadcrumb
                items={breadcrumbs}
            />
            {/* <EmptyList title="Hiện chưa có thông báo nào"></EmptyList> */}
            <NotificationItem></NotificationItem>
        </div>
    );
}

export default Index;
