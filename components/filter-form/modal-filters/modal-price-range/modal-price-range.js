import React, { useState } from 'react';
import cl from './modal-price-range.module.css';
import { Slider } from '@mui/material';

const ModalPriceRange = () => {

    let [value, setValue] = useState([500000, 3000000]);

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
        <div>
            <div className={cl.preview_range}>
                <div>Từ: <b>{value[0].toLocaleString()}đ</b></div>
                <div>Đến: <b>{value[1].toLocaleString()}đ</b></div>
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
                        return value.toLocaleString() + "đ";
                    }}
                />
            </div>
        </div>
    );
}

export default ModalPriceRange;
