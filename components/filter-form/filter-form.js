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
import { convertAcreageStringToMetter } from '@/helpers/aceageFilter';

export default function filterForm()
{
    const addressFilter = useAppSelector(function(state){
        return state.filterAddressReducer.addressFilterBox;
    });
    const acreageFilter = useAppSelector(function(state){
        return state.filterAcreageReducer.acreageFilterBox;
    });
    const priceFilter = useAppSelector(function(state){
        return state.filterPriceReducer.priceFilterBox;
    });

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

    return (
        <form className={cl.filter_form}>
            <SearchBox></SearchBox>
            <div className={cl.select_box_list}>
                <SelectorBox
                    title={addressFilter.default_label}
                    boxType="address"
                    active={addressFilter.is_clicked_filter}
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
                    title="Phân loại"
                    boxType="category"
                />
                <SelectorBox
                    title="Số phòng ngủ"
                    boxType="bed_room"
                />
                <SelectorBox
                    title="Số phòng WC"
                    boxType="toilet_room"
                />
                <SelectorBox
                    title="Thú nuôi"
                    boxType="pet"
                />
            </div>
            <ModalFilterAddress></ModalFilterAddress>
            <ModalFilterAcreage></ModalFilterAcreage>
            <ModalPriceRange></ModalPriceRange>
            <ModalCategory></ModalCategory>
            <ModalBedroom></ModalBedroom>
            <ModalToiletRoom></ModalToiletRoom>
            <ModalPet></ModalPet>
        </form>
    )
}
