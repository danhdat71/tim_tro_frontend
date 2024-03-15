"use client";

import React from 'react';
import cl from './modal-filter-address.module.css';
import Select from 'react-select';

const ModalFilterAddress = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <div className={cl.filter_address}>
            <div className={cl.group_search}>
                <label>Tỉnh/Thành</label>
                <Select
                    // value={selectedOption}
                    onChange={(selectedOption)=>{
                        console.log(selectedOption);
                    }}
                    options={options}
                />
            </div>
            <div className={cl.group_search}>
                <label>Quận/Huyện</label>
                <Select
                    // value={selectedOption}
                    onChange={(selectedOption)=>{
                        console.log(selectedOption);
                    }}
                    options={options}
                />
            </div>
            <div className={cl.group_search}>
                <label>Xã/Phườnga/Thị Trấn</label>
                <Select
                    // value={selectedOption}
                    onChange={(selectedOption)=>{
                        console.log(selectedOption);
                    }}
                    options={options}
                />
            </div>
        </div>
    );
}

export default ModalFilterAddress;
