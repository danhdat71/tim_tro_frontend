import React, { memo, useEffect, useState } from 'react';
import Select from 'react-select';
import cl from './input-address.module.css';
import axios from '../../../helpers/http-requests/axios';

const InputAddress = (props) => {

    let {
        onChange
    } = props;

    let [provinces, setProvinces] = useState();
    let [districts, setDistricts] = useState();
    let [wards, setWards] = useState();
    let [selectedData, setSelectedData] = useState();

    useEffect(function(){
        axios.get('/location/get-provinces', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(function(res){
            if (res.status == 200) {
                setProvinces(res.data);
            }
        });
    }, []);

    useEffect(function(){
        onChange(selectedData);
    }, [selectedData]);

    function handleSetSelectedData(key, value) {
        let newSelectedData = {...selectedData};
        if (key == 'province_id') {
            newSelectedData.province_id = value;
            newSelectedData.district_id = null;
            newSelectedData.ward_id = null;
            setSelectedData(newSelectedData);
            axios.get(`/location/get-districts?province_id=${value.value}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(function(res){
                if (res.status == 200) {
                    setDistricts(res.data);
                    setSelectedData(newSelectedData);
                }
            });
        } else if (key == 'district_id') {
            newSelectedData.district_id = value;
            newSelectedData.ward_id = null;
            setSelectedData(newSelectedData);
            axios.get(`/location/get-wards?district_id=${value.value}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(function(res){
                if (res.status == 200) {
                    setWards(res.data);
                    setSelectedData(newSelectedData);
                }
            });
        } else if (key == 'ward_id') {
            newSelectedData.ward_id = value;
            setSelectedData(newSelectedData);
        }
    }

    return (
        <div className={cl.wrap_address}>
            <div className={cl.wrap_select}>
                <div>
                    <Select
                        className={`${cl.select}`}
                        onChange={(selectedOption)=>{
                            handleSetSelectedData('province_id', selectedOption);
                        }}
                        value={selectedData?.province_id}
                        options={provinces}
                        isDisabled={false}
                        placeholder="Tỉnh/Thành phố"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
                <div>
                    <Select
                        className={`${cl.select}`}
                        onChange={(selectedOption)=>{
                            handleSetSelectedData('district_id', selectedOption);
                        }}
                        value={selectedData?.district_id}
                        options={districts}
                        isDisabled={districts ? false : true}
                        placeholder="Quận/Huyện"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
            </div>
            <div>
                <div>
                    <Select
                        className={`${cl.select}`}
                        onChange={(selectedOption)=>{
                            handleSetSelectedData('ward_id', selectedOption);
                        }}
                        value={selectedData?.ward_id}
                        options={wards}
                        isDisabled={wards ? false : true}
                        placeholder="Phường/Xã/Thị Trấn"
                    ></Select>
                    <div className='err-msg'></div>
                </div>
            </div>
        </div>
    );
}

export default memo(InputAddress);
