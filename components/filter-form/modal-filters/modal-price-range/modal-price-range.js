import React, { useState } from 'react';
import cl from './modal-price-range.module.css';
import { PrettoSlider } from '@/config/mui';
import Modal from '@/components/modals/modal/modal';

const ModalPriceRange = (props) => {

    let {
        onSubmit,
        onClose,
        isShowModal,
    } = props;

    let [seleted, setSelected] = useState([500000, 20000000]);

    function handleChangeMinValue(minValue)
    {
        minValue = parseInt(minValue);
        if (isNaN(minValue)) return;

        let newSeleted = [...seleted];
        newSeleted[0] = minValue;
        setSelected(newSeleted);
    }

    function fixChangeMinValue()
    {
        if (seleted[0] > seleted[1]) {
            let minValue = parseInt(seleted[1]) - 500000;
            let newSeleted = [...seleted];
            newSeleted[0] = minValue;
            setSelected(newSeleted);
        }

        if (seleted[0] < 500000) {
            let newSeleted = [...seleted];
            newSeleted[0] = 500000;
            setSelected(newSeleted);
        }
    }

    function handleChangeMaxValue(maxValue)
    {
        maxValue = parseInt(maxValue);
        if (isNaN(maxValue)) return;

        let newSeleted = [...seleted];
        newSeleted[1] = maxValue;
        setSelected(newSeleted);
    }

    function fixChangeMaxValue()
    {
        if (seleted[1] < seleted[0]) {
            let maxValue = parseInt(seleted[0]) + 500000;
            let newSeleted = [...seleted];
            newSeleted[0] = maxValue;
            setSelected(newSeleted);
        }
        if (seleted[1] > 20000000) {
            let newSeleted = [...seleted];
            newSeleted[1] = 20000000;
            setSelected(newSeleted);
        }
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Lọc khoảng giá"
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            onClose={onClose}
            onRefresh={()=>{
                setSelected([500000, 20000000]);
            }}
            onSubmit={()=>{
                onSubmit(seleted);
                onClose();
            }}
        >
            <div className={cl.preview_range}>
                <div>Từ: <b>{parseInt(seleted[0]).toLocaleString('en-US')}đ</b></div>
                <div>Đến: <b>{parseInt(seleted[1]).toLocaleString('en-US')}đ</b></div>
            </div>
            <div className={cl.input_range}>
                <input
                    className={`${cl.hand_input} input`}
                    value={seleted[0]}
                    onChange={(e)=>{
                        handleChangeMinValue(e.target.value);
                    }}
                    onBlur={()=>{
                        fixChangeMinValue();
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
            <div className={cl.price_slider_wrapper}>
                <PrettoSlider
                    min={500000}
                    max={20000000}
                    value={seleted}
                    disableSwap
                    valueLabelDisplay="auto"
                    step={100000}
                    onChange={(e, value)=>{
                        setSelected(value)
                    }}
                    valueLabelFormat={(value)=>{
                        return value.toLocaleString('en-US') + "đ";
                    }}
                />
            </div>
        </Modal>
    );
}

export default ModalPriceRange;
