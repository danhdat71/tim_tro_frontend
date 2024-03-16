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

export default function filterForm()
{
    return (
        <form className={cl.filter_form}>
            <SearchBox></SearchBox>
            <div className={cl.select_box_list}>
                <SelectorBox
                    title="Địa điểm"
                    boxType="address"
                />
                <SelectorBox
                    title="Diện tích"
                    boxType="acreage"
                />
                <SelectorBox
                    title="Khoảng giá"
                    boxType="price_range"
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
