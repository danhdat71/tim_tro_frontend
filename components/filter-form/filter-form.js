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
import { formatNumber } from '@/helpers/priceHelper';
import { getStringValues } from '@/config/productUsedType';
import { getStringValue as getStringValueBedRoom } from '@/config/productBedRoom';
import { getStringValue as getStringValueToiletRoom } from '@/config/productToiletRoom';
import { getStringValue as getStringValueAllowPet } from '@/config/productAllowPet';

export default function FilterForm()
{
    const router = useRouter();

    //Modal address
    const [isShowModalAddress, setIsShowModalAddress] = useState(false);
    const [isShowModalAcreage, setIsShowModalAcreage] = useState(false);
    const [isShowModalPrices, setIsShowModalPrices] = useState(false);
    const [isShowModalCategories, setIsShowModalCategories] = useState(false);
    const [isShowModalBedroom, setIsShowModalBedroom] = useState(false);
    const [isShowModalToiletRoom, setIsShowModalToiletRoom] = useState(false);
    const [isShowModalAllowPet, setIsShowModalAllowPet] = useState(false);

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
    function renderButtonPrice() {
        let title = "Khoảng giá";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery.prices) {
            isActive = true;
            let value = routerQuery.prices.split(',');
            let min = formatNumber(value[0]);
            let max = formatNumber(value[1]);
            title = min + " - " + max;
        }

        return (
            <SelectorBox
                title={title}
                active={isActive}
                onClick={()=>{
                    setIsShowModalPrices(true);
                }}
            />
        );
    }
    function renderButtonCategories() {
        let title = "Phân loại";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery.used_type) {
            isActive = true;
            let usedTypeArr = routerQuery.used_type.split(',');
            title = getStringValues(usedTypeArr);
        }

        return (
            <SelectorBox
                title={title}
                active={isActive}
                onClick={()=>{
                    setIsShowModalCategories(true);
                }}
            />
        );
    }
    function renderButtonBedroom() {
        let title = "Phòng ngủ";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery.bed_rooms) {
            isActive = true;
            title = getStringValueBedRoom(routerQuery.bed_rooms);
        }

        return (
            <SelectorBox
                title={title}
                active={isActive}
                onClick={()=>{
                    setIsShowModalBedroom(true);
                }}
            />
        );
    }
    function renderButtonToiletRoom() {
        let title = "Phòng WC";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery.toilet_rooms) {
            isActive = true;
            title = getStringValueToiletRoom(routerQuery.toilet_rooms);
        }

        return (
            <SelectorBox
                title={title}
                active={isActive}
                onClick={()=>{
                    setIsShowModalToiletRoom(true);
                }}
            />
        );
    }
    function renderButtonPet() {
        let title = "Thú nuôi";
        let isActive = false;
        let routerQuery = router.query;

        if (routerQuery.is_allow_pet) {
            isActive = true;
            title = getStringValueAllowPet(routerQuery.is_allow_pet);
        }

        return (
            <SelectorBox
                title={title}
                active={isActive}
                onClick={()=>{
                    setIsShowModalAllowPet(true);
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
    function handleSeletedPrices(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;

        if (String(value) != "500000,20000000") {
            routerQuery.prices = String(value);
        } else {
            delete routerQuery.prices;
        }

        router.push({
            pathname: '/',
            query: routerQuery
        });
    }
    function handleSeletedCategories(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;
        let seletedValue = value.map(function(val, index){
            return val.value;
        });
        if (String(seletedValue)) {
            routerQuery.used_type = String(seletedValue);
        } else {
            delete routerQuery.used_type;
        }

        router.push({
            pathname: '/',
            query: routerQuery
        });
    }
    function handleSeletedBedroom(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;

        if (value.value) {
            routerQuery.bed_rooms = value.value;
        } else {
            delete routerQuery.bed_rooms;
        }

        router.push({
            pathname: '/',
            query: routerQuery
        });
    }
    function handleSeletedToiletRoom(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;

        if (value.value) {
            routerQuery.toilet_rooms = value.value;
        } else {
            delete routerQuery.toilet_rooms;
        }

        router.push({
            pathname: '/',
            query: routerQuery
        });
    }
    function handleSeletedAllowPet(value) {
        let routerQuery = router.query;
        routerQuery.page = 1;

        if (value.value) {
            routerQuery.is_allow_pet = value.value;
        } else {
            delete routerQuery.is_allow_pet;
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
                {renderButtonPrice()}
                {renderButtonCategories()}
                {renderButtonBedroom()}
                {renderButtonToiletRoom()}
                {renderButtonPet()}
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
            <ModalPriceRange
                onSubmit={(value)=>{
                    handleSeletedPrices(value);
                }}
                onClose={()=>{
                    setIsShowModalPrices(false);
                }}
                isShowModal={isShowModalPrices}
            ></ModalPriceRange>
            <ModalCategory
                onSubmit={(value)=>{
                    handleSeletedCategories(value);
                }}
                onClose={()=>{
                    setIsShowModalCategories(false);
                }}
                isShowModal={isShowModalCategories}
            ></ModalCategory>
            <ModalBedroom
                onSubmit={(value)=>{
                    handleSeletedBedroom(value);
                }}
                onClose={()=>{
                    setIsShowModalBedroom(false);
                }}
                isShowModal={isShowModalBedroom}
            ></ModalBedroom>
            <ModalToiletRoom
                onSubmit={(value)=>{
                    handleSeletedToiletRoom(value);
                }}
                onClose={()=>{
                    setIsShowModalToiletRoom(false);
                }}
                isShowModal={isShowModalToiletRoom}
            ></ModalToiletRoom>
            <ModalPet
                onSubmit={(value)=>{
                    handleSeletedAllowPet(value);
                }}
                onClose={()=>{
                    setIsShowModalAllowPet(false);
                }}
                isShowModal={isShowModalAllowPet}
            ></ModalPet>
        </form>
    )
}
