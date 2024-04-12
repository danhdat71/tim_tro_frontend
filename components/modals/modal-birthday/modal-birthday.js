import React from 'react';
import Modal from '../modal/modal';
import Calendar from 'react-calendar';
import { dateToYmd } from '@/helpers/dateHelper';

const ModalBirthday = (props) => {
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
            title="Sửa ngày sinh"
            subTitle="Bạn có thể chia sẻ trang cá nhân cho mọi người tìm trọ"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Ngày sinh <span>*</span></label>
                <Calendar
                    className='calendar'
                    locale="vi"
                    value={value}
                    onChange={(value)=>{
                        value = dateToYmd(value);
                        onChange(value)
                    }}
                />
                <div className='err-msg'>{errMsg?.birthday}</div>
            </div>
        </Modal>
    );
}

export default ModalBirthday;
