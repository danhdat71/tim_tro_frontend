import React, { useEffect } from 'react';
import cl from './alert-success.module.css';

const AlertSuccess = (props) => {
    return (
        <div className={cl.alert_success}>
            <div className={cl.icon}><i className="fal fa-check"></i></div>
            <div>
                <div className={cl.message}>{props.message}</div>
                <div className={cl.sub}>{props.sub}</div>
            </div>
        </div>
    );
}

export default AlertSuccess;
