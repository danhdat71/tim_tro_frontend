import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import React from 'react';
import cl from './hostel-manager.module.css';
import ProductProcessing from '@/components/product-processing/product-processing';
import { Pagination } from '@mui/material';
import useWindowSize from '@/hooks/useWindowDimensions';

const breadcrumbs = [
    {
        label: 'Trang chủ',
        href: '/'
    },
    {
        label: 'Quản lý tìm trọ',
        href:'/finder/hostel-manager'
    }
];

const Index = () => {

    const windowSize = useWindowSize();

    function handleRenderPaginate() {
        return (
            <Pagination
                count={10}
                color="success"
                shape="rounded"
                variant="outlined"
                size={windowSize.width > 600 ? 'large' : 'small'}
            />
        )
    }

    return (
        <div className={cl.manager}>
            <Breadcrumb items={breadcrumbs}></Breadcrumb>
            <TitleLeftBig title="Quản lý tìm trọ"></TitleLeftBig>
            <div className={cl.button_bar}>
                <button className={`${cl.button} ${cl.active}`}>
                    <span>Đang yêu cầu</span>
                    <span>(0)</span>
                </button>
                <button className={`${cl.button}`}>
                    <span>Đang chờ xem</span>
                    <span>(0)</span>
                </button>
                <button className={`${cl.button}`}>
                    <span>Đã xem</span>
                    <span>(0)</span>
                </button>
                <button className={`${cl.button}`}>
                    <span>Đã huỷ</span>
                    <span>(0)</span>
                </button>
            </div>
            <div>
                <ProductProcessing></ProductProcessing>
                <ProductProcessing></ProductProcessing>
            </div>
            <div className={cl.wrap_paginate}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default Index;
