import React, { memo } from 'react';
import cl from './button-like.module.css';

const ButtonLike = (props) => {
    return (
        <button
            className={cl.button_like}
        >
            {props.children}
        </button>
    );
}

export default memo(ButtonLike);
