import React, { useState } from 'react';
import cl from './modal-filter-acreage.module.css';
import { PrettoSlider } from '@/config/mui';
import Modal from '@/components/modals/modal/modal';

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

const ModalFilterAcreage = (props) => {

    let {
        onSubmit,
        onClose,
        isShowModal,
    } = props;

    let [seleted, setSelected] = useState([0, 100]);

    function renderRadio()
    {
        return configAcreages.map(function(val, index){
            return (
                <div
                    className='label-group'
                    key={index}
                    onClick={()=>{
                        setSelected(val.value);
                    }}
                >
                    <input
                        className='radio-md'
                        id={`acreage_${index}`}
                        type='radio'
                        name='acreage'
                        value={val.value}
                        defaultChecked={JSON.stringify(seleted) == JSON.stringify(val.value)}
                    ></input>
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

        let newSeleted = [...seleted];
        newSeleted[0] = minValue;
        setSelected(newSeleted);
    }

    function handleFixChangeMinValue()
    {
        if (seleted[0] > seleted[1]) {
            let newSeleted = [...seleted];
            newSeleted[0] = newSeleted[1] - 5;
            setSelected(newSeleted);
        }
    }

    function handleChangeMaxValue(maxValue)
    {
        maxValue = parseInt(maxValue);
        if (isNaN(maxValue)) return;
        if (maxValue < 0) return;

        let newSeleted = [...seleted];
        newSeleted[1] = maxValue;
        setSelected(newSeleted);
    }

    function fixChangeMaxValue()
    {
        if (seleted[1] < seleted[0]) {
            let maxValue = parseInt(seleted[0]) + 5;
            let newSeleted = [...seleted];
            newSeleted[1] = maxValue;
            setSelected(newSeleted);
        }
        if (seleted[1] > 100) {
            let newSeleted = [...seleted];
            newSeleted[1] = 100;
            setSelected(newSeleted);
        }
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Lọc diện tích"
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            onClose={onClose}
            onRefresh={()=>{
                setSelected([0, 100]);
            }}
            onSubmit={()=>{
                onSubmit(seleted);
                onClose();
            }}
        >
            <div className={cl.acreage}>
                <div className={`${cl.acreage_input} form-group`}>
                    <input
                        className={`${cl.hand_input} input`}
                        value={seleted[0]}
                        onChange={(e)=>{
                            handleChangeMinValue(e.target.value);
                        }}
                        onBlur={()=>{
                            handleFixChangeMinValue();
                        }}
                    ></input>
                    <span>-</span>
                    <input
                        className={`${cl.hand_input} input`}
                        value={seleted[1]}
                        onChange={(e)=>{
                            handleChangeMaxValue(e.target.value);
                        }}
                        onBlur={(e)=>{
                            fixChangeMaxValue(e.target.value);
                        }}
                    ></input>
                </div>
                <div className={`${cl.acreage_slider} form-group`}>
                    <PrettoSlider
                        min={0}
                        max={100}
                        value={seleted}
                        disableSwap
                        valueLabelDisplay="auto"
                        step={5}
                        onChange={(e, value)=>{
                            setSelected(value);
                        }}
                    />
                </div>
                <div className={`${cl.radio_list} form-group`}>
                    {renderRadio()}
                </div>
            </div>
        </Modal>
    );
}

export default ModalFilterAcreage;
