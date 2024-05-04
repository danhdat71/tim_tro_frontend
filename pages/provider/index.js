import React, { useEffect } from 'react';
import cl from './index.module.css';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import Product from '@/components/product/product';
import defaultAvatarIcon from '@/assets/imgs/default_avatar.jpg';
import { getStringValue } from '@/config/userGender';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';
import { useRouter } from 'next/router';
import { formatToDMY } from '@/helpers/dateHelper';
import Link from 'next/link';
import { isNumeric } from '@/helpers/numberHelper';
import { REALITY } from '@/config/productStatus';
import { handleChangeRouterParam } from '@/helpers/routerHelper';
import EmptyList from '@/components/empty-list/empty-list';

export async function getServerSideProps(context) {
    let accessToken = getAccessTokenByContext(context);
    let {app_id, page} = context.query;
    let data = {};

    // Get detail provider
    let provider = await fetch(`${process.env.API}/public-provider/${app_id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    provider = await provider.json();
    if (provider.status == 200) {
        data.provider = provider.data;
    } else if (provider.status == 404) {
        data.provider = 404;
    }

    // Get products
    let products = await fetch(`${process.env.API}/public-provider/${app_id}/products?page=${page}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    products = await products.json();
    data.products = products.data;

    return {
        props: { data },
    }
}

const Index = ({data}) => {

    console.log('data', data);

    const router = useRouter();

    useEffect(function(){
        if (data.provider == 404) {
            router.push('/errors/404');
        }
    }, []);

    function handleRenderPaginate() {
        return data?.products?.links?.map(function (val, index) {
            if (isNumeric(val.label)) {
                return (
                    <div
                        key={index}
                        className={`handle-item ${val.label == router.query.page || (router.query.page == null && val.label == 1) ? 'active' : ''}`}
                        onClick={()=>{
                            handleChangeRouterParam(router, 'page', val.label, '/provider')
                        }}
                    ><span>{val.label}</span></div>
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

    function renderProductItems() {
        if (data?.products?.data?.length > 0) {
            return data?.products?.data?.map(function (val, index) {
                return (
                    <Product
                        key={index}
                        id={val.id}
                        slug={val.slug}
                        image={`${process.env.BACKEND_URL}/${val.product_images[0].thumb_url}`}
                        imageNum={val.product_images.length}
                        title={val.title}
                        acreage={val.acreage}
                        wardName={val.ward.name}
                        districtName={val.district.name}
                        provinceName={val.province.name}
                        price={val.price}
                        toiletRooms={val.toilet_rooms}
                        bedRooms={val.bed_rooms}
                        isShowSaveButton={false}
                    />
                );
            });
        } else {
            return <EmptyList title="Không tìm thấy bài đăng nào"></EmptyList>
        }
    }

    return (
        <div className={cl.mypage}>
            <TitleCenterBig title="Trang cá nhân"></TitleCenterBig>
            <div className={cl.wrap_avatar_box}>
                <div className={cl.wrap_avatar}>
                    <div className={cl.preview_img}>
                        <img src={data?.provider?.avatar
                            ? process.env.BACKEND_URL + '/' + data?.provider?.avatar
                            : defaultAvatarIcon.src}
                        ></img>
                    </div>
                </div>
            </div>
            <div className={cl.button_bar}>
                <ButtonIcon
                    icon={<i className="fal fa-heart"></i>}
                    isIconLeft={true}
                    text="Theo Dõi"
                ></ButtonIcon>
            </div>
            <div className={cl.info_item_box}>
                <label className='label label-block'>Họ tên</label>
                <div className={cl.info_item_content_bold}>{data?.provider?.full_name}</div>
            </div>
            <div className={cl.info_item_box}>
                <label className='label label-block'>Email</label>
                <div className={cl.info_item_content_bold}>{data?.provider?.email}</div>
            </div>
            <div className={cl.info_item_box} >
                <label className='label label-block'>Số điện thoại</label>
                <div className={cl.info_item_content_bold}>{data?.provider?.tel}</div>
            </div>
            <div className={cl.info_item_box}>
                <label className='label label-block'>Giới tính</label>
                <div className={cl.info_item_content_bold}>{getStringValue(data?.provider?.gender)}</div>
            </div>
            <div className={cl.info_item_box}>
                <label className='label label-block'>Ngày sinh</label>
                <div className={cl.info_item_content_bold}>{data?.provider?.birthday ? formatToDMY(data?.provider?.birthday) : 'Chưa cung cấp'}</div>
            </div>
            <div className={cl.info_item_box}>
                <label className='label label-block'>Giới thiệu</label>
                <div className={cl.info_item_content}>{data?.provider?.description ? data?.provider?.description : 'Chưa cung cấp'}</div>
            </div>

            <TitleLeftBig
                title="Các trọ đăng tuyển"
                style={{paddingTop: '20px'}}
            ></TitleLeftBig>
            <div>
                {renderProductItems()}
            </div>
            <div className={`${cl.wrap_paginate} paginate-md`}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default Index;
