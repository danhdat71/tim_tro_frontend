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
        disabled,
        isIconLeft
    } = props;

    function handleLeftRightIcon () {
        if (isIconLeft == true) {
            return (
                <>
                    <span className={cl.icon}>{icon}</span>
                    <span>{text}</span>
                </>
            );
        }

        return (
            <>
                <span>{text}</span>
                <span className={cl.icon}>{icon}</span>
            </>
        );
    }

    return (
        <button
            disabled={disabled}
            className={cl.button}
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor,
                border: border != null ? border : 'none',
                color: color,
            }}
        >
            {handleLeftRightIcon()}
        </button>
    );
}

export default memo(ButtonIcon);
