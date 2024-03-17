import React, { useState } from 'react';
import cl from './modal-filter-acreage.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { changeMaxValue, changeMinValue, changeValue, resetValue, submitValue } from '@/redux/features/filter_box/acreage_filter_box';
import { PrettoSlider } from '@/config/mui';

const configAcreages = [
    {
        value: [15, 30],
        label: '15 - 30 mét'
    },
    {
        value: [30, 40],
        label: '30 - 40 mét'
    },
    {
        value: [40, 50],
        label: '40 - 50 mét'
    },
    {
        value: [50, 60],
        label: '50 - 60 mét'
    },
    {
        value: [60, 70],
        label: '60 - 70 mét'
    },
    {
        value: [70, 80],
        label: '70 - 80 mét'
    },
    {
        value: [80, 90],
        label: '80 - 90 mét'
    },
    {
        value: [90, 100],
        label: '90 - 100 mét'
    },
];

const ModalFilterAcreage = () => {

    const acreageFilterBox = useAppSelector(function(state){
        return state.filterAcreageReducer.acreageFilterBox;
    });

    console.log('acreageFilterBox', acreageFilterBox);

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
        return modalFilter.is_enable == true && modalFilter.box_type == 'acreage'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function renderRadio()
    {
        return configAcreages.map(function(val, index){
            return (
                <div
                    className={cl.radio_item}
                    key={index}
                    onClick={()=>{
                        dispatch(changeValue(val.value));
                    }}
                >
                    <span>
                        <input
                            id={`acreage_${index}`}
                            type='radio'
                            name='acreage'
                            value={val.value}
                            defaultChecked={JSON.stringify(acreageFilterBox.value) == JSON.stringify(val.value)}
                        ></input>
                    </span>
                    <label htmlFor={`acreage_${index}`}>{val.label}</label>
                </div>
            );
        });
    }

    function handleChangeMinValue(minValue)
    {
        minValue = parseInt(minValue);
        if (isNaN(minValue)) return;
        if (minValue < 0) return;

        dispatch(changeMinValue(minValue));
    }

    function handleFixChangeMinValue()
    {
        if (acreageFilterBox.value[0] > acreageFilterBox.value[1]) {
            dispatch(changeMinValue(acreageFilterBox.value[1] - 5));
        }
    }

    function handleChangeMaxValue(maxValue)
    {
        maxValue = parseInt(maxValue);
        if (isNaN(maxValue)) return;
        if (maxValue < 0) return;

        dispatch(changeMaxValue(maxValue));
    }

    function fixChangeMaxValue()
    {
        if (acreageFilterBox.value[1] < acreageFilterBox.value[0]) {
            let maxValue = parseInt(acreageFilterBox.value[0]) + 5;
            dispatch(changeMaxValue(maxValue));
        }
        if (acreageFilterBox.value[1] > 100) {
            dispatch(changeMaxValue(100));
        }
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
                    <span>Lọc diện tích</span>
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
                    <div className={cl.acreage}>
                        <div className={cl.acreage_input}>
                            <input
                                className={cl.hand_input}
                                value={acreageFilterBox.value[0]}
                                onChange={(e)=>{
                                    handleChangeMinValue(e.target.value);
                                }}
                                onBlur={()=>{
                                    handleFixChangeMinValue();
                                }}
                            ></input>
                            <span>-</span>
                            <input
                                className={cl.hand_input}
                                value={acreageFilterBox.value[1]}
                                onChange={(e)=>{
                                    handleChangeMaxValue(e.target.value);
                                }}
                                onBlur={(e)=>{
                                    fixChangeMaxValue(e.target.value);
                                }}
                            ></input>
                        </div>
                        <div className={cl.acreage_slider}>
                            <PrettoSlider
                                min={0}
                                max={100}
                                value={acreageFilterBox.value}
                                disableSwap
                                valueLabelDisplay="auto"
                                step={5}
                                onChange={(e, value)=>{
                                    dispatch(changeValue(value));
                                }}
                            />
                        </div>
                        <div className={cl.radio_list}>
                            {renderRadio()}
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
                            handleDisableModalFilter({
                                is_enable: false,
                            });
                            dispatch(submitValue());
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

export default ModalFilterAcreage;
