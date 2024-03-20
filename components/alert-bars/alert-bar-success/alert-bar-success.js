import React from 'react';
import cl from './alert-bar-success.module.css';

const AlertBarSuccess = (props) => {

    let {style} = props;

    return (
        <div
            className={cl.alert}
            style={style}
        >
            {props.children}
        </div>
    );
}

export default AlertBarSuccess;
