import React, { useState } from 'react';
import cl from './modal-category.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetValue, selectValue, submitValue } from '@/redux/features/filter_box/category_filter_box';
import Modal from '@/components/modals/modal/modal';

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
            ? true
            : false;
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
                            ? `input-button active` 
                            : `input-button`
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

    return (
        <Modal
            isShowModal={isEnableModalFilter()}
            title="Phân loại nhà"
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
            <div className={cl.filter_category}>
                {renderButtons()}
            </div>
        </Modal>
    );
}

export default ModalCategory;
