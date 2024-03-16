import React, { useState } from 'react';
import cl from './modal-category.module.css';

const options = [
    { value: 'Nhà nguyên căn', label: 'Nhà nguyên căn' },
    { value: 'Phòng trọ', label: 'Phòng trọ' },
    { value: 'Sleepbox', label: 'Sleepbox' },
    { value: 'Chung cư', label: 'Chung cư' },
];

const ModalCategory = () => {

    let [selecteds, setSelecteds] = useState([]);

    function handleSelect(value)
    {
        let newSelecteds = [...selecteds];
        let index = newSelecteds.findIndex(function(item) {
            return item == value;
        });

        if (index === -1) {
            newSelecteds.push(value);
        } else {
            newSelecteds.splice(index, 1);
        }

        setSelecteds(newSelecteds);
    }

    function renderButtons()
    {
        return options.map(function(value, index) {
            return (
                <button
                    type='button'
                    key={index}
                    className={
                        selecteds.includes(value.value)
                            ? `${cl.input_box} ${cl.active}` 
                            : `${cl.input_box}`
                    }
                    onClick={()=>{
                        handleSelect(value.value);
                    }}
                >{value.label}</button>
            );
        })
    }

    return (
        <div className={cl.filter_category}>
            {renderButtons()}
        </div>
    );
}

export default ModalCategory;
