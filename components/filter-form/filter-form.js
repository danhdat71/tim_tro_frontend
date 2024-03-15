"use client";

import React from 'react'
import SearchBox from './search-box/search-box'
import SelectorBox from './selecter-box/selector-box'
import cl from './filter-form.module.css';
import ModalFilter from './modal-filters/modal-filter';

export default function filterForm() {

    function renderPriceChoice() {
        return (
            <div>
                123123
            </div>
        );
    }

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
                    title="Nuôi thú"
                    boxType="pet"
                />
            </div>
            <ModalFilter>
                {renderPriceChoice()}
            </ModalFilter>
        </form>
    )
}
