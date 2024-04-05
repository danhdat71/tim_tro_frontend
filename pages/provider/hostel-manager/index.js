import React from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import ProductOwner from '@/components/product-owner/product-owner';
import useWindowSize from '@/hooks/useWindowDimensions';
import Pagination from '@mui/material/Pagination';

const breadCrumbs = [
    {label: 'Trang chủ', href: '/'},
    {label: 'Quản lý tin đăng', href: '/provider/hostel-manager'}
];

const Index = () => {

    const windowSize = useWindowSize();

    function handleRenderPaginate() {
        return (
            <Pagination
                count={10}
            />
        )
    }

    return (
        <div className={cl.my_hostel}>
            <Breadcrumb items={breadCrumbs}></Breadcrumb>
            <TitleLeftBig title="Quản lý tin đã đăng"></TitleLeftBig>
            <div className={cl.wrap_products}>
                <ProductOwner
                    image="https://file4.batdongsan.com.vn/crop/562x284/2024/04/04/20240404160827-bc8b_wm.jpg"
                />
                <ProductOwner
                    image="https://file4.batdongsan.com.vn/crop/348x174/2023/07/31/20230731144352-a122_wm.jpg"
                />
            </div>
            <div className={`${cl.wrap_paginate} paginate-md`}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default Index;
