import React, { useState } from 'react';
import cl from './modal-bedroom.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { resetValue, selectValue, submitValue } from '@/redux/features/filter_box/bed_room_filter_box';
import Modal from '@/components/modals/modal/modal';

const rooms = [
    {
        value: 1,
        label : '1 phòng ngủ'
    },
    {
        value: 2,
        label : '2 phòng ngủ'
    },
    {
        value: 3,
        label : '3 phòng ngủ'
    },
    {
        value: 4,
        label : '4 phòng ngủ'
    },
    {
        value: 5,
        label : '5 phòng ngủ'
    }
];

const ModalBedroom = () => {

    let [selected, setSelected] = useState();

    const dispatch = useDispatch();

    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    const filerBedroom = useAppSelector(function(state){
        return state.filterBedroomReducer.bedRoomFilterBox;
    });

    function handleDisableModalFilter(pushData)
    {
        dispatch(toggleModalFilter(pushData));
    }

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true && modalFilter.box_type == 'bed_room'
            ? true
            : false;
    }

    function handleSelect(value) {
        if (value.value == filerBedroom.value.value) {
            dispatch(selectValue({}));
        } else {
            dispatch(selectValue(value));
        }
    }

    function renderRooms()
    {
        return rooms.map(function(val, index){
            return (
                <button
                    key={index}
                    type='button'
                    className={
                        val.value == filerBedroom.value.value
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
            title="Số phòng ngủ"
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
                {renderRooms()}
            </div>
        </Modal>
    );
}

export default ModalBedroom;
