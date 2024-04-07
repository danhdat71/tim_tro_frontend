import React from 'react';
import Modal from '../modal/modal';
import userTypeConst, {getStringValue} from '../../../config/userType';

const ModalReviewRegister = (props) => {

    let {
        registData,
        isShowModal,
        onClose,
        onSubmit,
        submitBtnDisabled,
    } = props;

    return (
        <Modal
            isShowModal={isShowModal}
            title="Xem lại thông tin đăng ký"
            submitBtnText="Xác nhận"
            submitBtnIcon={<i className="fal fa-check"></i>}
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Họ tên</label>
                <input className='input w-100' value={registData?.full_name} disabled></input>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Email</label>
                <input className='input w-100' value={registData?.email} disabled></input>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Số điện thoại</label>
                <input className='input w-100' value={registData?.tel} disabled></input>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Loại tài khoản</label>
                <input className='input w-100' value={getStringValue(registData?.user_type)} disabled></input>
            </div>
        </Modal>
    );
}

export default ModalReviewRegister;
