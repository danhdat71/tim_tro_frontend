import React, { memo, useRef, useState } from 'react';
import cl from './modal-report.module.css';
import Modal from '../modal/modal';
import { MAX_DESCRIPTION, getOptions } from '@/config/productReport';
import InputGroup from '@/components/inputs/input-group/input-group';
import TextareaInputWithCount from '@/components/inputs/textarea-input-with-count/textarea-input-with-count';

const ModalReport = (props) => {

    let {
        showModalReport,
        handleShowModalReport,
        onSubmit,
        errors = {},
        productId,
        disableSubmitReport = false,
    } = props;

    let categories = useRef(getOptions());
    let [inputData, setInputData] = useState({
        product_id : productId,
    });

    function handleSetInputData(key, value) {
        let newInputData = {...inputData};
        newInputData[key] = value;
        setInputData(newInputData);
    }

    function renderCategories() {
        return categories.current.map(function(val, index) {
            return (
                <div
                    key={index} className='label-group'
                    onClick={()=>{
                        handleSetInputData('report_type', val.value);
                    }}
                >
                    <input
                        id={`checkbox_${index}`}
                        type='checkbox'
                        value={val.value}
                        className='checkbox-md'
                        checked={inputData.report_type == val.value}
                    ></input>
                    <label
                        htmlFor={`checkbox_${index}`}
                        className='label-right'
                    >{val.label}</label>
                </div>
            );
        });
    }

    return (
        <Modal
            isShowModal={showModalReport}
            mobileTop={'10%'}
            top="5%"
            title="Báo cáo vi phạm"
            subTitle="Chúng tôi sẽ xem xét bài viết này"
            submitBtnText="Gửi báo cáo"
            submitBtnIcon={<i className="far fa-paper-plane"></i>}
            onClose={()=>{
                handleShowModalReport(false);
            }}
            onSubmit={()=>{
                onSubmit(inputData);
            }}
            submitBtnDisabled={disableSubmitReport}
        >
            <div className={cl.group_info}>
                <div className='form-group'>
                    <label className='label label-block' htmlFor='full_name'>Họ tên <span>*</span></label>
                    <InputGroup
                        type="text"
                        min="5"
                        max="50"
                        errMsg={errors?.full_name}
                        onChange={(value)=>{
                            handleSetInputData('full_name', value);
                        }}
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block' htmlFor='email'>Email <span>*</span></label>
                    <InputGroup
                        type="text"
                        min="10"
                        max="100"
                        errMsg={errors?.email}
                        onChange={(value)=>{
                            handleSetInputData('email', value);
                        }}
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block' htmlFor='tel'>Số điện thoại <span>*</span></label>
                    <InputGroup
                        type="number"
                        min="10"
                        max="50"
                        errMsg={errors?.tel}
                        onChange={(value)=>{
                            handleSetInputData('tel', value);
                        }}
                    ></InputGroup>
                </div>
            </div>

            <div className={cl.group_info}>
                <div className='form-group'>
                    <label className='label label-block'>Loại vi phạm <span>*</span></label>
                    {renderCategories()}
                    <div className='err-msg'>{errors?.report_type}</div>
                </div>
            </div>

            <div className={cl.group_info}>
                <div className='form-group'>
                    <label htmlFor='description' className='label label-block'>Mô tả</label>
                    <TextareaInputWithCount
                        className="textarea w-100"
                        isDisableOnMax={true}
                        max={MAX_DESCRIPTION}
                        errMsg={errors?.description}
                        style={{height:'120px'}}
                        onChange={(value)=>{
                            handleSetInputData('description', value);
                        }}
                    ></TextareaInputWithCount>
                </div>
            </div>
        </Modal>
    );
}

export default memo(ModalReport);
