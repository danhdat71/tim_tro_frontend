import React, { memo, useRef } from 'react';
import cl from './modal-report.module.css';
import Modal from '../modal/modal';

const ModalReport = (props) => {

    let {showModalReport, handleShowModalReport} = props;
    let categories = useRef([
        {id : 1, label: 'Thông tin sai sự thật'},
        {id : 2, label: 'Địa chỉ không tồn tại'},
        {id : 3, label: 'Lừa đảo, đa cấp độc hại, ...'},
        {id : 4, label: 'Ảnh khỏa thân, máu, tự sát, ...'},
        {id : 5, label: 'Bài viết sao chép từ nơi khác'},
        {id : 6, label: 'Khác'},
    ]);

    function renderCategories() {
        return categories.current.map(function(val, index) {
            return (
                <div key={index} className='label-group'>
                    <input
                        id={`checkbox_${index}`}
                        type='checkbox'
                        value={val.id}
                        className='checkbox-md'
                    ></input>
                    <label
                        htmlFor={`checkbox_${index}`}
                        className='label-right'
                    >{val.label}</label>
                </div>
            );
        });
    }

    return (
        <Modal
            isShowModal={showModalReport}
            mobileTop={'10%'}
            top="5%"
            onBackdropClick={()=>{
                handleShowModalReport(false);
            }}
        >
            <div className={cl.modal_filter_title}>
                <div>
                    <div>Báo cáo tin đăng</div>
                    <div>Chúng tôi sẽ tiến hành xem xét báo cáo của bạn.</div>
                </div>
                <button
                    type='button'
                    onClick={()=>{
                        handleShowModalReport(false);
                    }}
                ><i className="fal fa-times-circle"></i></button>
            </div>

            <div className={cl.group_info}>
                <div className='form-group'>
                    <label className='label label-block' htmlFor='full_name'>Họ tên <span>*</span></label>
                    <input className={`input ${cl.input}`} id='full_name'></input>
                    <div className='err-msg'>Vui lòng điền họ tên</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block' htmlFor='email'>Email <span>*</span></label>
                    <input className={`input ${cl.input}`} id='email'></input>
                    <div className='err-msg'>Vui lòng điền email</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block' htmlFor='tel'>Số điện thoại <span>*</span></label>
                    <input className={`input ${cl.input}`} id='tel'></input>
                    <div className='err-msg'>Vui lòng điền số điện thoại</div>
                </div>
            </div>

            <div className={cl.group_info}>
                <div className='form-group'>
                    <label className='label label-block'>Loại vi phạm <span>*</span></label>
                    {renderCategories()}
                    <div className='err-msg'>Vui lòng chọn loại vi phạm</div>
                </div>
            </div>

            <div className={cl.group_info}>
                <div className='form-group'>
                    <label htmlFor='description' className='label label-block'>Mô tả</label>
                    <textarea id='description' className={`textarea ${cl.textarea}`}></textarea>
                    <div className='err-msg'>Mô tả quá 200 ký tự</div>
                </div>
            </div>

            <div className={cl.modal_filter_foot}>
                <button
                    type='button'
                    className={cl.cancel_filter_btn}
                    onClick={()=>{
                        handleShowModalReport(false);
                    }}
                >
                    <span>Đóng</span>
                </button>
                <button
                    type='button'
                    className={cl.apply_filter_btn}
                    onClick={()=>{
                        handleShowModalReport(false);
                    }}
                >
                    <span>Gửi báo cáo</span>
                    <span><i className="fal fa-paper-plane"></i></span>
                </button>
            </div>
        </Modal>
    );
}

export default memo(ModalReport);
