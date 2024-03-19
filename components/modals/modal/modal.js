import React from 'react';
import cl from './modal.module.css';
import useWindowSize from '@/hooks/useWindowDimensions';

const Modal = (props) => {

    let windowSize = useWindowSize();

    let {
        isShowModal,
        top,
        mobileTop,
        onBackdropClick
    } = props;

    return (
        <div className={isShowModal == true ? `${cl.wrap_modal} ${cl.active}` : `${cl.wrap_modal}`}>
            <div
                className={cl.backdrop}
                onClick={onBackdropClick}
            ></div>
            <div className={cl.scroller}>
                <div className={cl.main} style={{marginTop: windowSize.width > 540 ? top : mobileTop}}>{props.children}</div>
            </div>
        </div>
    );
}

export default Modal;
