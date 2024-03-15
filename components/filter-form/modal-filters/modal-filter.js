"use client";

import React from 'react';
import cl from './modal-filter.module.css';
import { useAppSelector } from '@/redux/store';

export default function ModalFilter(props) {

    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    return (
        <div className={isEnableModalFilter()}>
            <div className={cl.backdrop}></div>
            <div className={cl.main_modal_filter}>
                <div className={cl.modal_filter_title}>
                    <span>Lọc Khoảng Giá</span>
                    <button type='button'><i className="fal fa-times-circle"></i></button>
                </div>
                <div className={cl.modal_filter_main}>
                    {props.children}
                </div>
                <div className={cl.modal_filter_foot}>
                    <button type='button' className={cl.cancel_filter_btn}>
                        <span>Đóng</span>
                    </button>
                    <button type='button' className={cl.apply_filter_btn}>
                        <span>Lọc kết quả</span>
                        <span><i className="fal fa-search"></i></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
