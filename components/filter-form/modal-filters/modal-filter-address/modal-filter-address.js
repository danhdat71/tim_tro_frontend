"use client";

import React, { memo, useEffect, useState } from 'react';
import cl from './modal-filter-address.module.css';
import Select from 'react-select';
import Modal from '@/components/modals/modal/modal';
import axios from '@/helpers/http-requests/axios';
import { useRouter } from 'next/router';

const ModalFilterAddress = (props) => {

    let {
        onSubmit,
        onClose,
        isShowModal = false,
    } = props;

    const router = useRouter();

    // List
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    // Seleteced
    const [selected, setSelected] = useState({
        province: {
            label: router?.query?.province_label || 'Tỉnh/Thành',
            value: router?.query?.province_id || '',
        },
        district: {
            label: router?.query?.district_label || 'Quận/Huyện',
            value: router?.query?.district_id || '',
        },
        ward: {
            label: router?.query?.ward_label || 'Phường/Xã/Thị Trấn',
            value: router?.query?.ward_label || '',
        }
    });

    useEffect(function(){
        axios.get(`${process.env.API}/location/get-provinces`)
            .then(function(res) {
                if (res.status == 200) {
                    setProvinces(res.data);
                }
            });
    }, []);

    function handleSelectedProvince(payload) {
        // Set seleted provinces
        let newSeletect = {...selected};
        newSeletect.province = payload;
        newSeletect.district = {'label' : 'Quận/Huyện'};
        newSeletect.ward = {'label' : 'Phường/Xã/Thị Trấn'};
        setSelected(newSeletect);
        // Get districts
        axios.get(`${process.env.API}/location/get-districts?province_id=${payload.value}`)
            .then(function(res) {
                if (res.status == 200) {
                    setDistricts(res.data);
                }
            });
    }

    function handleSelectedDistrict(payload) {
        // Set seleted provinces
        let newSeletect = {...selected};
        newSeletect.district = payload;
        newSeletect.ward = {'label' : 'Phường/Xã/Thị Trấn'};
        setSelected(newSeletect);
        // Get wards
        axios.get(`${process.env.API}/location/get-wards?district_id=${payload.value}`)
            .then(function(res) {
                if (res.status == 200) {
                    setWards(res.data);
                }
            });
    }

    function handleSelectedWard(payload) {
        // Set seleted provinces
        let newSeletect = {...selected};
        newSeletect.ward = payload;
        setSelected(newSeletect);
    }

    return (
        <Modal
            isShowModal={isShowModal}
            onClose={onClose}
            title="Lọc địa điểm"
            onRefresh={()=>{
                setDistricts([]);
                setWards([]);
                setSelected({
                    province: {
                        label: 'Tỉnh/Thành',
                        value: '',
                    },
                    district: {
                        label: 'Quận/Huyện',
                        value: '',
                    },
                    ward: {
                        label: 'Phường/Xã/Thị Trấn',
                        value: '',
                    }
                });
            }}
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            submitBtnDisabled={false}
            onSubmit={()=>{
                onClose();
                onSubmit(selected);
            }}
        >
            <div className={cl.filter_address}>
                <div className={cl.group_search}>
                    <label className='label label-block'>Tỉnh/Thành</label>
                    <Select
                        onChange={(selectedOption)=>{
                            handleSelectedProvince(selectedOption);
                        }}
                        options={provinces}
                        maxMenuHeight={190}
                        value={selected.province}
                    />
                </div>
                <div className={cl.group_search}>
                    <label className='label label-block'>Quận/Huyện</label>
                    <Select
                        onChange={(selectedOption)=>{
                            handleSelectedDistrict(selectedOption);
                        }}
                        options={districts}
                        maxMenuHeight={190}
                        value={selected.district}
                    />
                </div>
                <div className={cl.group_search}>
                    <label className='label label-block'>Xã/Phường/Thị Trấn</label>
                    <Select
                        onChange={(selectedOption)=>{
                            handleSelectedWard(selectedOption);
                        }}
                        options={wards}
                        maxMenuHeight={190}
                        value={selected.ward}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default memo(ModalFilterAddress);
