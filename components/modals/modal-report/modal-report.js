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
            title="Báo cáo vi phạm"
            subTitle="Chúng tôi sẽ xem xét bài viết này"
            submitBtnText="Gửi báo cáo"
            submitBtnIcon={<i class="far fa-paper-plane"></i>}
            onClose={()=>{
                handleShowModalReport(false);
            }}
            onSubmit={()=>{
                handleShowModalReport(false);
            }}
        >
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
        </Modal>
    );
}

export default memo(ModalReport);
