"use client";

import React, { useState } from 'react'
import SearchBox from './search-box/search-box'
import SelectorBox from './selecter-box/selector-box'
import cl from './filter-form.module.css';
import ModalFilterAddress from './modal-filters/modal-filter-address/modal-filter-address';
import ModalFilterAcreage from './modal-filters/modal-filter-acreage/modal-filter-acreage';
import ModalPriceRange from './modal-filters/modal-price-range/modal-price-range';
import ModalCategory from './modal-filters/modal-category/modal-category';
import ModalBedroom from './modal-filters/modal-bedroom/modal-bedroom';
import ModalToiletRoom from './modal-filters/modal-toilet-room/modal-toilet-room';
import ModalPet from './modal-filters/modal-pet/modal-pet';
import { handleChangeRouterParam } from '@/helpers/routerHelper';
import { useRouter } from 'next/router';

export default function filterForm()
{
    const router = useRouter();

    //Modal address
    const [isShowModalAddress, setIsShowModalAddress] = useState(false);
    const [isShowModalAcreage, setIsShowModalAcreage] = useState(false);

    // Handle render buttons
    function renderButtonAddress() {
        let addressStr = "Địa điểm";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery?.province_label && routerQuery?.province_id) {
            addressStr = routerQuery?.province_label;
            isActive = true;
        }

        if (routerQuery?.district_label) {
            addressStr = addressStr + ", " + routerQuery?.district_label;
        }

        if (routerQuery?.ward_label) {
            addressStr = addressStr + ", " + routerQuery?.ward_label;
        }

        return (
            <SelectorBox
                title={addressStr}
                boxType="address"
                active={isActive}
                onClick={()=>{
                    setIsShowModalAddress(true);
                }}
            />
        );
    }
    function renderButtonAcreage() {
        let title = "Diện tích";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery.acreage) {
            isActive = true;
            title = routerQuery.acreage.replace(',', '-') + 'm';
        }

        return (
            <SelectorBox
                title={title}
                active={isActive}
                onClick={()=>{
                    setIsShowModalAcreage(true);
                }}
            />
        );
    }

    // Handle redirect
    function handleSeletedAddress(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;

        if (value?.province?.value) {
            routerQuery.province_id = value?.province?.value;
            routerQuery.province_label = value?.province?.label;
        } else {
            delete routerQuery.province_id;
            delete routerQuery.province_label;
        }

        if (value?.district?.value) {
            routerQuery.district_id = value?.district?.value;
            routerQuery.district_label = value?.district?.label;
        } else {
            delete routerQuery.district_id;
            delete routerQuery.district_label;
        }

        if (value?.ward?.value) {
            routerQuery.ward_id = value?.ward?.value;
            routerQuery.ward_label = value?.ward?.label;
        } else {
            delete routerQuery.ward_id;
            delete routerQuery.ward_label;
        }

        router.push({
            pathname: '/',
            query: routerQuery
        });
    }
    function handleSeletedAcreage(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;

        if (String(value) != "0,100") {
            routerQuery.acreage = String(value);
        } else {
            delete routerQuery.acreage;
        }

        router.push({
            pathname: '/',
            query: routerQuery
        });
    }
    function handleResetRedirect() {
        router.push({
            pathname: '/',
        });
    }

    return (
        <form className={cl.filter_form}>
            <SearchBox
                onSubmit={(value)=>{
                    handleChangeRouterParam(router, 'keyword', value);
                }}
            ></SearchBox>
            <div className={cl.select_box_list}>
                {renderButtonAddress()}
                {renderButtonAcreage()}
                <button
                    type='button'
                    className={cl.recovery_filter_btn}
                    onClick={()=>{
                        handleResetRedirect();
                    }}
                >
                    <span><i className="fal fa-undo"></i></span>
                    <span>Đặt lại</span>
                </button>
            </div>
            <ModalFilterAddress
                onSubmit={(value)=>{
                    handleSeletedAddress(value);                    
                }}
                onClose={()=>{
                    setIsShowModalAddress(false);
                }}
                isShowModal={isShowModalAddress}
            ></ModalFilterAddress>
            <ModalFilterAcreage
                onSubmit={(value)=>{
                    handleSeletedAcreage(value);
                }}
                onClose={()=>{
                    setIsShowModalAcreage(false);
                }}
                isShowModal={isShowModalAcreage}
            ></ModalFilterAcreage>
            <ModalPriceRange></ModalPriceRange>
            <ModalCategory></ModalCategory>
            <ModalBedroom></ModalBedroom>
            <ModalToiletRoom></ModalToiletRoom>
            <ModalPet></ModalPet>
        </form>
    )
}
