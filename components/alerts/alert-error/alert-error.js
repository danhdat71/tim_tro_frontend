import React, { useEffect, useRef, useState } from 'react';
import cl from './alert-error.module.css';

const AlertError = (props) => {

    let {
        message,
        sub,
        isShow = true,
    } = props;

    return (
        <div className={`${cl.alert_error} ${isShow ? cl.show : null}`}>
            <div className={cl.icon}><i className="fal fa-check"></i></div>
            <div>
                <div className={cl.message}>{message}</div>
                <div className={cl.sub}>{sub}</div>
            </div>
        </div>
    );
}

export default AlertError;
