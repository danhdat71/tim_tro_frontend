"use client";

import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import React, { useEffect, useRef, useState } from 'react';
import cl from './detail.module.css';
import ButtonBooking from '@/components/buttons/button-booking/button-booking';
import ButtonLike from '@/components/buttons/button-like/button-like';
import ButtonGoLogin from '@/components/buttons/button-go-login/button-go-login';
import SliderWithThumb from '@/components/slider-with-thumb/slider-with-thumb';
import ProductDetailInfo from '@/components/product-detail-info/product-detail-info';
import AvatarUsername from '@/components/avatar-username/avatar-username';
import ButtonReport from '@/components/buttons/button-report/button-report';
import ButtonShare from '@/components/buttons/button-share/button-share';
import AlertSuccess from '@/components/alert-success/alert-success';
import AlertError from '@/components/alert-error/alert-error';
import ModalBooking from '@/components/modals/modal-booking/modal-booking';
import ModalReport from '@/components/modals/modal-report/modal-report';
import ModalShare from '@/components/modals/modal-share/modal-share';
import AlertBarWarning from '@/components/alert-bars/alert-bar-warning/alert-bar-warning';
import AlertBarSuccess from '@/components/alert-bars/alert-bar-success/alert-bar-success';
import ButtonRebooking from '@/components/buttons/button-rebooking/button-rebooking';
import axios from 'axios';
import { getDetailProduct } from '@/helpers/http-requests/product';

export async function getServerSideProps(context) {
    let slug = context.query.slug;
    let data = await getDetailProduct(process.env.API + `product/${slug}`);

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

    let [showModalBooking, setShowModalBooking] = useState(false);
    let [showModalReport, setShowModalReport] = useState(false);
    let [showModalShare, setShowModalShare] = useState(false);

    function handleShowModalBooking(status)
    {
        setShowModalBooking(status);
    }

    function handleShowModalReport(status)
    {
        setShowModalReport(status);
    }

    function handleShowModalShare(status)
    {
        setShowModalShare(status);
    }

    return (
        <div className={cl.hostel_detail}>
            <Breadcrumb items={breadCrumbItems}></Breadcrumb>
            <SliderWithThumb></SliderWithThumb>
            <div className={cl.hostel_detail}>
                <h2 className={cl.product_name}>Cho thuê phòng trọ hẻm an ninh - xe tải tận cửa - Nguyễn Văn Đậu - Bình Thạnh</h2>
                <div className={cl.price}>1,5 triệu / tháng</div>
                <div className={cl.button_bar}>
                    <div>
                        <AlertBarWarning
                            style={{marginBottom: '10px'}}
                        >
                            <div>Chủ bài đăng yêu cầu dời lịch xem vào lúc 21h10 ngày 21/12/2000</div>
                        </AlertBarWarning>
                        <AlertBarSuccess
                            style={{marginBottom: '10px'}}
                        >
                            <div>Chủ bài đăng đồng ý lịch xem vào lúc 21h10 ngày 21/12/2000.</div>
                            <a href="tel:0123123123">Số điện thoại: 0123.333.3333</a>
                        </AlertBarSuccess>
                        <div className={cl.wrap_main_button}>
                            <ButtonLike>
                                <span>Lưu lại</span>
                                <span><i className="far fa-heart"></i></span>
                            </ButtonLike>
                            {/* <ButtonBooking
                                handleShowModalBooking={handleShowModalBooking}
                            >
                                <span>Hẹn xem</span>
                                <span><i className="far fa-calendar-alt"></i></span>
                            </ButtonBooking> */}
                            <ButtonRebooking
                                handleShowModalReBooking={handleShowModalBooking}
                            >
                                <span>Hẹn xem lại</span>
                                <span><i className="far fa-calendar-alt"></i></span>
                            </ButtonRebooking>
                        </div>
                        {/* <ButtonGoLogin>
                            <span>Đăng nhập để liên hệ</span>
                            <span><i className="far fa-sign-in-alt"></i></span>
                        </ButtonGoLogin> */}
                        <div className={cl.desc_booking}>(Bạn sẽ nhận được thông tin liên hệ sau khi người đăng đồng ý lịch hẹn.)</div>
                    </div>
                    <div className={cl.other_button}>
                        <ButtonReport
                            onClick={()=>{
                                handleShowModalReport(true);
                            }}
                        ></ButtonReport>
                        <ButtonShare
                            onClick={()=>{
                                handleShowModalShare(true);
                            }}
                        />
                    </div>
                </div>
                <ProductDetailInfo></ProductDetailInfo>
                <div className={cl.wrap_avatar}>
                    <AvatarUsername></AvatarUsername>
                    <div className={cl.created_at}>Đăng lúc: <i>14:40 ngày 23/02/2024</i></div>
                </div>
            </div>
            <ModalBooking
                showModalBooking={showModalBooking}
                handleShowModalBooking={handleShowModalBooking}
            ></ModalBooking>
            <ModalReport
                showModalReport={showModalReport}
                handleShowModalReport={handleShowModalReport}
            ></ModalReport>
            <ModalShare
                showModalShare={showModalShare}
                handleShowModalShare={handleShowModalShare}
            ></ModalShare>
        </div>
    );
}

export default Index;
