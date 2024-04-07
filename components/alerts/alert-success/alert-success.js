import React, { useEffect } from 'react';
import cl from './alert-success.module.css';

const AlertSuccess = (props) => {
    let {
        message,
        sub,
        isShow = true,
    } = props;

    return (
        <div className={`${cl.alert_success} ${isShow ? cl.show : null}`}>
            <div className={cl.icon}><i className="fal fa-check"></i></div>
            <div>
                <div className={cl.message}>{message}</div>
                <div className={cl.sub}>{sub}</div>
            </div>
        </div>
    );
}

export default AlertSuccess;
