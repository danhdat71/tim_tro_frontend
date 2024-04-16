import React, { useEffect } from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import ProductOwner from '@/components/product-owner/product-owner';
import useWindowSize from '@/hooks/useWindowDimensions';
import Pagination from '@mui/material/Pagination';
import axios from '@/helpers/http-requests/axios';
import { PaginationItem } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isNumeric } from '@/helpers/numberHelper';
import EmptyList from '@/components/empty-list/empty-list';
import { DRAFT, REALITY } from '@/config/productStatus';

const breadCrumbs = [
    {label: 'Trang chủ', href: '/'},
    {label: 'Quản lý tin đăng', href: '/provider/hostel-manager'}
];

export async function getServerSideProps(context) {
    const accessToken = context.req.headers.cookie
        ? context.req.headers.cookie
            .split('; ')
            .find((row) => row.startsWith('access_token='))
            .split('=')[1]
        : null;
    
    let {
        status = 1,
        page = 1,
    } = context.query;

    let fetchData = await fetch(`http://localhost/api/provider/product/list?page=${page}&status=${status}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });

    console.log('status', fetchData.status);

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

    if (data == null) {
        router.push('/auth/login');
    }

    function handleRenderPaginate() {
        if (data?.list?.data?.length > 0) {
            return data?.list?.links?.map(function(val, index) {
                if (isNumeric(val.label)) {
                    return (
                        <div
                            key={index}
                            className={`handle-item ${val.label == router.query.page || router.query.page == null ? 'active' : ''}`}
                        ><Link href={`/provider/hostel-manager?status=${router.query.status ? router.query.status : REALITY}&page=${val.label}`}>{val.label}</Link></div>
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
        
    }

    function handleRenderProduct() {
        let dataLike = [12, 17];

        if (data?.list?.data?.length > 0) {
            return data?.list?.data?.map(function(value, index) {
                return (
                    <ProductOwner
                        key={index}
                        image={`${process.env.BACKEND_URL}/${value.product_images[0].url}`}
                        title={value.title}
                        price={value.price}
                        isLike={dataLike.includes(value.id) ? 'Đã like' : 'chưa like'}
                    />
                )
            });
        } else {
            if (router.query.status == DRAFT) {
                return <EmptyList title="Chưa có bản nháp nào"></EmptyList>
            } else {
                return <EmptyList title="Chưa có bài đăng nào"></EmptyList>
            }
        }
    }

    console.log('data', data);

    return (
        <div className={cl.my_hostel}>
            <Breadcrumb items={breadCrumbs}></Breadcrumb>
            <TitleLeftBig title="Quản lý tin đã đăng"></TitleLeftBig>
            <div className={cl.tabs}>
                <Link href='/provider/hostel-manager?status=0&page=1'>
                    <button className={`${router.query.status == DRAFT ? cl.active : '' }`}>
                        <span>Bản nháp</span>
                        <span>({data?.draft_count})</span>
                    </button>
                </Link>
                <Link href='/provider/hostel-manager?status=1&page=1'>
                    <button className={`${router.query.status == REALITY || router.query.status == null ? cl.active : '' }`}>
                        <span>Đã đăng</span>
                        <span>({data?.total_count})</span>
                    </button>
                </Link>
            </div>
            <div className={cl.wrap_products}>
                {handleRenderProduct()}
            </div>
            <div className={`${cl.wrap_paginate} paginate-md`}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default Index;
