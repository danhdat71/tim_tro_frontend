import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import ProductOwner from '@/components/product-owner/product-owner';
import axios from '@/helpers/http-requests/axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isNumeric } from '@/helpers/numberHelper';
import EmptyList from '@/components/empty-list/empty-list';
import { DRAFT, REALITY } from '@/config/productStatus';
import AlertConfirm from '@/components/alerts/alert-comfirm/alert-confirm';
import AlertSuccess from '@/components/alerts/alert-success/alert-success';
import AlertError from '@/components/alerts/alert-error/alert-error';
import emptyImage from '@/assets/imgs/empty_image.png';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';

const breadCrumbs = [
    {label: 'Trang chủ', href: '/'},
    {label: 'Quản lý tin đăng', href: '/provider/hostel-manager'}
];

export async function getServerSideProps(context) {

    let accessToken = getAccessTokenByContext(context);
    
    let {
        status = 1,
        page = 1,
    } = context.query;

    let fetchData = await fetch(`${process.env.API}/provider/product/list?page=${page}&status=${status}`, {
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

    let [isShowConfirmPopup, setIsShowConfirmPopUp] = useState(false);
    let [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false);
    let [isShowAlertError, setIsShowAlertError] = useState(false);
    let alertTimeoutRef = useRef();
    let alertErrTimeoutRef = useRef();

    useEffect(function(){
        alertTimeoutRef.current = setTimeout(function(){
            setIsShowAlertSuccess(false);
        }, 3000);

        return () => {
            clearTimeout(alertTimeoutRef.current);
        }
    }, [isShowConfirmPopup]);

    useEffect(function(){
        alertErrTimeoutRef.current = setTimeout(function(){
            setIsShowAlertError(false);
        }, 3000);

        return () => {
            clearTimeout(alertErrTimeoutRef.current);
        }
    }, [isShowConfirmPopup]);

    const router = useRouter();

    if (data == null) {
        router.push('/auth/login');
    }

    function handleRenderPaginate() {
        return data?.list?.links?.map(function(val, index) {
            if (isNumeric(val.label)) {
                return (
                    <div
                        key={index}
                        className={`handle-item ${val.label == router.query.page || (router.query.page == null && val.label == 1) ? 'active' : ''}`}
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

    function handleRenderProduct() {
        let dataLike = [12, 17];

        if (data?.list?.data?.length > 0) {
            return data?.list?.data?.map(function(value, index) {
                return (
                    <ProductOwner
                        key={index}
                        id={value.id}
                        image={`${value.product_images[0]?.url ? process.env.BACKEND_URL + '/' + value.product_images[0]?.url : emptyImage.src}`}
                        title={value.title}
                        price={value.price}
                        slug={value.slug}
                        onClickRemove={(id)=>{
                            setIsShowConfirmPopUp(id);
                        }}
                        viewedCount={value.user_viewed_product_count}
                        status={value.status}
                        detailAddress={value.detail_address}
                    />
                )
            });
        } else {
            return <EmptyList title="Danh sách rỗng"></EmptyList>
        }
    }

    function handleDeleteProduct() {
        setIsShowConfirmPopUp(false);
        axios.post('/provider/product/delete', {
            product_id: isShowConfirmPopup
        }, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(function(response) {
                if (response.status == 200) {
                    setIsShowAlertSuccess(true);
                    router.push(window.location.href);
                } else if (response.status == 422) {
                    setIsShowAlertError(true);
                    router.push(window.location.href);
                }
            });
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
            <AlertConfirm
                message="Bạn có chắc muốn xoá bài đăng này ?"
                sub="Bài đăng sẽ bị xoá vĩnh viễn"
                isShow={isShowConfirmPopup}
                onCancel={()=>{
                    setIsShowConfirmPopUp(false);
                }}
                onSubmit={()=>{
                    handleDeleteProduct();
                }}
            ></AlertConfirm>
            <AlertSuccess
                message="Đã xoá bài đăng thành công !"
                sub="Đang làm mới lại danh sách bài đăng"
                isShow={isShowAlertSuccess}
            ></AlertSuccess>
            <AlertError
                message="Không tìm thấy hoặc đã xoá"
                isShow={isShowAlertError}
            >
            </AlertError>
        </div>
    );
}

export default Index;
