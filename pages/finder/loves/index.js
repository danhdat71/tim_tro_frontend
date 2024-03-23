import React from 'react';
import cl from './index.module.css';
import ListOrderBar from '@/components/list-order-bar/list-order-bar';
import Product from '@/components/product/product';
import EmptyList from '@/components/empty-list/empty-list';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';



const Index = () => {
    

    function renderHostels() {
        if (products.length == 0) {
            return <EmptyList title="Danh sách yêu thích rỗng"></EmptyList>
        }
    }

    return (
        <div className={cl.loves}>
            <Breadcrumb></Breadcrumb>
            <ListOrderBar
                title="Các trọ quan tâm"
                paddingBottom={'15px'}
            />
            <Product></Product>
        </div>
    );
}

export default Index;
