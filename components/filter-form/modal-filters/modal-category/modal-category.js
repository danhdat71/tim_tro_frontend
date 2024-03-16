import React, { useState } from 'react';
import cl from './modal-category.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';

const options = [
    { value: 'Nhà nguyên căn', label: 'Nhà nguyên căn' },
    { value: 'Phòng trọ', label: 'Phòng trọ' },
    { value: 'Sleepbox', label: 'Sleepbox' },
    { value: 'Chung cư', label: 'Chung cư' },
];

const ModalCategory = () => {

    let [selecteds, setSelecteds] = useState([]);

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
        return modalFilter.is_enable == true && modalFilter.box_type == 'category'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleSelect(value)
    {
        let newSelecteds = [...selecteds];
        let index = newSelecteds.findIndex(function(item) {
            return item == value;
        });

        if (index === -1) {
            newSelecteds.push(value);
        } else {
            newSelecteds.splice(index, 1);
        }

        setSelecteds(newSelecteds);
    }

    function renderButtons()
    {
        return options.map(function(value, index) {
            return (
                <button
                    type='button'
                    key={index}
                    className={
                        selecteds.includes(value.value)
                            ? `${cl.input_box} ${cl.active}` 
                            : `${cl.input_box}`
                    }
                    onClick={()=>{
                        handleSelect(value.value);
                    }}
                >{value.label}</button>
            );
        })
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
                    <button type='button' className={cl.apply_filter_btn}>
                        <span>Lọc kết quả</span>
                        <span><i className="fal fa-search"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCategory;
