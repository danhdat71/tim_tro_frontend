import React, { memo } from 'react';
import emptyListIcon from '../../assets/imgs/empty_list.png';
import cl from './empty-list.module.css';

const EmptyList = (props) => {
    let {title} = props;
    return (
        <div className={cl.empty}>
            <div className={cl.image}>
                <img src={emptyListIcon.src} loading='lazy' alt={emptyListIcon.src}></img>
            </div>
            <div className={cl.title}>{title}</div>
        </div>
    );
}

export default memo(EmptyList);
