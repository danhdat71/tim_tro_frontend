import React, { memo } from 'react';
import cl from './best-area-box.module.css';

const BestAreaBox = (props) => {

    let {
        title,
        items,
        onClick,
    } = props;

    function renderItems() {
        return items?.map(function(value, index) {
            return (
                <div
                    key={index}
                    className={cl.item}
                    onClick={()=>{
                        onClick(value.id);
                    }}
                >
                    <span>{value.label}</span>
                    <span>{value?.products_count}</span>
                </div>
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
