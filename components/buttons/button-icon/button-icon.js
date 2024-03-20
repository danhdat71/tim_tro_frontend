import React, { memo } from 'react';
import cl from './button-icon.module.css';

const ButtonIcon = (props) => {

    let {
        onClick,
        backgroundColor,
        border,
        color,
        text,
        icon,
        disabled
    } = props;

    return (
        <button
            disabled={disabled}
            className={cl.button}
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor,
                border: border,
                color: color,
            }}
        >
            <span>{text}</span>
            <span className={cl.icon}>{icon}</span>
        </button>
    );
}

export default memo(ButtonIcon);
