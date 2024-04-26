import React, { memo } from 'react';
import cl from './button-like.module.css';

const ButtonLike = (props) => {
    let {
        onClick,
        isActive = false,
    } = props;
    return (
        <button
            className={isActive ? `${cl.button_like} ${cl.active}` : `${cl.button_like}`}
            onClick={onClick}
        >
            {props.children}
        </button>
    );
}

export default memo(ButtonLike);
