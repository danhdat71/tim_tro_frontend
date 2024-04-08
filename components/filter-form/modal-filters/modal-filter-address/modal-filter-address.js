"use client";

import React, { memo, useState } from 'react';
import cl from './modal-filter-address.module.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetSelectedValue, setSelectedValue, setTmpSelectedDistrict, setTmpSelectedProvince, setTmpSelectedTown } from '@/redux/features/filter_box/address_filter_box';
import Modal from '@/components/modals/modal/modal';

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

    function handleDisableModalFilter(pushData)
    {
        dispatch(toggleModalFilter(pushData));
    }

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true && modalFilter.box_type == 'address'
            ? true
            : false;
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

    function isDisableSubmitBtn() {
        return filterAddress.obj_select_town.value != null ||
        (
            filterAddress.obj_select_province.value == null &&
            filterAddress.obj_select_district.value == null &&
            filterAddress.obj_select_town.value == null
        )
            ? false
            : true
    }

    return (
        <Modal
            isShowModal={isEnableModalFilter()}
            onClose={()=>{
                handleDisableModalFilter({
                    is_enable: false,
                });
            }}
            title="Lọc địa điểm"
            onRefresh={()=>{
                handleResetSelectedValue();
            }}
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            submitBtnDisabled={isDisableSubmitBtn()}
            onSubmit={()=>{
                
                handleSetSelectedValue({
                    default_label: filterAddress.obj_select_province.label || 'Địa điểm',
                });
                handleDisableModalFilter({
                    is_enable: false,
                });
            }}
        >
            <div className={cl.filter_address}>
                <div className={cl.group_search}>
                    <label className='label label-block'>Tỉnh/Thành</label>
                    <Select
                        value={filterAddress.obj_select_province}
                        onChange={(selectedOption)=>{
                            handleSetTmpProvince(selectedOption);
                        }}
                        options={options}
                    />
                </div>
                <div className={cl.group_search}>
                    <label className='label label-block'>Quận/Huyện</label>
                    <Select
                        value={filterAddress.obj_select_district}
                        onChange={(selectedOption)=>{
                            handleSetTmpDistrict(selectedOption);
                        }}
                        options={options}
                    />
                </div>
                <div className={cl.group_search}>
                    <label className='label label-block'>Xã/Phường/Thị Trấn</label>
                    <Select
                        value={filterAddress.obj_select_town}
                        onChange={(selectedOption)=>{
                            handleSetTmpTown(selectedOption);
                        }}
                        options={options}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default memo(ModalFilterAddress);
