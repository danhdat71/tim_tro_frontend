import React from 'react';
import Modal from '../modal/modal';

const ModalAppId = (props) => {

    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa ID"
            subTitle="Bạn có thể chia sẻ trang cá nhân cho mọi người tìm trọ"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>App ID <span>*</span></label>
                <input className='input w-100'></input>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalAppId;
