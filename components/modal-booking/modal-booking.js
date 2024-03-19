import React, { useState } from 'react';
import cl from './modal-booking.module.css';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { vi } from 'date-fns/locale/vi';
import { dateToYmd, getToday } from '@/helpers/dateHelper';
registerLocale('vi', vi)

const ModalBooking = () => {
    let [selectedDate, setSelectedDate] = useState(getToday());
    console.log(selectedDate);

    return (
        <div className={cl.wrap_modal_filter}>
            <div
                className={cl.backdrop}
                onClick={()=>{
                    
                }}
            ></div>
            <div className={cl.main_modal_filter}>
                <div className={cl.modal_filter_title}>
                    <span>Đăng ký hẹn xem trọ</span>
                    <button
                        type='button'
                        onClick={()=>{
                           
                        }}
                    ><i className="fal fa-times-circle"></i></button>
                </div>
                <div className={cl.modal_filter_main}>
                    <div className={cl.form_group}>
                        <label>Chọn ngày xem <span>*</span></label>
                        <div className='date-picker-1'>
                            <DatePicker
                                locale="vi"
                                className={cl.input}
                                minDate={getToday()}
                                selected={selectedDate}
                                onChange={(date)=>{
                                    setSelectedDate(dateToYmd(date));
                                }}
                                dateFormat='dd-MM-yyyy'
                            />
                        </div>
                    </div>
                    <div className={cl.form_group}>
                        <label>Chọn giờ xem <span>*</span></label>
                        <div className='date-picker-1'>
                            <input type='time' className={cl.input}></input>
                        </div>
                    </div>
                    <div className={cl.form_group}>
                        <label>Xem khoảng <span>*</span></label>
                        <select className={cl.select}>
                            <option>10 phút</option>
                            <option>15 phút</option>
                            <option>20 phút</option>
                            <option>25 phút</option>
                            <option>30 phút</option>
                        </select>
                    </div>
                </div>
                <div className={cl.modal_filter_foot}>
                    <button
                        type='button'
                        className={cl.cancel_filter_btn}
                        onClick={()=>{
                            
                        }}
                    >
                        <span>Đóng</span>
                    </button>
                    <button
                        type='button'
                        className={cl.apply_filter_btn}
                        onClick={()=>{
                            
                        }}
                    >
                        <span>Hẹn xem ngay</span>
                        <span><i className="fal fa-check"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalBooking;
