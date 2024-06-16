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
import Product from '@/components/product/product';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import BestAreaBox from '@/components/boxs/best-area-box/best-area-box';
import ButtonCall from '@/components/buttons/button-call/button-call';
import OtherAreaBox from '@/components/boxs/other-area-box/other-area-box';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';
import { formatNumber } from '@/helpers/priceHelper';
import { formatToHiDMY } from '@/helpers/dateHelper';
import { useAppSelector } from '@/redux/store';
import axios from '@/helpers/http-requests/axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateUserDataAttr } from '@/redux/auth';
import AlertSuccess from '@/components/alerts/alert-success/alert-success';
import AlertError from '@/components/alerts/alert-error/alert-error';

export async function getServerSideProps(context) {
    let accessToken = getAccessTokenByContext(context);
    let {slug} = context.query;
    let data = {};

    // Get detail product
    let product = await fetch(`${process.env.API_SERVERSIDE}/public-product/${slug}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    product = await product.json();
    data.product = product.data;

    // Get others same districts with count
    let districtId = product?.data?.district_id;
    let price = product?.data?.price;
    let othersInDistrict = await fetch(`${process.env.API_SERVERSIDE}/wards-with-count-products?district_id=${districtId}&current_price=${price}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    othersInDistrict = await othersInDistrict.json();
    data.othersInDistrict = othersInDistrict.data;

    // Get other districts with count products
    let provinceId = product?.data?.province_id;
    let otherDistricts = await fetch(`${process.env.API_SERVERSIDE}/districts-with-count-products?province_id=${provinceId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    otherDistricts = await otherDistricts.json();
    data.otherDistricts = otherDistricts.data;

    // Get other products
    let otherProducts = await fetch(`${process.env.API_SERVERSIDE}/products?without_id=${product.data.id}&province_id=${product.data.province_id}&limit=4`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    otherProducts = await otherProducts.json();
    data.otherProducts = otherProducts.data;

    return {
        props: { data },
    }
}

const Index = ({data}) => {
    let router = useRouter();
    let dispatch = useDispatch();
    let [disableSubmitReport, setDisableSubmitReport] = useState(false);
    let [showModalReport, setShowModalReport] = useState(false);
    let [showModalShare, setShowModalShare] = useState(false);
    let [saveds, setSaveds] = useState([]);
    let [reportErrors, setReportErrors] = useState({});
    let [alertSuccess, setAlertSucess] = useState({
        isShow: false,
    });
    let [alertError, setAlertError] = useState({
        isShow: false,
    });
    let timeoutSuccess = useRef();
    let timeoutError = useRef();
    let breadCrumbs = useRef([
        {
            label: 'Trang chủ',
            href: '/'
        },
        {
            label: 'Danh sách trọ',
            href: '/'
        },
        {
            label: data?.product?.title,
            href: `/hostels/${data?.product?.slug}`
        }
    ]);
    let authUserData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });

    useEffect(function(){
        axios.get(`/auth/get-me`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response?.status == 200) {
                    dispatch(updateUserDataAttr({
                        key : 'user_saved_products_count',
                        value : saveds.length
                    }));
                }
            });
    }, [saveds]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(function(){
        axios.get(`${process.env.API}/user/list-saved-products?is_all=1`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response?.status == 200) {
                    setSaveds(response.data);
                }
            });
    }, []);
    

    useEffect(function(){
        timeoutSuccess.current = setTimeout(function(){
            let newAlert = {...alertSuccess};
            newAlert.isShow = false;
            setAlertSucess(newAlert);
        }, 3000);

        return () => {
            clearTimeout(timeoutSuccess.current);
        }
    }, [alertSuccess?.isShow]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(function(){
        timeoutError.current = setTimeout(function(){
            let newAlert = {...alertError};
            newAlert.isShow = false;
            setAlertError(newAlert);
        }, 3000);

        return () => {
            clearTimeout(timeoutError.current);
        }
    }, [alertError?.isShow]); // eslint-disable-line react-hooks/exhaustive-deps

    function handleSaveProduct(payload) {
        axios.post(`/user/save-product`, payload, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(response => {
            if (response?.status == 200) {
                setSaveds(response.data);
            }
        });
    }

    function handleSubmitReport(payload) {
        setReportErrors({});
        axios.post(`/user/report-product`, payload, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(response => {
            setDisableSubmitReport(false);
            if (response?.status == 200) {
                setAlertSucess({
                    message: "Báo cáo bài đăng thành công !",
                    sub: "Chúng tôi sẽ phản hồi sau khi xem xét báo cáo này",
                    isShow: true,
                });
                setShowModalReport(false);
            } else if (response.status == 422) {
                setReportErrors(response.errors);
            } else if (response.status == 400) {
                setAlertError({
                    message: "Bạn đã báo cáo bài đăng này!",
                    sub: "Chúng tôi sẽ phản hồi sau khi xem xét báo cáo này",
                    isShow: true,
                });
            }
        });
    }

    function handleRenderButtonSave() {
        if (authUserData?.app_id) {
            if (saveds.includes(data.product.id)) {
                return (
                    <ButtonLike
                        onClick={()=>{
                            handleSaveProduct({
                                product_id: data.product.id,
                                action: 0
                            });
                        }}
                        isActive={true}
                    >
                        <span>Huỷ lưu</span>
                        <span><i className="far fa-heart"></i></span>
                    </ButtonLike>
                )
            } else {
                return (
                    <ButtonLike
                        onClick={()=>{
                            handleSaveProduct({
                                product_id: data.product.id,
                                action: 1
                            });
                        }}
                        isActive={false}
                    >
                        <span>Lưu tin</span>
                        <span><i className="far fa-heart"></i></span>
                    </ButtonLike>
                )
            }
        }
    }

    function handleRenderOtherProductItems() {
        return data?.otherProducts?.data?.map(function(val, index){
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
            )
        })
    }

    function handleRenderOtherProduct() {
        if (data?.otherProducts?.data?.length > 0) {
            return (
                <div>
                    <TitleLeftBig title="Các trọ liên quan khác"></TitleLeftBig>
                    {handleRenderOtherProductItems()}
                </div>
            )
        } 
    }

    return (
        <div className={cl.hostel_detail}>
            <Breadcrumb items={breadCrumbs.current}></Breadcrumb>
            <SliderWithThumb
                images={data?.product?.product_images}
                imageThumbs={data?.product?.product_images}
                baseUrl={process.env.BACKEND_URL + '/'}
            ></SliderWithThumb>
            <div className={cl.hostel_detail}>
                <h2 className={cl.product_name}>{data?.product?.title}</h2>
                <div className={cl.price}>{formatNumber(data?.product?.price)} / tháng</div>
                <div className={cl.button_bar}>
                    <div>
                        <div className={cl.wrap_main_button}>
                            {handleRenderButtonSave()}
                            <ButtonCall tel={data?.product?.tel}></ButtonCall>
                        </div>
                    </div>
                    <div className={cl.other_button}>
                        <ButtonReport
                            onClick={()=>{
                                setShowModalReport(true);
                            }}
                        ></ButtonReport>
                        <ButtonShare
                            onClick={()=>{
                                setShowModalShare(true);
                            }}
                        />
                    </div>
                </div>
                <ProductDetailInfo
                    data={data?.product}
                />
                <div className={cl.wrap_avatar}>
                    <AvatarUsername
                        createdAt={data?.product?.user?.created_at}
                        fullName={data?.product?.user?.full_name}
                        href={`/provider?app_id=${data?.product?.user?.app_id}`}
                        avatar={data?.product?.user?.avatar}
                    />
                    <div className={cl.created_at}>Đăng lúc: <i>{formatToHiDMY(data?.product?.posted_at)}</i></div>
                </div>
            </div>
            <div className={cl.search_other_price}>
                <TitleLeftBig title="Bảng giá theo khu vực"></TitleLeftBig>
                <OtherAreaBox
                    items={data?.othersInDistrict?.wards}
                    district={data?.othersInDistrict?.district}
                    province={data?.othersInDistrict?.province}
                />
            </div>
            <div className={cl.other_search}>
                <BestAreaBox
                    title="Các trọ theo khu vực"
                    items={data.otherDistricts}
                    onClick={(value)=>{
                        router.push({
                            pathname: '/',
                            query: {
                                district_id: value
                            }
                        });
                    }}
                ></BestAreaBox>
            </div>
            {handleRenderOtherProduct()}
            <ModalReport
                showModalReport={showModalReport}
                handleShowModalReport={setShowModalReport}
                onSubmit={(value)=>{
                    setDisableSubmitReport(true);
                    handleSubmitReport(value);
                }}
                errors={reportErrors}
                productId={data?.product?.id}
                disableSubmitReport={disableSubmitReport}
            ></ModalReport>
            <ModalShare
                showModalShare={showModalShare}
                handleShowModalShare={setShowModalShare}
            ></ModalShare>
            <AlertSuccess
                isShow={alertSuccess?.isShow}
                sub={alertSuccess?.sub}
                message={alertSuccess?.message}
            />
            <AlertError
                isShow={alertError?.isShow}
                sub={alertError?.sub}
                message={alertError?.message}
            />
        </div>
    );
}

export default Index;
