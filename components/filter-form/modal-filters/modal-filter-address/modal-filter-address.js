"use client";

import React from 'react';
import cl from './modal-filter-address.module.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const ModalFilterAddress = () => {

    const dispatch = useDispatch();
    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

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

    return (
        <div className={isEnableModalFilter()}>
            <div
                className={cl.backdrop}
                onClick={()=>{
                    handleDisableModalFilter({
                        is_enable: false,
                    })
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
                            })
                        }}
                    ><i className="fal fa-times-circle"></i></button>
                </div>
                <div className={cl.modal_filter_main}>
                    <div className={cl.filter_address}>
                        <div className={cl.group_search}>
                            <label>Tỉnh/Thành</label>
                            <Select
                                // value={selectedOption}
                                onChange={(selectedOption)=>{
                                    console.log(selectedOption);
                                }}
                                options={options}
                            />
                        </div>
                        <div className={cl.group_search}>
                            <label>Quận/Huyện</label>
                            <Select
                                // value={selectedOption}
                                onChange={(selectedOption)=>{
                                    console.log(selectedOption);
                                }}
                                options={options}
                            />
                        </div>
                        <div className={cl.group_search}>
                            <label>Xã/Phườnga/Thị Trấn</label>
                            <Select
                                // value={selectedOption}
                                onChange={(selectedOption)=>{
                                    console.log(selectedOption);
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
                            })
                        }}
                    >
                        <span>Đóng</span>
                    </button>
                    <button type='button' className={cl.apply_filter_btn}>
                        <span>Lọc kết quả</span>
                        <span><i className="fal fa-search"></i></span>
                    </button>
                </div>
            </div>
        </div>


        
    );
}

export default ModalFilterAddress;
