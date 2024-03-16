import React, { useState } from 'react';
import cl from './modal-category.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetValue, selectValue, submitValue } from '@/redux/features/filter_box/category_filter_box';

const options = [
    { value: '1', label: 'Nhà nguyên căn' },
    { value: '2', label: 'Phòng trọ' },
    { value: '3', label: 'Sleepbox' },
    { value: '4', label: 'Chung cư' },
];

const ModalCategory = () => {

    let [selecteds, setSelecteds] = useState([]);

    const dispatch = useDispatch();

    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    const categoryFilter = useAppSelector(function(state){
        return state.filterCategoryReducer.categoryFilterBox;
    });

    function handleDisableModalFilter(pushData)
    {
        dispatch(toggleModalFilter(pushData));
    }

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true && modalFilter.box_type == 'category'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleSelect(value)
    {
        dispatch(selectValue(value));
    }

    function renderButtons()
    {
        return options.map(function(value, index) {
            return (
                <button
                    type='button'
                    key={index}
                    className={
                        categoryFilter.value.findIndex((item) => {
                            return item.value == value.value;
                        }) != -1
                            ? `${cl.input_box} ${cl.active}` 
                            : `${cl.input_box}`
                    }
                    onClick={()=>{
                        handleSelect({
                            label: value.label,
                            value: value.value
                        });
                    }}
                >{value.label}</button>
            );
        })
    }

    console.log('categoryFilter', categoryFilter);

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
                    <span>Phân loại nhà</span>
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
                    <div className={cl.filter_category}>
                        {renderButtons()}
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
                    <button
                        type='button'
                        className={cl.re_edit_btn}
                        onClick={()=>{
                            dispatch(resetValue());
                        }}
                    >
                        <span>Đặt lại</span>
                        <span><i className="fal fa-redo"></i></span>
                    </button>
                    <button
                        type='button'
                        className={cl.apply_filter_btn}
                        onClick={()=>{
                            dispatch(submitValue());
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

export default ModalCategory;
