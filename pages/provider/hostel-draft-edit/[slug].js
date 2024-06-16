import React, { useEffect, useRef, useState } from 'react';
import cl from './index.module.css';
import { useAppSelector } from '@/redux/store';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import TextareaInputWithCount from '@/components/inputs/textarea-input-with-count/textarea-input-with-count';
import InputGroup from '@/components/inputs/input-group/input-group';
import InputAddress from '@/components/inputs/input-address/input-address';
import InputMap from '@/components/inputs/input-map/input-map';
import InputFiles from '@/components/inputs/input-files/input-files';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import ModalPreviewHostel from '@/components/modals/modal-preview-hostel/modal-preview-hostel';
import AlertSuccess from '@/components/alerts/alert-success/alert-success';
import { useRouter } from 'next/router';
import useAccountCheck from '@/hooks/useAccountCheck';
import { suggestDescription, suggestTitle } from '@/config/suggestion';
import { NO_SHARED_HOUSE, SHARED_HOUSE } from '@/config/productShareHouse';
import Modal from '@/components/modals/modal/modal';
import { formatDotEach3Num } from '@/helpers/priceHelper';
import { objectToFormData } from '@/helpers/http-requests/formData';
import axios from '@/helpers/http-requests/axios';
import { removeDots } from '@/helpers/numberHelper';
import useScrollToCenterRef from '@/hooks/useScrollToRef';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';

export async function getServerSideProps(context) {
    let accessToken = getAccessTokenByContext(context);

    let {
        slug = '',
    } = context.query;

    let fetchData = await fetch(`${process.env.API_SERVERSIDE}/provider/product/detail?slug=${slug}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });

    let data = {};
    if (fetchData.status != 500) {
        data = await fetchData.json();
        data = data.data;
    } else {
        data = null;
    }

    return {
        props: { data },
    }
}

const Slug = ({data}) => {
    const authUserData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });
    let [showPreview, setShowPreview] = useState(false);
    let [createData, setCreateData] = useState({
        type: 'update',
        product_id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        tel: data.tel,
        province_id: data.province_id,
        district_id: data.district_id,
        ward_id: data.ward_id,
        detail_address: data.detail_address,
        lat: data.lat,
        long: data.long,
        acreage: data.acreage,
        bed_rooms: data.bed_rooms,
        toilet_rooms: data.toilet_rooms,
        used_type: data.used_type,
        is_shared_house: data.is_shared_house,
        time_rule: data.time_rule,
        is_allow_pet: data.is_allow_pet,
        preview_images: data.product_images,
    });
    let [isDisableSubmit, setIsDisableSubmit] = useState(false);
    let [isShowAlertSuccess, setIsShowAlertSuccess] = useState(false);
    let [errors, setErrors] = useState({});
    let [tmpDetailAddress, setTmpDetailAddress] = useState(data.detail_address);
    let authCheck = useAccountCheck();
    let router = useRouter();
    let formDataRef = useRef();
    let timeoutAlertSuccessRef = useRef();
    let timeoutRedirect = useRef();
    let breadcrumbs = useRef([
        {label:'Trang chủ', href:'/'},
        {label:'Quản lý tin nháp', href:'/provider/hostel-manager?status=0&page=1'},
        {label:data.title, href:`/provider/hostel-edit/${data.slug}`}
    ]);
    let targetErrorScrollTo = useRef(null);

    useScrollToCenterRef(targetErrorScrollTo);

    useEffect( function() {
        return () => {
            formDataRef.current = null;
        }
    }, [createData]);

    useEffect(function(){
        handleSetCreateData('tel', authUserData?.tel);
    }, [authUserData]); //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(function(){
        timeoutAlertSuccessRef.current = setTimeout(function(){
            setIsShowAlertSuccess(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutAlertSuccessRef.current);
        }
    }, [isShowAlertSuccess]);

    if (authCheck!= undefined && authCheck == false) {
        router.push('/auth/login');
    }

    function handleShowPreview(showPreview) {
        setShowPreview(showPreview);
    }

    function handleSetCreateData(key, value) {
        let newCreateData = {...createData};
        newCreateData[key] = value;
        setCreateData(newCreateData);
    }

    function handleSetFilesCreateData(delOldImages, newFiles) {
        console.log(data);
        let newCreateData = {...createData};
        newCreateData.del_product_images = delOldImages.toString();
        newCreateData.preview_images = newFiles;
        let tmpProductImages = [];
        newFiles.forEach(file => {
            if (file.id == null) {
                tmpProductImages.push(file);
            }
        });
        newCreateData.product_images = tmpProductImages;
        setCreateData(newCreateData);
        console.log('newCreateData', newCreateData);
    }

    function handleSetLocale(value) {
        let newCreateData = {...createData};
        newCreateData.province_id = value?.province_id?.value ? value?.province_id?.value : '';
        newCreateData.district_id = value?.district_id?.value ? value?.district_id?.value : '';
        newCreateData.ward_id = value?.ward_id?.value ? value?.ward_id?.value : '';
        setCreateData(newCreateData);
    }

    function handleSetLatLong(value) {
        let newCreateData = {...createData};
        newCreateData.lat = value?.lat ? value?.lat : '';
        newCreateData.long = value?.lng ? value?.lng : '';
        setCreateData(newCreateData);
    }

    function handleSubmitPreviewData() {
        // Set image previews
        formDataRef.current = objectToFormData(createData);
        setErrors({});
        setIsDisableSubmit(true);
        axios.post(`/provider/product/public-draft?check=true`, formDataRef.current, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            setIsDisableSubmit(false);
            if (response?.status == 200) {
                handleShowPreview(true);
            } else if (response.status == 422) {
                setErrors(response.errors);
                targetErrorScrollTo.current = document.getElementById( Object.keys(response.errors)[0] )
            } else if (response?.message == 'Unauthenticated.') {
                router.push('/auth/login');
            }
        });
    }

    function handleSubmitData() {
        formDataRef.current = objectToFormData(createData);
        console.log('formData', objectToFormData(createData));
        setErrors({});
        setIsDisableSubmit(true);
        axios.post(`/provider/product/public-draft`, formDataRef.current, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            setIsDisableSubmit(false);
            if (response?.status == 200) {
                handleShowPreview(false);
                setIsShowAlertSuccess(true);
                timeoutRedirect.current = setTimeout(function(){
                    clearTimeout(timeoutRedirect.current);
                    router.push('/provider/hostel-manager');
                }, 3000);
            } else if (response?.message == 'Unauthenticated.') {
                router.push('/auth/login');
            }
        });
    }

    return (
        <div>
            <Breadcrumb items={breadcrumbs.current}></Breadcrumb>
            <TitleCenterBig title="Sửa tin cho thuê trọ"></TitleCenterBig>
            <div>
                <div className='form-group'>
                    <label className='label label-block' id='title'>Tiêu đề <span>*</span></label>
                    <TextareaInputWithCount
                        className="textarea w-100"
                        placeholder="Cho thuê phòng trọ ABC còn trống giá rẻ"
                        isDisableEnterLine
                        min={20}
                        max={50}
                        onChange={(value)=>{
                            handleSetCreateData('title', value);
                        }}
                        helpLabel={suggestTitle()}
                        value={data.title}
                    ></TextareaInputWithCount>
                    <div className='err-msg'>{errors?.title}</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block' id='price'>Giá cho thuê <span>*</span></label>
                    <InputGroup
                        type='price'
                        min='1'
                        max='11'
                        onChange={(value)=>{
                            value = removeDots(value);
                            handleSetCreateData('price', value);
                        }}
                        errMsg={errors?.price}
                        value={formatDotEach3Num(String(data.price))}
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block' id='description'>Mô tả trọ <span>*</span></label>
                    <TextareaInputWithCount
                        className="textarea w-100"
                        min={20}
                        max={5000}
                        onChange={(value)=>{
                            handleSetCreateData('description', value);
                        }}
                        style={{
                            height: '120px'
                        }}
                        helpLabel={suggestDescription()}
                        value={data.description}
                    ></TextareaInputWithCount>
                    <div className='err-msg'>{errors?.description}</div>
                </div>
                <div className={`form-group ${cl.input_tel}`}>
                    <label className='label label-block' id='tel'>Số điện thoại liên hệ <span>*</span></label>
                    <InputGroup
                        type='number'
                        min='1'
                        max='20'
                        onChange={(value)=>{
                            handleSetCreateData('tel', value);
                        }}
                        errMsg={errors?.tel}
                        value={data.tel}
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Địa chỉ <span>*</span></label>
                    <div id='province_id'></div>
                    <div id='district_id'></div>
                    <div id='ward_id'></div>
                    <InputAddress
                        onChange={(value)=>{
                            handleSetLocale(value);
                        }}
                        valueProvince={{value: data.province.id, label: data.province.name}}
                        valueDistrict={{value: data.district.id, label: data.district.name}}
                        valueWard={{value: data.ward.id, label: data.ward.name}}
                    ></InputAddress>
                    <div className='err-msg'>{errors?.province_id}</div>
                    <div className='err-msg'>{errors?.district_id}</div>
                    <div className='err-msg'>{errors?.ward_id}</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block' id='detail_address'>Địa chỉ chi tiết <span>*</span></label>
                    <InputGroup
                        type='text'
                        min='20'
                        max='200'
                        onChange={(value)=>{
                            handleSetCreateData('detail_address', value);
                        }}
                        onBlur={(value)=>{
                            setTmpDetailAddress(value);
                        }}
                        placeholder="Vị trí để dễ tìm thấy trọ. Ví dụ: 64/62/62 Nguyễn Khoái, Phường 2, Quận 4, TP. Hồ Chí Minh"
                        errMsg={errors?.detail_address}
                        value={createData?.detail_address}
                    ></InputGroup>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Bản đồ <span>*</span></label>
                    <div id='lat'></div>
                    <div id='long'></div>
                    <InputMap
                        address={tmpDetailAddress}
                        onChange={(value) => {
                            handleSetLatLong(value);
                        }}
                    ></InputMap>
                    <div className='err-msg'>{errors?.lat}</div>
                    <div className='err-msg'>{errors?.long}</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block' id='acreage'>Diện tích (mét vuông) <span>*</span></label>
                    <InputGroup
                        type='number'
                        min='1'
                        max='3'
                        onChange={(value)=>{
                            handleSetCreateData('acreage', value);
                        }}
                        errMsg={errors?.acreage}
                        value={data.acreage}
                    ></InputGroup>
                </div>
                <div className={cl.rooms}>
                    <div className='form-group'>
                        <label className='label label-block' id='bed_rooms'>Số phòng ngủ <span>*</span></label>
                        <select
                            className='select w-100'
                            onChange={(e)=>{
                                handleSetCreateData('bed_rooms', parseInt(e.target.value));
                            }}
                            value={createData.bed_rooms}
                        >
                            <option value={1}>1 phòng ngủ</option>
                            <option value={2}>2 phòng ngủ</option>
                            <option value={3}>3 phòng ngủ</option>
                            <option value={4}>4 phòng ngủ</option>
                            <option value={5}>5 phòng ngủ</option>
                        </select>
                        <div className='err-msg'>{errors?.bed_rooms}</div>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block' id='toilet_rooms'>Số phòng vệ sinh <span>*</span></label>
                        <select
                            className='select w-100'
                            onChange={(e)=>{
                                handleSetCreateData('toilet_rooms', parseInt(e.target.value));
                            }}
                            value={createData.toilet_rooms}
                        >
                            <option value={0}>Vệ sinh chung</option>
                            <option value={1}>1 phòng vệ sinh</option>
                            <option value={2}>2 phòng vệ sinh</option>
                            <option value={3}>3 phòng vệ sinh</option>
                            <option value={4}>4 phòng vệ sinh</option>
                            <option value={5}>5 phòng vệ sinh</option>
                        </select>
                        <div className='err-msg'>{errors?.toilet_rooms}</div>
                    </div>
                </div>
                <div className={cl.other_info}>
                    <div className='form-group'>
                        <label className='label label-block' id='used_type'>Loại sử dụng <span>*</span></label>
                        <select
                            className='select w-100'
                            onChange={(e)=>{
                                handleSetCreateData('used_type', parseInt(e.target.value));
                            }}
                            value={createData.used_type}
                        >
                            <option value={1}>Phòng trọ</option>
                            <option value={2}>Nhà nguyên căn</option>
                            <option value={3}>Sleep Box</option>
                            <option value={4}>Chung cư</option>
                            <option value={5}>Văn phòng</option>
                            <option value={6}>Ở ghép</option>
                            <option value={7}>Khác</option>
                        </select>
                        <div className='err-msg'>{errors?.used_type}</div>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block' id='is_shared_house'>Chung chủ <span>*</span></label>
                        <select
                            className='select w-100'
                            onChange={(e)=>{
                                handleSetCreateData('is_shared_house', parseInt(e.target.value));
                            }}
                            value={createData.is_shared_house}
                        >
                            <option value={NO_SHARED_HOUSE}>Không chung chủ</option>
                            <option value={SHARED_HOUSE}>Chung chủ</option>
                        </select>
                        <div className='err-msg'>{errors?.is_shared_house}</div>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block' id='time_rule'>Giờ giấc <span>*</span></label>
                        <select
                            className='select w-100'
                            onChange={(e)=>{
                                handleSetCreateData('time_rule', parseInt(e.target.value));
                            }}
                            value={createData.time_rule}
                        >
                            <option value={0}>Tự do</option>
                            <option value={1}>Theo quy định</option>
                        </select>
                        <div className='err-msg'>{errors?.time_rule}</div>
                    </div>
                    <div className='form-group'>
                        <label className='label label-block' id='is_allow_pet'>Thú nuôi <span>*</span></label>
                        <select
                            className='select w-100'
                            onChange={(e)=>{
                                handleSetCreateData('is_allow_pet', parseInt(e.target.value));
                            }}
                            value={createData.is_allow_pet}
                        >
                            <option value={1}>Không cho phép</option>
                            <option value={2}>Cho phép & Cam kết</option>
                            <option value={3}>Cho phép tự do</option>
                        </select>
                        <div className='err-msg'>{errors?.is_allow_pet}</div>
                    </div>
                </div>
                <div>
                    <label className='label label-block' id='product_images'>Ảnh minh họa <span>*</span></label>
                    <InputFiles
                        onChange={(files)=>{
                            handleSetFilesCreateData(files.deletedOldImages, files.selectedImages);
                        }}
                        errors={errors?.product_images}
                        initImages={data.product_images}
                    ></InputFiles>
                </div>
                <div className={cl.buttons}>
                    <ButtonIcon
                        text="Quay lại"
                        isIconLeft={true}
                        icon={<i className="fal fa-arrow-left"></i>}
                        backgroundColor="transparent"
                        color="#181818"
                        border="1px solid gray"
                        onClick={()=>{
                            router.back();
                        }}
                    ></ButtonIcon>
                    <ButtonIcon
                        text="Tiếp tục"
                        icon={<i className="far fa-angle-right"></i>}
                        backgroundColor="rgb(0, 153, 91)"
                        color="white"
                        onClick={()=>{
                            handleSubmitPreviewData();
                        }}
                        disabled={isDisableSubmit}
                    ></ButtonIcon>
                </div>
            </div>
            <Modal
                isShowModal={showPreview}
                title="Xem lại tin đăng"
                subTitle="Sau khi đăng tải, bài đăng của bạn sẽ tiếp cận đến mọi người sớm nhất"
                top={'5%'}
                mobileTop={'10%'}
                submitBtnText="Đăng tin"
                submitBtnIcon={<i className="far fa-check"></i>}
                onClose={()=>{
                    handleShowPreview(false);
                }}
                onSubmit={()=>{
                    handleSubmitData();
                }}
                submitBtnDisabled={isDisableSubmit}
            >
                <ModalPreviewHostel
                    createData={createData}
                ></ModalPreviewHostel>
            </Modal>
            <AlertSuccess
                message="Đăng tin thành công !"
                sub="Đang di chuyển về trang danh sách"
                isShow={isShowAlertSuccess}
            ></AlertSuccess>
        </div>
    );
}

export default Slug;
