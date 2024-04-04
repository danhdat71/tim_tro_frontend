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
                <Product
                    image="https://file4.batdongsan.com.vn/crop/562x284/2024/04/04/20240404160827-bc8b_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/crop/562x284/2024/03/27/20240327232458-9f77_wm.jpg"
                />
                <Product
                    image="https://cloud.mogi.vn/images/thumb-small/2024/03/13/244/74cdce0df05c44fd8cdc5973e04dbd0e.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2024/03/26/20240326155920-6bd9_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2024/03/15/20240315152454-e923_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2024/04/04/20240404162806-e628_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2024/04/03/20240403180220-e997_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2024/04/03/20240403180220-b2a3_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/2024/04/04/20240404131702-7336_wm.jpg"
                />
                <Product
                    image="https://file4.batdongsan.com.vn/resize/1275x717/2022/03/30/20220330092143-9e64_wm.jpg"
                />
            </div>
            <div className={cl.paginate_bar}>
                {handleRenderPaginate()}
            </div>
        </div>
    );
}

export default ProductList;
