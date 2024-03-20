import React from 'react';
import Modal from '../modal/modal';

const ModalReviewRegister = () => {
    return (
        <Modal
            isShowModal={true}
            title="Xem lại thông tin đăng ký"
            submitBtnText="Xác nhận"
            submitBtnIcon={<i className="fal fa-check"></i>}
        >
            <div className='form-group'>
                <label className='label label-block'>Họ tên</label>
                <input className='input w-100' value='Nguyễn Văn A' disabled></input>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Email</label>
                <input className='input w-100' value='nguyenvana@gmail.com' disabled></input>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Số điện thoại</label>
                <input className='input w-100' value='0123456789' disabled></input>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Loại tài khoản</label>
                <input className='input w-100' value='Tìm trọ' disabled></input>
            </div>
        </Modal>
    );
}

export default ModalReviewRegister;
