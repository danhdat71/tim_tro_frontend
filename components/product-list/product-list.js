import React, { useEffect, useState } from 'react';
import cl from './product-list.module.css';
import Product from '../product/product';
import Pagination from '@mui/material/Pagination';
import useWindowSize from '@/hooks/useWindowDimensions';

const ProductList = () => {
    
    const windowSize = useWindowSize();

    function handleRenderPaginate() {
        return (
            <Pagination
                count={10}
                color="success"
                shape="rounded"
                variant="outlined"
                size={windowSize.width > 600 ? 'large' : 'small'}
            />
        )
    }

    return (
        <div className={cl.product_list}>
            <div className={cl.title_bar}>
                <div className={cl.result_count}>Tổng 10.000 kết quả</div>
                <div className={cl.view_helper_box}>
                    <div className={cl.wrap_select}>
                        <span>Sắp xếp: </span>
                        <select>
                            <option>Mới nhất</option>
                            <option>Giá thấp trước</option>
                            <option>Diện tích rộng</option>
                            <option>Giá cao trước</option>
                            <option>Diện tích hẹp</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={cl.product_list_items}>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            <div className={cl.paginate_bar}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default ProductList;
