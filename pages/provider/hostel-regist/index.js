import TextareaInputWithCount from '@/components/inputs/textarea-input-with-count/textarea-input-with-count';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import React, { useState } from 'react';
import {
    suggestDescription,
    suggestTitle,
} from '../../../config/suggestion';
import MenuItem from '@mui/material/MenuItem';
import InputAddress from '@/components/inputs/input-address/input-address';
import InputGroup from '@/components/inputs/input-group/input-group';
import cl from './index.module.css';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import InputFiles from '@/components/inputs/input-files/input-files';
import InputMap from '@/components/inputs/input-map/input-map';
import Modal from '@/components/modals/modal/modal';
import ModalPreviewHostel from '@/components/modals/modal-preview-hostel/modal-preview-hostel';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';

const breadcrumbs = [
    {label:'Trang chủ', href:'/'},
    {label:'Đăng tin', href:'/provider/hostel-regist'}
];

const Index = () => {

    let [showPreview, setShowPreview] = useState(false);

    function handleShowPreview(showPreview) {
        setShowPreview(showPreview);
    }

    return (
        <div>
            <Breadcrumb items={breadcrumbs}></Breadcrumb>
            <TitleCenterBig title="Đăng tin cho thuê trọ"></TitleCenterBig>
            <div>
                <div className='form-group'>
                    <label className='label label-block'>Tiêu đề <span>*</span></label>
                    <TextareaInputWithCount
                        className="textarea w-100"
                        placeholder="Cho thuê phòng trọ ABC còn trống giá rẻ"
                        isDisableEnterLine
                        min={20}
                        max={100}
                        onChange={(value)=>{
                            console.log(value);
                        }}
                        helpLabel={suggestTitle()}
                    ></TextareaInputWithCount>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Giá cho thuê <span>*</span></label>
                    <InputGroup
                        type='price'
                        min='1'
                        max='11'
                        onChange={(inputed)=>{
                            console.log('Giá cho thuê', inputed);
                        }}
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Mô tả trọ <span>*</span></label>
                    <TextareaInputWithCount
                        className="textarea w-100"
                        min={20}
                        max={2000}
                        onChange={(value)=>{
                            //
                        }}
                        style={{
                            height: '120px'
                        }}
                        helpLabel={suggestDescription()}
                    ></TextareaInputWithCount>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Địa chỉ <span>*</span></label>
                    <InputAddress></InputAddress>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Địa chỉ chi tiết <span>*</span></label>
                    <InputGroup
                        type='text'
                        min='20'
                        max='200'
                        onChange={(value)=>{
                            console.log(value);
                        }}
                        placeholder="Vị trí để dễ tìm thấy trọ. Ví dụ: 64/62/62 Nguyễn Khoái, Phường 2, Quận 4, TP. Hồ Chí Minh"
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Bản đồ <span>*</span></label>
                    <InputMap address="Tổ 4, Khu phố 1, thị trấn thứ ba, an biên, kiên giang"></InputMap>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Diện tích (mét vuông) <span>*</span></label>
                    <InputGroup
                        type='number'
                        min='1'
                        max='3'
                        onChange={(value)=>{
                            console.log(value);
                        }}
                    ></InputGroup>
                </div>
                <div className={cl.rooms}>
                    <div className='form-group'>
                        <label className='label label-block'>Số phòng ngủ <span>*</span></label>
                        <select className='select w-100'>
                            <option>1 phòng ngủ</option>
                            <option>2 phòng ngủ</option>
                            <option>3 phòng ngủ</option>
                            <option>4 phòng ngủ</option>
                            <option>5 phòng ngủ</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block'>Số phòng vệ sinh <span>*</span></label>
                        <select className='select w-100'>
                            <option>1 phòng vệ sinh</option>
                            <option>2 phòng vệ sinh</option>
                            <option>3 phòng vệ sinh</option>
                        </select>
                    </div>
                </div>
                <div className={cl.other_info}>
                    <div className='form-group'>
                        <label className='label label-block'>Loại sử dụng <span>*</span></label>
                        <select className='select w-100'>
                            <option>Phòng trọ</option>
                            <option>Nhà nguyên căn</option>
                            <option>Sleep Box</option>
                            <option>Chung cư</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block'>Chung chủ <span>*</span></label>
                        <select className='select w-100'>
                            <option>Không chung chủ</option>
                            <option>Chung chủ</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block'>Giờ giấc <span>*</span></label>
                        <select className='select w-100'>
                            <option>Tự do</option>
                            <option>Theo quy định</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block'>Thú nuôi <span>*</span></label>
                        <select className='select w-100'>
                            <option>Không cho phép</option>
                            <option>Cho phép & Cam kết</option>
                            <option>Cho phép tự do</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className='label label-block'>Ảnh minh họa <span>*</span></label>
                    <InputFiles
                        onChange={(files)=>{
                            console.log('onChange', files);
                        }}
                    ></InputFiles>
                </div>
                <div className={cl.buttons}>
                    <ButtonIcon
                        text="Lưu nháp"
                        icon={<i className="fas fa-file"></i>}
                        backgroundColor="transparent"
                        color="#181818"
                        border="1px solid gray"
                    ></ButtonIcon>
                    <ButtonIcon
                        text="Tiếp tục"
                        icon={<i className="far fa-angle-right"></i>}
                        backgroundColor="rgb(0, 153, 91)"
                        color="white"
                        onClick={()=>{
                            handleShowPreview(true);
                        }}
                    ></ButtonIcon>
                </div>
            </div>
            <Modal
                isShowModal={showPreview}
                title="Xem lại tin đăng"
                subTitle="Sau khi đăng tải, bài đăng của bạn sẽ tiếp cận đến mọi người sớm nhất"
                top={'5%'}
                mobileTop={'10%'}
                submitBtnText="Đăng ngay"
                submitBtnIcon={<i className="far fa-check"></i>}
                onClose={()=>{
                    handleShowPreview(false);
                }}
            >
                <ModalPreviewHostel></ModalPreviewHostel>
            </Modal>
        </div>
    );
}

export default Index;
