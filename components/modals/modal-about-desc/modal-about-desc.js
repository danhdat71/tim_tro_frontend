import React from 'react';
import Modal from '../modal/modal';

const ModalAboutDesc = (props) => {
    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Giới thiệu"
            subTitle="Bạn có thể giới thiệu về các phòng trọ của mình"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>Giới thiệu</label>
                <textarea className='textarea w-100' rows={10}></textarea>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalAboutDesc;
