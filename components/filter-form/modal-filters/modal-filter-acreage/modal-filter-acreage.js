import React from 'react';
import cl from './modal-filter-acreage.module.css';

const ModalFilterAcreage = () => {
    const configAcreages = [
        {
            value: '15,30',
            label: '15 - 30 mét'
        },
        {
            value: '30,40',
            label: '30 - 40 mét'
        },
        {
            value: '40,50',
            label: '40 - 50 mét'
        },
        {
            value: '50,60',
            label: '50 - 60 mét'
        },
        {
            value: '60,70',
            label: '60 - 70 mét'
        },
        {
            value: '70,80',
            label: '70 - 80 mét'
        },
        {
            value: '80,90',
            label: '80 - 90 mét'
        },
        {
            value: '90,100',
            label: '90 - 100 mét'
        },
        {
            value: '100,99999',
            label: 'Trên 100 mét'
        }
    ];

    function renderRadio()
    {
        return configAcreages.map(function(val, index){
            return (
                <div className={cl.radio_item} key={index}>
                    <span>
                        <input id={`acreage_${index}`} type='radio' name='acreage' value={val.value}></input>
                    </span>
                    <label htmlFor={`acreage_${index}`}>{val.label}</label>
                </div>
            );
        });
    }

    return (
        <div className={cl.acreage}>
            <div className={cl.acreage_input}>
                <input className={cl.hand_input}></input>
                <span>-</span>
                <input className={cl.hand_input}></input>
            </div>
            <div className={cl.radio_list}>
                {renderRadio()}
            </div>
        </div>
    );
}

export default ModalFilterAcreage;
