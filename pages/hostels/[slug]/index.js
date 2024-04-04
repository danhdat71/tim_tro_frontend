"use client";

import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import React, { useEffect, useRef, useState } from 'react';
import cl from './detail.module.css';
import ButtonLike from '@/components/buttons/button-like/button-like';
import SliderWithThumb from '@/components/slider-with-thumb/slider-with-thumb';
import ProductDetailInfo from '@/components/product-detail-info/product-detail-info';
import AvatarUsername from '@/components/avatar-username/avatar-username';
import ButtonReport from '@/components/buttons/button-report/button-report';
import ButtonShare from '@/components/buttons/button-share/button-share';
import ModalReport from '@/components/modals/modal-report/modal-report';
import ModalShare from '@/components/modals/modal-share/modal-share';
import axios from 'axios';
import { getDetailProduct } from '@/helpers/http-requests/product';
import Product from '@/components/product/product';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import BestAreaBox from '@/components/best-area-box/best-area-box';
import ButtonCall from '@/components/buttons/button-call/button-call';

export async function getServerSideProps(context) {
    let slug = context.query.slug;
    let data = await getDetailProduct(process.env.API + `product/${slug}`);

    return {
        props: { data },
    }
}

const breadCrumbItems = [
    {
        label: 'Trang chủ',
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
];

const searchKeyword = [
    {label:'Trọ Bình Thạnh', href:'/', total: 100},
    {label:'Trọ Quận 4', href:'/', total: 232},
    {label:'Trọ Quận 1', href:'/', total: 468},
    {label:'Trọ Quận 3', href:'/', total: 1664},
    {label:'Trọ Quận 10', href:'/', total: 22353},
    {label:'Trọ Quận 12', href:'/', total: 4543},
    {label:'Trọ Bình Tân', href:'/', total: 12},
];

const Index = ({ data }) => {

    let [showModalBooking, setShowModalBooking] = useState(false);
    let [showModalReport, setShowModalReport] = useState(false);
    let [showModalShare, setShowModalShare] = useState(false);

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
                        <div className={cl.wrap_main_button}>
                            <ButtonLike>
                                <span>Lưu lại</span>
                                <span><i className="far fa-heart"></i></span>
                            </ButtonLike>
                            <ButtonCall tel="0365774667"></ButtonCall>
                        </div>
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
            <div className={cl.other_search}>
                <BestAreaBox
                    title="Các trọ theo khu vực"
                    items={searchKeyword}
                ></BestAreaBox>
            </div>
            <div>
                <TitleLeftBig title="Các trọ liên quan khác"></TitleLeftBig>
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2024/03/25/20240325135526-ed0c_wm.jpg"
                />
                <Product
                    image="https://cloud.mogi.vn/images/thumb-small/2024/01/06/060/2787999e36bc48d68aedf7425be6c8f1.jpg"
                />
                <Product
                    image="https://cloud.mogi.vn/images/thumb-small/2023/05/06/411/51a739ff9ef243a3bf056839899ea5d0.jpg"
                />
                <Product
                    image="https://cloud.mogi.vn/images/thumb-small/2024/04/03/239/2ee0e5cf90f44dbfabb424ed6ef3928f.jpg"
                />
            </div>
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
