import React from 'react';
import Modal from '../modal/modal';

const ModalTel = (props) => {
    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa số điện thoại"
            subTitle="Người khác có thể liên hệ bạn thông qua số cung cấp"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>Số điện thoại liên hệ <span>*</span></label>
                <input className='input w-100'></input>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalTel;
