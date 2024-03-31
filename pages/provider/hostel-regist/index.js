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

const Index = () => {

    let [center, setCenter] = useState({
        lat: 0,
        lng: 0
    });

    return (
        <div>
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
                    <label onClick={()=>{setCenter({
                        lat: 10.244310036658074,
                        lng: 105.81147844275095
                    })}} className='label label-block'>Bản đồ <span>*</span></label>
                    <InputMap address="Tổ 4, Khu phố 1, thị trấn thứ ba, an biên, kiên giang"></InputMap>
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
                    ></InputGroup>
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
                    <ButtonIcon text="Xem trước" icon={<i className="fas fa-file-alt"></i>}></ButtonIcon>
                    <ButtonIcon
                        text="Lưu nháp"
                        icon={<i className="fas fa-file"></i>}
                        backgroundColor="#c15422"
                        color="white"
                    ></ButtonIcon>
                    <ButtonIcon
                        text="Đăng ngay"
                        icon={<i className="fal fa-check"></i>}
                        backgroundColor="rgb(0, 153, 91)"
                        color="white"
                    ></ButtonIcon>
                </div>
            </div>
        </div>
    );
}

export default Index;
