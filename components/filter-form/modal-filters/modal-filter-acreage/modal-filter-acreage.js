import React, { useState } from 'react';
import cl from './modal-filter-acreage.module.css';
import Slider from '@mui/material/Slider';

const ModalFilterAcreage = () => {

    let [value, setValue] = useState([15, 30]);

    const configAcreages = [
        {
            value: ['15', '30'],
            label: '15 - 30 mét'
        },
        {
            value: ['30', '40'],
            label: '30 - 40 mét'
        },
        {
            value: ['40', '50'],
            label: '40 - 50 mét'
        },
        {
            value: ['50', '60'],
            label: '50 - 60 mét'
        },
        {
            value: ['60', '70'],
            label: '60 - 70 mét'
        },
        {
            value: ['70', '80'],
            label: '70 - 80 mét'
        },
        {
            value: ['80', '90'],
            label: '80 - 90 mét'
        },
        {
            value: ['90', '100'],
            label: '90 - 100 mét'
        },
    ];

    function renderRadio()
    {
        return configAcreages.map(function(val, index){
            return (
                <div
                    className={cl.radio_item}
                    key={index}
                    onClick={()=>{
                        setValue(val.value);
                    }}
                >
                    <span>
                        <input
                            id={`acreage_${index}`}
                            type='radio'
                            name='acreage'
                            value={val.value}
                            checked={JSON.stringify(value) == JSON.stringify(val.value)}
                        ></input>
                    </span>
                    <label htmlFor={`acreage_${index}`}>{val.label}</label>
                </div>
            );
        });
    }

    function handleChangeMinValue(minValue)
    {
        let oldValue = [...value];
        minValue = parseInt(minValue);
        if (isNaN(minValue)) return;
        if (minValue > oldValue[1]) return;
        if (minValue < 0) return;

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
        if (maxValue > 100) return;

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
            maxValue = parseInt(oldValue[0]) + 5;
        }

        setValue([
            oldValue[0],
            maxValue
        ]);
    }

    return (
        <div className={cl.acreage}>
            <div className={cl.acreage_input}>
                <input
                    className={cl.hand_input}
                    value={value[0]}
                    onChange={(e)=>{
                        handleChangeMinValue(e.target.value);
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
            <div className={cl.acreage_slider}>
                <Slider
                    min={0}
                    max={100}
                    value={value}
                    disableSwap
                    valueLabelDisplay="auto"
                    step={5}
                    onChange={(e, value)=>{
                        setValue(value);
                    }}
                />
            </div>
            <div className={cl.radio_list}>
                {renderRadio()}
            </div>
        </div>
    );
}

export default ModalFilterAcreage;
