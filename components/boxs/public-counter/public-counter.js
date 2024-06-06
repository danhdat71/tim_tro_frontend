import React, { memo } from 'react';
import cl from './public-counter.module.css';

const PublicCounter = () => {
    return (
        <div className={cl.public_counter}>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Phòng trọ:</span>
                <span>10.000</span>
            </div>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Nhà nguyên căn:</span>
                <span>10.000</span>
            </div>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Chung cư:</span>
                <span>10.000</span>
            </div>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Ở ghép:</span>
                <span>10.000</span>
            </div>
        </div>
    );
}

export default memo(PublicCounter);
