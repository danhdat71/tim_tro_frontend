import React from 'react';
import cl from './button-go-login.module.css';

const ButtonGoLogin = (props) => {
    return (
        <button className={cl.button_go_login}>
            {props.children}
        </button>
    );
}

export default ButtonGoLogin;
