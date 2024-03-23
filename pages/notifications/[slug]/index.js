import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import React from 'react';
import cl from './index.module.css';
import NotificationVote from '@/components/notification-detail/notification-vote/notification-vote';

const breadcrumbs = [
    {
        'label' : 'Trang chủ',
        'href' : '/'
    },
    {
        'label' : 'Thông báo',
        'href' : '/notifications'
    },
    {
        'label' : 'Tiêu đề thông báo 1',
        'href' : '/notifications/notification-slug-1'
    }
];

const Index = () => {
    return (
        <div className={cl.notification}>
            <Breadcrumb
                items={breadcrumbs}
            />
            <NotificationVote />
        </div>
    );
}

export default Index;
