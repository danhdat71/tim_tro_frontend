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
            <div className={cl.form_group}>
                <label className='label label-block'>Thời gian xem <span>*</span></label>
                <select className={`${cl.select} select`}>
                    <option>Khoảng 10 phút</option>
                    <option>Khoảng 15 phút</option>
                    <option>Khoảng 20 phút</option>
                    <option>Khoảng 25 phút</option>
                    <option>Khoảng 30 phút</option>
                    <option>Khoảng 35 phút</option>
                    <option>Khoảng 40 phút</option>
                </select>
                <div className='err-msg'>Vui lòng chọn thời gian xem</div>
            </div>
        </Modal>
    );
}

export default ModalBooking;
