import React, { useState } from 'react';
import cl from './modal-booking.module.css';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { vi } from 'date-fns/locale/vi';
import { dateToYmd, getToday } from '@/helpers/dateHelper';
import Modal from '../modal/modal';
registerLocale('vi', vi)

const ModalBooking = (props) => {
    let [selectedDate, setSelectedDate] = useState(getToday());
    let {showModalBooking, handleShowModalBooking} = props;

    return (
        <Modal
            isShowModal={showModalBooking}
            mobileTop={'10%'}
            top="5%"
            onBackdropClick={()=>{
                handleShowModalBooking(false);
            }}
        >
            <div className={cl.modal_filter_title}>
                <div>
                    <div>Đăng ký hẹn xem trọ</div>
                    <div>Bạn sẽ nhận được thông tin phản hồi sau khi chủ bài đăng xác nhận.</div>
                </div>
                <button
                    type='button'
                    onClick={()=>{
                        handleShowModalBooking(false); 
                    }}
                ><i className="fal fa-times-circle"></i></button>
            </div>
            <div className={cl.modal_filter_main}>
                <div className={cl.form_group}>
                    <label className='label label-block'>Chọn ngày xem <span>*</span></label>
                    <div className='date-picker-1'>
                        <DatePicker
                            locale="vi"
                            className={`${cl.input} input`}
                            minDate={getToday()}
                            selected={selectedDate}
                            onChange={(date)=>{
                                setSelectedDate(dateToYmd(date));
                            }}
                            dateFormat='dd-MM-yyyy'
                        />
                    </div>
                    <div className='err-msg'>Vui lòng chọn ngày xem</div>
                </div>
                <div className={cl.form_group}>
                    <label className='label label-block'>Chọn giờ xem <span>*</span></label>
                    <div className='date-picker-1'>
                        <input type='time' className={`${cl.input} input`}></input>
                    </div>
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
            </div>
            <div className={cl.modal_filter_foot}>
                <button
                    type='button'
                    className={cl.cancel_filter_btn}
                    onClick={()=>{
                        handleShowModalBooking(false);
                    }}
                >
                    <span>Đóng</span>
                </button>
                <button
                    type='button'
                    className={cl.apply_filter_btn}
                    onClick={()=>{
                        handleShowModalBooking(false);
                    }}
                >
                    <span>Hẹn xem ngay</span>
                    <span><i className="fal fa-check"></i></span>
                </button>
            </div>
        </Modal>
    );
}

export default ModalBooking;
