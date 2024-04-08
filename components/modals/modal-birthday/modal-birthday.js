import React from 'react';
import Modal from '../modal/modal';
import Calendar from 'react-calendar';
import { dateToYmd } from '@/helpers/dateHelper';

const ModalBirthday = (props) => {
    let {
        isShowModal,
        onClose,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa ngày sinh"
            subTitle="Bạn có thể chia sẻ trang cá nhân cho mọi người tìm trọ"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>Ngày sinh <span>*</span></label>
                <Calendar
                    className='calendar'
                    locale="vi"
                    onChange={(value)=>{
                        
                    }}
                />
                <div className='err-msg'>Có lỗi validate</div>
            </div>
        </Modal>
    );
}

export default ModalBirthday;
