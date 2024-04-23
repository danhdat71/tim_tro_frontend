import React, { memo } from 'react';
import cl from './best-area-box.module.css';
import Link from 'next/link';

const BestAreaBox = (props) => {

    let {
        title,
        items,
    } = props;

    function renderItems() {
        return items?.map(function(value, index) {
            return (
                <Link href='' className={cl.item}>
                    <div key={index}>
                        <span>{value.label}</span>
                        <span>{value?.products_count}</span>
                    </div>
                </Link>
            );
        })
    }

    return (
        <div className={cl.best_area_box}>
            <div className={cl.title}>{title}</div>
            <div className={cl.list}>
                {renderItems()}
            </div>
        </div>
    );
}

export default memo(BestAreaBox);
