import React, { useState } from 'react';
import cl from './modal-pet.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';

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

    let [selected, setSelected] = useState();

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
        return modalFilter.is_enable == true && modalFilter.box_type == 'pet'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleSelect(value) {
        if (value == selected) {
            setSelected(null);
        } else {
            setSelected(value);
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
                        val.value == selected
                            ? `${cl.input_box} ${cl.active}`
                            : `${cl.input_box}`
                    }
                    onClick={()=>{
                        handleSelect(val.value);
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
                    <button type='button' className={cl.apply_filter_btn}>
                        <span>Lọc kết quả</span>
                        <span><i className="fal fa-search"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalPet;
