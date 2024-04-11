import React from 'react';
import Modal from '../modal/modal';
import InputGroup from '@/components/inputs/input-group/input-group';

const ModalTel = (props) => {
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
            title="Sửa số điện thoại"
            subTitle="Người khác có thể liên hệ bạn thông qua số cung cấp"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Số điện thoại liên hệ <span>*</span></label>
                <InputGroup
                    type="text"
                    min="10"
                    max="50"
                    errMsg={errMsg?.tel}
                    value={value}
                    onChange={onChange}
                ></InputGroup>
            </div>
        </Modal>
    );
}

export default ModalTel;
