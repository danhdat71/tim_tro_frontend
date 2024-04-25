import React, { useEffect, useState } from 'react';
import cl from './product-list.module.css';
import Product from '../product/product';
import ListOrderBar from '../list-order-bar/list-order-bar';
import { isNumeric } from '@/helpers/numberHelper';
import { useRouter } from 'next/router';
import { handleChangeRouterParam } from '@/helpers/routerHelper';
import EmptyList from '../empty-list/empty-list';
import axios from '@/helpers/http-requests/axios';
import { setUserData } from '@/redux/auth';
import { useDispatch } from 'react-redux';

const ProductList = (props) => {

    let {
        data,
        isLogin = false,
    } = props;

    const router = useRouter();
    const dispatch = useDispatch();
    const [savedProductIds, setSavedProductIds] = useState([]);

    useEffect(function(){
        axios.get(`/user/list-saved-products?is_all=1`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response.status == 200) {
                    setSavedProductIds(response.data);
                }
            });
    }, []);

    useEffect(function(){
        axios.get(`/auth/get-me`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response.status == 200) {
                    handleSetUserLogin(response.data);
                }
            });
    }, [savedProductIds]);

    function handleSetUserLogin(userData) {
        dispatch(setUserData(userData));
    }

    function handleSaveProduct(payload) {
        axios.post(`/user/save-product`, payload, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(response => {
            if (response.status == 200) {
                setSavedProductIds(response.data);
            }
        });
    }

    function renderProductItems() {
        if (data.data.length > 0) {
            return data.data.map(function (val, index) {
                let isSaved = savedProductIds.findIndex(function(item){
                    return item == val.id;
                });
                if (isSaved != -1) {
                    isSaved = true;
                } else {
                    isSaved = false;
                }
                return (
                    <Product
                        key={index}
                        id={val.id}
                        image={`${process.env.BACKEND_URL}/${val.product_images[0].thumb_url}`}
                        imageNum={val.product_images.length}
                        title={val.title}
                        acreage={val.acreage}
                        wardName={val.ward.name}
                        districtName={val.district.name}
                        provinceName={val.province.name}
                        price={val.price}
                        toiletRooms={val.toilet_rooms}
                        bedRooms={val.bed_rooms}
                        isShowSaveButton={isLogin}
                        isSaved={isSaved}
                        onClickSave={(value)=>{
                            handleSaveProduct(value);
                        }}
                    />
                );
            });
        } else {
            return <EmptyList title="Không tìm thấy bài đăng nào"></EmptyList>
        }
    }

    function handleRenderPaginate() {
        return data?.links?.map(function (val, index) {
            if (isNumeric(val.label)) {
                return (
                    <div
                        key={index}
                        className={`handle-item ${val.label == router.query.page || (router.query.page == null && val.label == 1) ? 'active' : ''}`}
                        onClick={()=>{
                            handleChangeRouterParam(router, 'page', val.label)
                        }}
                    ><span>{val.label}</span></div>
                );
            } else if (val.label == '...') {
                return (
                    <div
                        key={index}
                        className='handle-item dot'
                    >...</div>
                );
            }
        });
    }

    return (
        <div className={cl.product_list}>
            <ListOrderBar
                title={`Tổng ${data.total} kết quả`}
                onChange={(e) => {
                    handleChangeRouterParam(router, 'order_by', e.target.value);
                }}
            />
            <div className={cl.product_list_items}>
                {renderProductItems()}
            </div>
            <div className={`${cl.paginate_bar} paginate-md`}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default ProductList;
