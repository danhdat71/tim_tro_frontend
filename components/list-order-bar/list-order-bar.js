import React, { memo } from 'react';
import TitleLeftBig from '../titles/title-left-big/title-left-big';
import cl from './list-order-bar.module.css';

const ListOrderBar = (props) => {
    let {
        title,
        onChange,
        paddingBottom
    } = props;
    return (
        <div 
            className={cl.bar}
            style={{paddingBottom:paddingBottom}}
        >
            <TitleLeftBig title={title} />
            <div className={cl.view_helper_box}>
                <div className={cl.wrap_select}>
                    <span>Sắp xếp: </span>
                    <select
                        onChange={onChange}
                    >
                        <option value="posted_at|desc">Mới nhất</option>
                        <option value="price|asc">Giá thấp trước</option>
                        <option value="acreage|desc">Diện tích rộng</option>
                        <option value="price|desc">Giá cao trước</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default memo(ListOrderBar);
