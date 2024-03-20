import React from 'react';
import cl from './index.module.css';
import ListOrderBar from '@/components/list-order-bar/list-order-bar';
import Product from '@/components/product/product';
import EmptyList from '@/components/empty-list/empty-list';



const Index = () => {
    

    function renderHostels() {
        if (products.length == 0) {
            return <EmptyList title="Danh sách yêu thích rỗng"></EmptyList>
        }
    }

    return (
        <div className={cl.loves}>
            <ListOrderBar
                title="Các trọ quan tâm"
                paddingBottom={'15px'}
            />
            <Product></Product>
        </div>
    );
}

export default Index;
