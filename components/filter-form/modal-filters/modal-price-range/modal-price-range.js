import React, { useState } from 'react';
import cl from './modal-price-range.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';
import { changeMaxValue, changeMinValue, changeValue, resetValue, submitValue } from '@/redux/features/filter_box/price_range_box';
import { PrettoSlider } from '@/config/mui';

const ModalPriceRange = () => {

    const dispatch = useDispatch();

    const priceFilterBox = useAppSelector(function(state){
        return state.filterPriceReducer.priceFilterBox;
    });

    const modalFilter = useAppSelector(function(state){
        return state.modalFilterReducer.modalFilter;
    });

    function handleDisableModalFilter(pushData)
    {
        dispatch(toggleModalFilter(pushData));
    }

    function isEnableModalFilter()
    {
        return modalFilter.is_enable == true && modalFilter.box_type == 'price_range'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleChangeMinValue(minValue)
    {
        minValue = parseInt(minValue);
        if (isNaN(minValue)) return;

        dispatch(changeMinValue(minValue));
    }

    function fixChangeMinValue()
    {
        if (priceFilterBox.value[0] > priceFilterBox.value[1]) {
            let minValue = parseInt(priceFilterBox.value[1]) - 500000;
            dispatch(changeMinValue(minValue));
        }

        if (priceFilterBox.value[0] < 500000) {
            dispatch(changeMinValue(500000));
        }
    }

    function handleChangeMaxValue(maxValue)
    {
        maxValue = parseInt(maxValue);
        if (isNaN(maxValue)) return;

        dispatch(changeMaxValue(maxValue));
    }

    function fixChangeMaxValue()
    {
        if (priceFilterBox.value[1] < priceFilterBox.value[0]) {
            let maxValue = parseInt(priceFilterBox.value[0]) + 500000;
            dispatch(changeMaxValue(maxValue));
        }
        if (priceFilterBox.value[1] > 20000000) {
            dispatch(changeMaxValue(20000000));
        }
    }

    console.log('priceFilterBox', priceFilterBox);

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
                    <span>Lọc khoảng giá</span>
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
                    <div className={cl.preview_range}>
                        <div>Từ: <b>{parseInt(priceFilterBox.value[0]).toLocaleString('en-US')}đ</b></div>
                        <div>Đến: <b>{parseInt(priceFilterBox.value[1]).toLocaleString('en-US')}đ</b></div>
                    </div>
                    <div className={cl.input_range}>
                        <input
                            className={cl.hand_input}
                            value={priceFilterBox.value[0]}
                            onChange={(e)=>{
                                handleChangeMinValue(e.target.value);
                            }}
                            onBlur={()=>{
                                fixChangeMinValue();
                            }}
                        ></input>
                        <span>-</span>
                        <input
                            className={cl.hand_input}
                            value={priceFilterBox.value[1]}
                            onChange={(e)=>{
                                handleChangeMaxValue(e.target.value);
                            }}
                            onBlur={(e)=>{
                                fixChangeMaxValue(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div className={cl.price_slider_wrapper}>
                        <PrettoSlider
                            min={500000}
                            max={20000000}
                            value={priceFilterBox.value}
                            disableSwap
                            valueLabelDisplay="auto"
                            step={100000}
                            onChange={(e, value)=>{
                                dispatch(changeValue(value))
                            }}
                            valueLabelFormat={(value)=>{
                                return value.toLocaleString('en-US') + "đ";
                            }}
                        />
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

export default ModalPriceRange;
