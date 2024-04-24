"use client";

import React, { memo, useEffect, useState } from 'react';
import cl from './modal-filter-address.module.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetSelectedValue, setSelectedValue, setTmpSelectedDistrict, setTmpSelectedProvince, setTmpSelectedTown } from '@/redux/features/filter_box/address_filter_box';
import Modal from '@/components/modals/modal/modal';
import axios from '@/helpers/http-requests/axios';

const ModalFilterAddress = (props) => {

    let {
        onSubmit
    } = props;

    const dispatch = useDispatch();
    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

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
        // Get districts
        axios.get(`${process.env.API}/location/get-districts?province_id=${payload.value}`)
            .then(function(res) {
                if (res.status == 200) {
                    setDistricts(res.data);
                    handleSetTmpDistrict(res.data[0]);
                }
            });
    }

    function handleSetTmpDistrict(payload) {
        dispatch(setTmpSelectedDistrict(payload));
        // Get wards
        axios.get(`${process.env.API}/location/get-wards?district_id=${payload.value}`)
            .then(function(res) {
                if (res.status == 200) {
                    setWards(res.data);
                    handleSetTmpTown(res.data[0]);
                }
            });
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

    useEffect(function(){
        axios.get(`${process.env.API}/location/get-provinces`)
            .then(function(res) {
                if (res.status == 200) {
                    setProvinces(res.data);
                }
            });
    }, []);

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
                setDistricts([]);
                setWards([]);
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
                onSubmit(filterAddress);
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
                        options={provinces}
                        maxMenuHeight={190}
                    />
                </div>
                <div className={cl.group_search}>
                    <label className='label label-block'>Quận/Huyện</label>
                    <Select
                        value={filterAddress.obj_select_district}
                        onChange={(selectedOption)=>{
                            handleSetTmpDistrict(selectedOption);
                        }}
                        options={districts}
                        maxMenuHeight={190}
                    />
                </div>
                <div className={cl.group_search}>
                    <label className='label label-block'>Xã/Phường/Thị Trấn</label>
                    <Select
                        value={filterAddress.obj_select_town}
                        onChange={(selectedOption)=>{
                            handleSetTmpTown(selectedOption);
                        }}
                        options={wards}
                        maxMenuHeight={190}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default memo(ModalFilterAddress);
