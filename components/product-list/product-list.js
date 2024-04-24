import React from 'react';
import cl from './product-list.module.css';
import Product from '../product/product';
import ListOrderBar from '../list-order-bar/list-order-bar';
import { isNumeric } from '@/helpers/numberHelper';
import { useRouter } from 'next/router';
import { handleChangeRouterParam } from '@/helpers/routerHelper';

const ProductList = (props) => {

    let {
        data
    } = props;

    const router = useRouter();

    function renderProductItems() {
        return data.data.map(function (val, index) {
            return (
                <Product
                    key={index}
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
                />
            );
        });
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
