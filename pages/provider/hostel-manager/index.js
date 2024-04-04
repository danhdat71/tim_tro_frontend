import React from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import ProductOwner from '@/components/product-owner/product-owner';

const breadCrumbs = [
    {label: 'Trang chủ', href: '/'},
    {label: 'Quản lý tin đăng', href: '/provider/hostel-manager'}
];

const Index = () => {
    return (
        <div className={cl.my_hostel}>
            <Breadcrumb items={breadCrumbs}></Breadcrumb>
            <TitleLeftBig title="Quản lý tin đã đăng"></TitleLeftBig>
            <div>
                <ProductOwner></ProductOwner>
            </div>
        </div>
    );
}

export default Index;
