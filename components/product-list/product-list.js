import React, { useEffect, useState } from 'react';
import cl from './product-list.module.css';
import Product from '../product/product';
import Pagination from '@mui/material/Pagination';
import useWindowSize from '@/hooks/useWindowDimensions';
import ListOrderBar from '../list-order-bar/list-order-bar';

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
            <ListOrderBar
                title="Tổng 10.000 kết quả"
            />
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
