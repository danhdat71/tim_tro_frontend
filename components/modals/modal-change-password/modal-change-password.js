import React from 'react';
import Modal from '../modal/modal';
import InputPassword from '@/components/inputs/input-password/input-password';

const ModalChangePassword = (props) => {
    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Đổi mật khẩu"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu cũ <span>*</span></label>
                <InputPassword className='input'></InputPassword>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mật khẩu mới <span>*</span></label>
                <InputPassword className='input'></InputPassword>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Nhập lại mật khẩu mới <span>*</span></label>
                <InputPassword className='input'></InputPassword>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalChangePassword;
