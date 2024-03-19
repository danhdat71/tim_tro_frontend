"use client";

import React, { useState } from 'react';
import cl from './modal-filter-address.module.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetSelectedValue, setSelectedValue, setTmpSelectedDistrict, setTmpSelectedProvince, setTmpSelectedTown } from '@/redux/features/filter_box/address_filter_box';

const options = [
    { value: 'hcm', label: 'Hồ Chí Minh' },
    { value: 'kg', label: 'Kiên Giang' },
    { value: 'hn', label: 'Hà Nội' },
];

const ModalFilterAddress = () => {
    const dispatch = useDispatch();
    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    const filterAddress = useAppSelector(function(state){
        return state.filterAddressReducer.addressFilterBox;
    });

    console.log('filterAddress', filterAddress);

    function handleDisableModalFilter(pushData)
    {
        dispatch(toggleModalFilter(pushData));
    }

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true && modalFilter.box_type == 'address'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleSetTmpProvince(payload) {
        dispatch(setTmpSelectedProvince(payload));
    }

    function handleSetTmpDistrict(payload) {
        dispatch(setTmpSelectedDistrict(payload));
    }

    function handleSetTmpTown(payload) {
        dispatch(setTmpSelectedTown(payload));
    }

    function handleSetSelectedValue(payload) {
        dispatch(setSelectedValue(payload));
    }

    function handleResetSelectedValue() {
        dispatch(resetSelectedValue());
    }

    return (
        <div className={isEnableModalFilter()}>
            <div
                className={cl.backdrop}
                onClick={()=>{
                    handleDisableModalFilter({
                        is_enable: false,
                    });
                }}
            ></div>
            <div className={cl.main_modal_filter}>
                <div className={cl.modal_filter_title}>
                    <span>Lọc địa điểm</span>
                    <button
                        type='button'
                        onClick={()=>{
                            handleDisableModalFilter({
                                is_enable: false,
                            });
                        }}
                    ><i className="fal fa-times-circle"></i></button>
                </div>
                <div className={cl.modal_filter_main}>
                    <div className={cl.filter_address}>
                        <div className={cl.group_search}>
                            <label>Tỉnh/Thành</label>
                            <Select
                                value={filterAddress.obj_select_province}
                                onChange={(selectedOption)=>{
                                    handleSetTmpProvince(selectedOption);
                                }}
                                options={options}
                            />
                        </div>
                        <div className={cl.group_search}>
                            <label>Quận/Huyện</label>
                            <Select
                                value={filterAddress.obj_select_district}
                                onChange={(selectedOption)=>{
                                    handleSetTmpDistrict(selectedOption);
                                }}
                                options={options}
                            />
                        </div>
                        <div className={cl.group_search}>
                            <label>Xã/Phường/Thị Trấn</label>
                            <Select
                                value={filterAddress.obj_select_town}
                                onChange={(selectedOption)=>{
                                    handleSetTmpTown(selectedOption);
                                }}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
                <div className={cl.modal_filter_foot}>
                    <button
                        type='button'
                        className={cl.cancel_filter_btn}
                        onClick={()=>{
                            handleDisableModalFilter({
                                is_enable: false,
                            });
                        }}
                    >
                        <span>Đóng</span>
                    </button>
                    <button
                        type='button'
                        className={cl.re_edit_btn}
                        onClick={()=>{
                            handleResetSelectedValue();
                        }}
                    >
                        <span>Đặt lại</span>
                        <span><i className="fal fa-undo"></i></span>
                    </button>
                    <button
                        type='button'
                        className={cl.apply_filter_btn}
                        disabled={
                            filterAddress.obj_select_town.value != null ||
                            (
                                filterAddress.obj_select_province.value == null &&
                                filterAddress.obj_select_district.value == null &&
                                filterAddress.obj_select_town.value == null
                            )
                                ? false
                                : true
                            }
                        onClick={()=>{
                            handleSetSelectedValue({
                                default_label: filterAddress.obj_select_province.label || 'Địa điểm',
                            });
                            handleDisableModalFilter({
                                is_enable: false,
                            });
                        }}
                    >
                        <span>Lọc kết quả</span>
                        <span><i className="fal fa-search"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalFilterAddress;
