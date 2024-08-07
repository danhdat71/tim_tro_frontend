import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import InputFiles from '@/components/inputs/input-files/input-files';
import InputGroup from '@/components/inputs/input-group/input-group';
import TextareaInputWithCount from '@/components/inputs/textarea-input-with-count/textarea-input-with-count';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import AlertConfirm from '@/components/alerts/alert-comfirm/alert-confirm';
import { objectToFormData } from '@/helpers/http-requests/formData';
import axios from '@/helpers/http-requests/axios';
import AlertError from '@/components/alerts/alert-error/alert-error';
import AlertSuccess from '@/components/alerts/alert-success/alert-success';
import { useRouter } from 'next/router';

const Index = () => {

    let breadcrumbs = useRef([
        {label:'Trang chủ', href:'/'},
        {label:'Góp ý & báo lỗi', href:'/report'},
    ]);
    let formDataRef = useRef();
    let timeoutAlertSuccess = useRef();
    let timeoutAlertError = useRef();
    let router = useRouter();

    let [errors, setErrors] = useState({});
    let [createData, setCreateData] = useState({});
    let [isShowConfirm, setIsShowConfirm] = useState(false);
    let [submitDisabled, setSubmitDisabled] = useState(false);
    let [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false);
    let [alertError400, setAlertError400] = useState({
        isShow: false,
    });

    useEffect(function(){
        timeoutAlertSuccess.current = setTimeout(function(){
            setIsShowAlertSuccess(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutAlertSuccess.current);
        }
    }, [submitDisabled]);

    useEffect(function(){
        timeoutAlertError.current = setTimeout(function(){
            let newAlertError = {...alertError400};
            newAlertError.isShow = false;
            setAlertError400(newAlertError);
        }, 3000);

        return () => {
            clearTimeout(timeoutAlertError.current);
        }
    }, [submitDisabled]); //eslint-disable-line react-hooks/exhaustive-deps

    function handleSetCreateData(key, value) {
        let newCreateData = {...createData};
        newCreateData[key] = value;
        setCreateData(newCreateData);
    }

    function handleSubmitData() {
        formDataRef.current = objectToFormData(createData);
        setErrors({});
        setSubmitDisabled(true);
        axios.post(`/bug-report/store`, formDataRef.current, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            setSubmitDisabled(false);
            setIsShowConfirm(false);
            if (response?.status == 200) {
                setIsShowAlertSuccess(true);
                formDataRef.current = null;
                let timeout = setTimeout(function(){
                    clearTimeout(timeout);
                    router.push('/');
                }, 3000)
            } else if (response.status == 422) {
                setErrors(response.errors);
            } else if (response.status == 400) {
                setAlertError400({
                    isShow: true,
                    message : response.message,
                    sub: 'Bạn đang thao tác quá nhanh, vui lòng thử lại sau !'
                });
            }
        });
    }

    console.log('rerender');

    return (
        <div>
            <Breadcrumb items={breadcrumbs.current}></Breadcrumb>
            <TitleCenterBig title="Góp ý & Báo Lỗi"></TitleCenterBig>
            <div className='form-group'>
                <label className='label label-block'>Họ tên <span>*</span></label>
                <InputGroup
                    type="text"
                    min="5"
                    max="40"
                    onChange={(value)=>{
                        handleSetCreateData('full_name', value)
                    }}
                    errMsg={errors?.full_name}
                ></InputGroup>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Email <span>*</span></label>
                <InputGroup
                    type="text"
                    min="5"
                    max="40"
                    onChange={(value)=>{
                        handleSetCreateData('email', value)
                    }}
                    errMsg={errors?.email}
                ></InputGroup>
            </div>
            <div className='form-group'>
                <label className='label label-block'>Mô tả <span>*</span></label>
                <TextareaInputWithCount
                    className='textarea w-100'
                    rows={5}
                    min={10}
                    max={9999}
                    isDisableOnMax={true}
                    style={{height: '150px'}}
                    onChange={(value)=>{
                        handleSetCreateData('description', value)
                    }}
                    errMsg={errors?.description}
                />
            </div>
            <div className='form-group'>
                <label className='label label-block'>Ảnh minh họa (nếu có)</label>
                <InputFiles
                    isShowHelper={false}
                    isShowLabelProfile={false}
                    onChange={(files)=>{
                        handleSetCreateData('bug_report_images', files.selectedImages);
                    }}
                    errors={errors?.bug_report_images}
                ></InputFiles>

            </div>
            <div className={`form-group ${cl.confirm_button}`}>
                <ButtonIcon
                    text="Gửi báo cáo"
                    icon={<i className="fal fa-paper-plane"></i>}
                    backgroundColor="rgb(0, 153, 91)"
                    color="white"
                    onClick={()=>{
                        setIsShowConfirm(true);
                    }}
                ></ButtonIcon>
            </div>

            <AlertConfirm
                message="Xác nhận gửi báo cáo lỗi hệ thống !"
                sub="Chúng tôi sẽ phản hồi kết quả qua mail. Cám ơn bạn đã đóng góp !"
                isShow={isShowConfirm}
                onSubmit={()=>{
                    handleSubmitData();
                }}
                onCancel={()=>{
                    setIsShowConfirm(false);
                }}
                submitDisabled={submitDisabled}
            ></AlertConfirm>
            <AlertSuccess
                message="Đã báo cáo lỗi thành công !"
                sub="Chúng tôi sẽ tiến hành xem xét và phản hồi lại bạn qua email"
                isShow={isShowAlertSuccess}
            >
            </AlertSuccess>
            <AlertError
                message={alertError400?.message}
                sub={alertError400?.sub}
                isShow={alertError400.isShow}
            >  
            </AlertError>
        </div>
    );
}

export default Index;
