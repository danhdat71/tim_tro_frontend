"use client";

import React from 'react'
import SearchBox from './search-box/search-box'
import SelectorBox from './selecter-box/selector-box'
import cl from './filter-form.module.css';
import ModalFilter from './modal-filters/modal-filter';
import { useAppSelector } from '@/redux/store';
import ModalFilterAddress from './modal-filters/modal-filter-address/modal-filter-address';
import ModalFilterAcreage from './modal-filters/modal-filter-acreage/modal-filter-acreage';
import ModalPriceRange from './modal-filters/modal-price-range/modal-price-range';
import ModalCategory from './modal-filters/modal-category/modal-category';
import ModalBedroom from './modal-filters/modal-bedroom/modal-bedroom';
import ModalToiletRoom from './modal-filters/modal-toilet-room/modal-toilet-room';
import ModalPet from './modal-filters/modal-pet/modal-pet';

export default function filterForm()
{
    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    function handleRenderModalFilterType()
    {
        let modalFilterJsx = null;
        if (modalFilter.box_type == 'address') {
            modalFilterJsx = (
                <ModalFilterAddress />
            );
        }
        else if (modalFilter.box_type == 'acreage') {
            modalFilterJsx = (
                <ModalFilterAcreage />
            );
        }
        else if (modalFilter.box_type == 'price_range') {
            modalFilterJsx = (
                <ModalPriceRange />
            );
        }
        else if (modalFilter.box_type == 'category') {
            modalFilterJsx = (
                <ModalCategory />
            );
        }
        else if (modalFilter.box_type == 'bed_room') {
            modalFilterJsx = (
                <ModalBedroom />
            );
        }
        else if (modalFilter.box_type == 'toilet_room') {
            modalFilterJsx = (
                <ModalToiletRoom />
            );
        }
        else if (modalFilter.box_type == 'pet') {
            modalFilterJsx = (
                <ModalPet />
            );
        }

        return modalFilterJsx;
    }

    return (
        <form className={cl.filter_form}>
            <SearchBox></SearchBox>
            <div className={cl.select_box_list}>
                <SelectorBox
                    title="Địa điểm"
                    filterTitle="Lọc Địa Điểm"
                    boxType="address"
                />
                <SelectorBox
                    title="Diện tích"
                    filterTitle="Lọc Diện tích"
                    boxType="acreage"
                />
                <SelectorBox
                    title="Khoảng giá"
                    filterTitle="Khoảng giá"
                    boxType="price_range"
                />
                <SelectorBox
                    title="Phân loại"
                    filterTitle="Phân loại nhà thuê"
                    boxType="category"
                />
                <SelectorBox
                    title="Số phòng ngủ"
                    filterTitle="Số phòng ngủ"
                    boxType="bed_room"
                />
                <SelectorBox
                    title="Số phòng WC"
                    filterTitle="Số phòng vệ sinh"
                    boxType="toilet_room"
                />
                <SelectorBox
                    title="Thú nuôi"
                    filterTitle="Cho phép thú nuôi"
                    boxType="pet"
                />
            </div>
            <ModalFilter>
                {handleRenderModalFilterType()}
            </ModalFilter>
        </form>
    )
}
