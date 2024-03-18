"use client";

import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import React, { useRef, useState } from 'react';
import cl from './detail.module.css';
import ButtonBooking from '@/components/buttons/button-booking/button-booking';
import ButtonLike from '@/components/buttons/button-like/button-like';
import ButtonGoLogin from '@/components/buttons/button-go-login/button-go-login';
import SliderWithThumb from '@/components/slider-with-thumb/slider-with-thumb';
import ProductDetailInfo from '@/components/product-detail-info/product-detail-info';
import AvatarUsername from '@/components/avatar-username/avatar-username';

export async function getServerSideProps(context) {
    let slug = context.query.slug;
    let data = await fetch(`https://nmsoft.online/offical_page/api/v1/product/${slug}`);
    data = await data.json();

    return {
        props: { data },
    }
}

const breadCrumbItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Danh sách trọ',
        href: '/'
    },
    {
        label: 'Trọ quận 1',
        href: '/'
    }
]

const Index = ({ data }) => {
    return (
        <div className={cl.hostel_detail}>
            <Breadcrumb items={breadCrumbItems}></Breadcrumb>
            <SliderWithThumb></SliderWithThumb>
            <div className={cl.hostel_detail}>
                <h2 className={cl.product_name}>Cho thuê phòng trọ hẻm an ninh - xe tải tận cửa - Nguyễn Văn Đậu - Bình Thạnh</h2>
                <div className={cl.price}>1,5 triệu / tháng</div>
                <div className={cl.button_bar}>
                    <div>
                        <ButtonLike>
                            <span>Thêm vào yêu thích</span>
                            <span><i className="far fa-heart"></i></span>
                        </ButtonLike>
                        <ButtonBooking>
                            <span>Đặt lịch hẹn xem</span>
                            <span><i className="far fa-calendar-alt"></i></span>
                        </ButtonBooking>
                        {/* <ButtonGoLogin>
                            <span>Đăng nhập để liên hệ</span>
                            <span><i className="far fa-sign-in-alt"></i></span>
                        </ButtonGoLogin> */}
                        <div className={cl.desc_booking}>(Bạn sẽ nhận được thông tin liên hệ sau khi người đăng đồng ý lịch hẹn.)</div>
                    </div>
                    <div className={cl.other_button}>
                        Báo xâu
                    </div>
                </div>
                <ProductDetailInfo></ProductDetailInfo>
                <div className={cl.wrap_avatar}>
                    <AvatarUsername></AvatarUsername>
                </div>
                
            </div>
        </div>
    );
}

export default Index;
