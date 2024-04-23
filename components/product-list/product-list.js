import React from 'react';
import cl from './product-list.module.css';
import Product from '../product/product';
import ListOrderBar from '../list-order-bar/list-order-bar';

const ProductList = (props) => {

    let {
        data
    } = props;

    console.log('data', data);

    function renderProductItems() {
        return data.data.map(function(val, index) {
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

    return (
        <div className={cl.product_list}>
            <ListOrderBar
                title={`Tổng ${data.total} kết quả`}
            />
            <div className={cl.product_list_items}>
                {renderProductItems()}
            </div>
            <div className={`${cl.paginate_bar} paginate-md`}>
                
            </div>
        </div>
    );
}

export default ProductList;
