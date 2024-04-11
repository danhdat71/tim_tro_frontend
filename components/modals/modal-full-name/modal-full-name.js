import React from 'react';
import Modal from '../modal/modal';
import InputGroup from '@/components/inputs/input-group/input-group';

const ModalFullName = (props) => {
    let {
        isShowModal,
        onClose,
        value,
        onChange,
        onSubmit,
        errMsg,
        submitBtnDisabled,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa họ tên"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Họ tên <span>*</span></label>
                <InputGroup
                    type="text"
                    min="5"
                    max="50"
                    errMsg={errMsg?.full_name}
                    value={value}
                    onChange={onChange}
                ></InputGroup>
            </div>
        </Modal>
    );
}

export default ModalFullName;
