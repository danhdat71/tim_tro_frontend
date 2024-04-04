import React from 'react';
import cl from './best-area-box.module.css';

const BestAreaBox = (props) => {

    let {
        title,
        items,
    } = props;

    function renderItems() {
        return items?.map(function(value, index) {
            return (
                <div key={index} className={cl.item}>
                    <span>{value.label}</span>
                    <span>{value?.total}</span>
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

export default BestAreaBox;
