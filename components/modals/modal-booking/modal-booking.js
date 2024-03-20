import React, { useState } from 'react';
import cl from './modal-booking.module.css';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import { dateToYmd, getToday } from '@/helpers/dateHelper';
import Modal from '../modal/modal';

const ModalBooking = (props) => {
    let [selectedDate, setSelectedDate] = useState(getToday());
    let {showModalBooking, handleShowModalBooking} = props;

    return (
        <Modal
            isShowModal={showModalBooking}
            mobileTop='10%'
            top='5%'
            title="Đăng ký xem trọ"
            subTitle="Bạn sẽ nhận được thông tin phản hồi sau khi chủ bài đăng xác nhận."
            submitBtnText="Hẹn xem ngay"
            submitBtnIcon={<i className="fal fa-check"></i>}
            onClose={()=>{
                handleShowModalBooking(false);
            }}
            onSubmit={()=>{
                handleShowModalBooking(false);
            }}
        >
            <div className={cl.form_group}>
                <label className='label label-block'>Chọn ngày xem <span>*</span></label>
                <Calendar
                    className='calendar'
                    locale="vi"
                    minDate={new Date()}
                    onChange={(value)=>{
                        console.log(dateToYmd(value));
                    }}
                />
                <div className='err-msg'>Vui lòng chọn ngày xem</div>
            </div>
            <div className={cl.form_group}>
                <label className='label label-block'>Chọn giờ xem <span>*</span></label>
                <input type='time' className={`${cl.input} input`}></input>
                <div className='err-msg'>Vui lòng chọn giờ xem</div>
            </div>
        </Modal>
    );
}

export default ModalBooking;
