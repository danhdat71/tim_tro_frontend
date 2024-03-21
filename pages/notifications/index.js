import React from 'react';
import cl from './index.module.css';
import EmptyList from '@/components/empty-list/empty-list';
import NotificationItem from '@/components/notification-item/notification-item';

const Index = () => {
    return (
        <div className={cl.notifications}>
            {/* <EmptyList title="Hiện chưa có thông báo nào"></EmptyList> */}
            <NotificationItem></NotificationItem>
        </div>
    );
}

export default Index;
