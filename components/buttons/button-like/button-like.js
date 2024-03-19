import React from 'react';
import cl from './button-like.module.css';

const ButtonLike = (props) => {
    return (
        <button
            className={cl.button_like}
            onClick={()=>{
                props.onClick(true);
            }}
        >
            {props.children}
        </button>
    );
}

export default ButtonLike;
