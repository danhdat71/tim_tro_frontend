import React from 'react';
import Modal from '../modal/modal';
import { FEMALE, MALE, OTHER } from '@/config/userGender';

const ModalGender = (props) => {
    let {
        isShowModal,
        onClose,
        value,
        onChange,
        onSubmit,
        errMsg,
        submitBtnDisabled,
    } = props;

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa giới tính"
            subTitle="Để dễ dàng xưng hô"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Giới tính <span>*</span></label>
                <div className='label-group'>
                    <input
                        className='radio-md'
                        type='radio'
                        name='gender'
                        value={MALE}
                        id='male'
                        onChange={onChange}
                        checked={value == MALE}
                    ></input>
                    <label htmlFor='male'>Nam</label>
                </div>
                <div className='label-group'>
                    <input
                        className='radio-md'
                        type='radio'
                        name='gender'
                        value={FEMALE}
                        id='female'
                        onChange={onChange}
                        checked={value == FEMALE}
                    ></input>
                    <label htmlFor='female'>Nữ</label>
                </div>
                <div className='label-group'>
                    <input
                        className='radio-md'
                        type='radio'
                        name='gender'
                        value={OTHER}
                        id='other'
                        onChange={onChange}
                        checked={value == OTHER}
                    ></input>
                    <label htmlFor='other'>Khác</label>
                </div>
                <div className='err-msg'>{errMsg?.gender}</div>
            </div>
        </Modal>
    );
}

export default ModalGender;
