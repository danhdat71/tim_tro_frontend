import React, { useState } from 'react';
import cl from './modal-pet.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetValue, selectValue, submitValue } from '@/redux/features/filter_box/pet_filter_box';
import Modal from '@/components/modals/modal/modal';

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
            ? true
            : false;
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
                            ? `input-button active`
                            : `input-button`
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
        <Modal
            isShowModal={isEnableModalFilter()}
            title="Cho phép thú nuôi"
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            onClose={()=>{
                handleDisableModalFilter({
                    is_enable: false,
                })
            }}
            onRefresh={()=>{
                dispatch(resetValue());
            }}
            onSubmit={()=>{
                dispatch(submitValue());
                handleDisableModalFilter({
                    is_enable: false,
                });
            }}
        >
            <div className={cl.wrap_buttons}>
                {renderPets()}
            </div>
        </Modal>
    );
}

export default ModalPet;
