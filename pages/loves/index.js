import React, { useEffect, useState } from 'react';
import cl from './index.module.css';
import ListOrderBar from '@/components/list-order-bar/list-order-bar';
import Product from '@/components/product/product';
import EmptyList from '@/components/empty-list/empty-list';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { getAccessTokenByContext } from '@/helpers/http-requests/cookie';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/store';
import { isNumeric } from '@/helpers/numberHelper';
import { handleChangeRouterParam } from '@/helpers/routerHelper';
import AlertConfirm from '@/components/alerts/alert-comfirm/alert-confirm';
import axios from '@/helpers/http-requests/axios';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/redux/auth';

const breadcrumbs = [
    {
        href: '/',
        label: 'Trang chủ'
    },
    {
        href: '/loves',
        label: 'Trọ quan tâm'
    }
];

export async function getServerSideProps(context) {
    let data = {};
    let accessToken = getAccessTokenByContext(context);
    let {
        page = 1,
        order_by = 'posted_at|desc',
    } = context.query;

    // Get products
    let products = await fetch(`${process.env.API}/user/list-saved-products?page=${page}&order_by=${order_by}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        method: 'GET',
    });
    if (products.status == 200) {
        products = await products.json();
        data.products = products.data;
    } else if (products.status == 401) {
        data.status = 401;
    }

    return {
        props: { data },
    }
}

const Index = ({ data }) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [tmpDelete, setTmpDelete] = useState({});
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const authUserData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });

    useEffect(function(){
        if (data?.status == 401) {
            router.push('/');
        }
    }, []);

    useEffect(function(){
        axios.get(`/auth/get-me`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response.status == 200) {
                    dispatch(setUserData(response.data));
                }
            });
    }, [router.query]);

    function handleRenderProducts() {
        if (data?.products?.data?.length > 0) {
            return data?.products?.data?.map(function (val, index) {
                return (
                    <Product
                        key={index}
                        slug={val.slug}
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
                        isShowSaveButton={authUserData.app_id ? true : false}
                        isSaved={true}
                        onClickSave={(value)=>{
                            setTmpDelete(value);
                        }}
                    />
                );
            });
        } else {
            return <EmptyList title="Không tìm thấy bài đăng nào"></EmptyList>
        }
    }

    function handleRenderPaginate() {
        return data?.products?.links?.map(function (val, index) {
            if (isNumeric(val.label)) {
                return (
                    <div
                        key={index}
                        className={`handle-item ${val.label == router.query.page || (router.query.page == null && val.label == 1) ? 'active' : ''}`}
                        onClick={()=>{
                            handleChangeRouterParam(router, 'page', val.label, '/loves');
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

    function handleDelete() {
        setSubmitDisabled(true);
        axios.post(`/user/save-product`, tmpDelete, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                setTmpDelete({});
                setSubmitDisabled(false);
                if (response.status == 200) {
                    handleChangeRouterParam(router, 'page', 1, '/loves');
                }
            });
    }

    return (
        <div className={cl.loves}>
            <Breadcrumb items={breadcrumbs}></Breadcrumb>
            <ListOrderBar
                title="Các trọ quan tâm"
                paddingBottom={'15px'}
                onChange={(e) => {
                    handleChangeRouterParam(router, 'order_by', e.target.value, '/loves');
                }}
            />
            {handleRenderProducts()}
            <div className={`${cl.paginate_bar} paginate-md`}>
                {handleRenderPaginate()}
            </div>
            <AlertConfirm
                message="Bạn có chắc muốn xóa sản phẩm đã lưu này ?"
                sub="Sau khi xóa sản phẩm đã lưu, bạn cũng có thể lưu lại sản phẩm này."
                isShow={tmpDelete?.product_id ? true : false}
                onCancel={()=>{
                    setTmpDelete({});
                }}
                onSubmit={()=>{
                    handleDelete()
                }}
                submitDisabled={submitDisabled}
            ></AlertConfirm>
        </div>
    );
}

export default Index;
