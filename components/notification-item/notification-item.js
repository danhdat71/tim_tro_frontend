import Link from 'next/link';
import React from 'react';
import cl from './notification.module.css';
import { memo } from 'react';

const NotificationItem = (props) => {

    let {
        title,
        description,
        sentAtAgo,
        link,
        status,
        onClick
    } = props;

    return (
        <div
            className={`${cl.item} ${status == true ? cl.is_read : false}`}
            onClick={()=>{
                onClick(props)
            }}
        >
            <div className={cl.icon}>
                <i className="fas fa-bell"></i>
            </div>
            <div>
                <div className={cl.title}>{title}</div>
                <div className={cl.desc}>{description}</div>
                <div className={cl.time}>{sentAtAgo}</div>
            </div>
            <div className={cl.wrap_clear}>
                {/* <button><i className="far fa-times"></i></button> */}
            </div>
        </div>
    );
}

export default memo(NotificationItem);
