import React from 'react';
import Modal from '../modal/modal';

const ModalFullName = (props) => {
    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa họ tên"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>Họ tên <span>*</span></label>
                <input className='input w-100'></input>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalFullName;
