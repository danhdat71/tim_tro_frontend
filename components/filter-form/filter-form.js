"use client";

import React from 'react'
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
import { useAppSelector } from '@/redux/store';
import { convertPriceStringToVnMoneyKey, getPriceToStringMoney } from '@/helpers/priceHelper';
import { resetAllAddress, resetSelectedValue } from '@/redux/features/filter_box/address_filter_box';
import { useDispatch } from 'react-redux';
import { resetAllAcreage } from '@/redux/features/filter_box/acreage_filter_box';
import { resetAllPriceRange } from '@/redux/features/filter_box/price_range_box';
import { resetAllCategory } from '@/redux/features/filter_box/category_filter_box';
import { resetAllBedroom } from '@/redux/features/filter_box/bed_room_filter_box';
import { resetAllToiletRoom } from '@/redux/features/filter_box/toilet_room_filter_box';
import { resetAllPet } from '@/redux/features/filter_box/pet_filter_box';
import { resetAllSearchFilter } from '@/redux/features/filter_box/search_filter_box';
import { convertAcreageStringToMetter } from '@/helpers/aceageFilter';
import { handleChangeRouterParam } from '@/helpers/routerHelper';
import { useRouter } from 'next/router';

export default function filterForm()
{
    const dispatch = useDispatch();
    const router = useRouter();

    const addressFilter = useAppSelector(function(state){
        return state.filterAddressReducer.addressFilterBox;
    });
    const acreageFilter = useAppSelector(function(state){
        return state.filterAcreageReducer.acreageFilterBox;
    });
    const priceFilter = useAppSelector(function(state){
        return state.filterPriceReducer.priceFilterBox;
    });
    const categoryFilter = useAppSelector(function(state){
        return state.filterCategoryReducer.categoryFilterBox;
    });
    const bedroomFilter = useAppSelector(function(state){
        return state.filterBedroomReducer.bedRoomFilterBox;
    });
    const toiletRoomFilter = useAppSelector(function(state){
        return state.filterToiletRoomReducer.toiletRoomFilterBox;
    });
    const petFilter = useAppSelector(function(state){
        return state.filterPetReducer.petFilterBox;
    });

    function getAddressLabel() {
        if (addressFilter.selected.value != null) {
            return addressFilter.selected.label;
        }

        return 'Địa điểm';
    }

    function getAcreaceLabel()
    {
        if (acreageFilter.selected_value != null) {
            return convertAcreageStringToMetter(acreageFilter.selected_value);
        }

        return 'Diện tích';
    }

    function getPriceRangeLabel()
    {
        if (priceFilter.selected_value != null) {
            return convertPriceStringToVnMoneyKey(priceFilter.selected_value);
        }

        return 'Khoảng giá';
    }

    function getCategoryLabel()
    {
        if (categoryFilter.selected_label != null) {
            return categoryFilter.selected_label;
        }

        return 'Phân loại';
    }

    function getBedroomLabel()
    {
        if (bedroomFilter.selected_label != null) {
            return bedroomFilter.selected_label;
        }

        return 'Số phòng ngủ';
    }

    function getToiletRoomLabel()
    {
        if (toiletRoomFilter.selected_label != null) {
            return toiletRoomFilter.selected_label;
        }

        return 'Số phòng WC';
    }

    function getPetLabel()
    {
        if (petFilter.selected_label != null) {
            return petFilter.selected_label;
        }

        return 'Thú nuôi';
    }

    function handleResetFilter() {
        dispatch(resetAllAddress());
        dispatch(resetAllAcreage());
        dispatch(resetAllPriceRange());
        dispatch(resetAllCategory());
        dispatch(resetAllBedroom());
        dispatch(resetAllToiletRoom());
        dispatch(resetAllPet());
        dispatch(resetAllSearchFilter());
    }

    return (
        <form className={cl.filter_form}>
            <SearchBox
                onSubmit={(value)=>{
                    handleChangeRouterParam(router, 'keyword', value);
                }}
            ></SearchBox>
            <div className={cl.select_box_list}>
                <SelectorBox
                    title={getAddressLabel()}
                    boxType="address"
                    active={addressFilter.selected.value != null ? true : false}
                />
                <SelectorBox
                    title={getAcreaceLabel()}
                    boxType="acreage"
                    active={acreageFilter.selected_value != null ? true : false}
                />
                <SelectorBox
                    title={getPriceRangeLabel()}
                    boxType="price_range"
                    active={priceFilter.selected_value != null ? true : false}
                />
                <SelectorBox
                    title={getCategoryLabel()}
                    boxType="category"
                    active={categoryFilter.selected_value != null ? true : false}
                />
                <SelectorBox
                    title={getBedroomLabel()}
                    boxType="bed_room"
                    active={bedroomFilter.selected_value != null ? true : false}
                />
                <SelectorBox
                    title={getToiletRoomLabel()}
                    boxType="toilet_room"
                    active={toiletRoomFilter.selected_value != null ? true : false}
                />
                <SelectorBox
                    title={getPetLabel()}
                    boxType="pet"
                    active={petFilter.selected_value != null ? true : false}
                />
                <button
                    type='button'
                    className={cl.recovery_filter_btn}
                    onClick={()=>{
                        handleResetFilter();
                    }}
                >
                    <span><i className="fal fa-undo"></i></span>
                    <span>Đặt lại</span>
                </button>
            </div>
            <ModalFilterAddress
                onSubmit={(value)=>{
                    handleChangeRouterParam(router, 'ward_id', value?.obj_select_town?.value);
                }}
            ></ModalFilterAddress>
            <ModalFilterAcreage
                onSubmit={(value)=>{
                    handleChangeRouterParam(router, 'acreage', value.value.toString());
                }}
            ></ModalFilterAcreage>
            <ModalPriceRange></ModalPriceRange>
            <ModalCategory></ModalCategory>
            <ModalBedroom></ModalBedroom>
            <ModalToiletRoom></ModalToiletRoom>
            <ModalPet></ModalPet>
        </form>
    )
}
