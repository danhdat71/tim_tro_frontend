import React, { useState } from 'react';
import cl from './modal-pet.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetValue, selectValue, submitValue } from '@/redux/features/filter_box/pet_filter_box';

const pets = [
    {
        value: 1,
        label : 'Không cho phép'
    },
    {
        value: 2,
        label : 'Chó'
    },
    {
        value: 3,
        label : 'Mèo'
    },
    {
        value: 4,
        label : 'Chó & mèo'
    },
];


const ModalPet = () => {
    const dispatch = useDispatch();

    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    const petFilter = useAppSelector(function(state){
        return state.filterPetReducer.petFilterBox;
    });

    function handleDisableModalFilter(pushData)
    {
        dispatch(toggleModalFilter(pushData));
    }

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true && modalFilter.box_type == 'pet'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleSelect(value) {
        if (value.value == petFilter.value.value) {
            dispatch(selectValue({}));
        } else {
            dispatch(selectValue(value));
        }
    }

    function renderPets()
    {
        return pets.map(function(val, index){
            return (
                <button
                    key={index}
                    type='button'
                    className={
                        val.value == petFilter.value.value
                            ? `${cl.input_box} ${cl.active}`
                            : `${cl.input_box}`
                    }
                    onClick={()=>{
                        handleSelect({
                            label: val.label,
                            value: val.value,
                        });
                    }}
                >{val.label}</button>
            )
        });
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
                    <span>Cho phép thú nuôi</span>
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
                    <div className={cl.wrap_buttons}>
                        {renderPets()}
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
                        <span><i className="fal fa-undo"></i></span>
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

export default ModalPet;
