import React from 'react';
import Select from 'react-select';
import cl from './input-address.module.css';

const options = [
    { value: 'hcm', label: 'Hồ Chí Minh' },
    { value: 'kg', label: 'Kiên Giang' },
    { value: 'hn', label: 'Hà Nội' },
];

const InputAddress = () => {
    return (
        <div className={cl.wrap_address}>
            <div className={cl.wrap_select}>
                <div>
                    <Select
                        className={`${cl.select}`}
                        value={'hcm'}
                        onChange={(selectedOption)=>{
                            
                        }}
                        options={options}
                        isDisabled={false}
                        placeholder="Tỉnh/Thành phố"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
                <div>
                    <Select
                        className={`${cl.select}`}
                        value={'hcm'}
                        onChange={(selectedOption)=>{
                            
                        }}
                        options={options}
                        isDisabled={true}
                        placeholder="Quận/Huyện"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
                <div>
                    <Select
                        className={`${cl.select}`}
                        value={'hcm'}
                        onChange={(selectedOption)=>{
                            
                        }}
                        options={options}
                        isDisabled={true}
                        placeholder="Phường/Xã/Thị Trấn"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
                <div>
                    <Select
                        className={`${cl.select}`}
                        value={'hcm'}
                        onChange={(selectedOption)=>{
                            
                        }}
                        options={options}
                        isDisabled={true}
                        placeholder="Đường"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
            </div>
        </div>
    );
}

export default InputAddress;
