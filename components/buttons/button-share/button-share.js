import React from 'react';
import cl from './button-share.module.css';

const ButtonShare = (props) => {

    let {onClick} = props;

    return (
        <button
            onClick={onClick}
            className={cl.button_share}
        >
            <span>Chia sẻ</span>
            <span><i className="far fa-share"></i></span>
        </button>
    );
}

export default ButtonShare;
