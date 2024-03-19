import React from 'react';
import cl from './alert-error.module.css';

const AlertError = (props) => {
    return (
        <div className={cl.alert_error}>
            <div className={cl.icon}><i className="fal fa-check"></i></div>
            <div>
                <div className={cl.message}>{props.message}</div>
                <div className={cl.sub}>{props.sub}</div>
            </div>
        </div>
    );
}

export default AlertError;
