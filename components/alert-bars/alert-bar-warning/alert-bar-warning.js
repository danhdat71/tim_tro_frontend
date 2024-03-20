import React, { memo } from 'react';
import cl from './alert-bar-warning.module.css';

const AlertBarWarning = (props) => {

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

export default memo(AlertBarWarning);
