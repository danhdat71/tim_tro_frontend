import React from 'react';
import Modal from '../modal/modal';

const ModalGender = (props) => {
    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa giới tính"
            subTitle="Để dễ dàng xưng hô"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>Giới tính <span>*</span></label>
                <div className='label-group'>
                    <input
                        className='radio-md'
                        type='radio'
                        name='gender'
                        value={1}
                        id='male'
                    ></input>
                    <label htmlFor='male'>Nam</label>
                </div>
                <div className='label-group'>
                    <input
                        className='radio-md'
                        type='radio'
                        name='gender'
                        value={2}
                        id='female'
                    ></input>
                    <label htmlFor='female'>Nữ</label>
                </div>
                <div className='label-group'>
                    <input
                        className='radio-md'
                        type='radio'
                        name='gender'
                        value={3}
                        id='other'
                    ></input>
                    <label htmlFor='other'>Khác</label>
                </div>
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalGender;
