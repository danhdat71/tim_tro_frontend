import React from 'react';
import cl from './best-area-box.module.css';

const bestAreas = [

];

const BestAreaBox = () => {
    return (
        <div className={cl.best_area_box}>
            <div className={cl.title}>Các khu vực nổi bật</div>
            <div className={cl.list}>
                <div className={cl.item}>
                    <span>Hồ Chí Minh</span>
                    <span>10</span>
                </div>
                <div className={cl.item}>
                    <span>Cần Thơ</span>
                    <span>10</span>
                </div>
                <div className={cl.item}>
                    <span>Bình Dương</span>
                    <span>10</span>
                </div>
                <div className={cl.item}>
                    <span>Đà Nẵng</span>
                    <span>10</span>
                </div>
                <div className={cl.item}>
                    <span>Hà Nội</span>
                    <span>10</span>
                </div>
            </div>
        </div>
    );
}

export default BestAreaBox;
