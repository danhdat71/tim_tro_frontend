import React, { useState } from 'react';
import cl from './modal-price-range.module.css';
import { Slider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleModalFilter } from '@/redux/features/modal_filter';

const ModalPriceRange = () => {

    let [value, setValue] = useState([500000, 3000000]);

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
        return modalFilter.is_enable == true && modalFilter.box_type == 'price_range'
            ? `${cl.wrap_modal_filter} ${cl.show_modal_filter}`
            : `${cl.wrap_modal_filter}`;
    }

    function handleChangeMinValue(minValue)
    {
        let oldValue = [...value];
        minValue = parseInt(minValue);
        if (isNaN(minValue)) return;

        setValue([
            minValue,
            oldValue[1]
        ]);
    }

    function fixChangeMinValue(minValue)
    {
        let oldValue = [...value];
        minValue = parseInt(minValue);
        if (minValue > oldValue[1]) {
            minValue = parseInt(oldValue[1]) - 500000;
        }

        if (minValue < 500000) {
            minValue = 500000;
        }

        setValue([
            minValue,
            oldValue[1]
        ]);
    }

    function handleChangeMaxValue(maxValue)
    {
        let oldValue = [...value];
        maxValue = parseInt(maxValue);
        if (isNaN(maxValue)) return;

        setValue([
            oldValue[0],
            maxValue
        ]);
    }

    function fixChangeMaxValue(maxValue)
    {
        let oldValue = [...value];
        maxValue = parseInt(maxValue);
        if (maxValue < oldValue[0]) {
            maxValue = parseInt(oldValue[0]) + 500000;
        }
        if (maxValue > 20000000) {
            maxValue = 20000000;
        }

        setValue([
            oldValue[0],
            maxValue
        ]);
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
                        <div>Từ: <b>{parseInt(value[0]).toLocaleString('en-US')}đ</b></div>
                        <div>Đến: <b>{parseInt(value[1]).toLocaleString('en-US')}đ</b></div>
                    </div>
                    <div className={cl.input_range}>
                        <input
                            className={cl.hand_input}
                            value={value[0]}
                            onChange={(e)=>{
                                handleChangeMinValue(e.target.value);
                            }}
                            onBlur={(e)=>{
                                fixChangeMinValue(e.target.value);
                            }}
                        ></input>
                        <span>-</span>
                        <input
                            className={cl.hand_input}
                            value={value[1]}
                            onChange={(e)=>{
                                handleChangeMaxValue(e.target.value);
                            }}
                            onBlur={(e)=>{
                                fixChangeMaxValue(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div className={cl.price_slider_wrapper}>
                        <Slider
                            min={500000}
                            max={20000000}
                            value={value}
                            disableSwap
                            valueLabelDisplay="auto"
                            step={500000}
                            onChange={(e, value)=>{
                                setValue(value);
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
                    <button type='button' className={cl.apply_filter_btn}>
                        <span>Lọc kết quả</span>
                        <span><i className="fal fa-search"></i></span>
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default ModalPriceRange;
