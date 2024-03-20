import React, { memo } from 'react';
import cl from './modal.module.css';
import useWindowSize from '@/hooks/useWindowDimensions';

const Modal = (props) => {

    let windowSize = useWindowSize();

    let {
        isShowModal,
        top,
        mobileTop,
        title,
        subTitle,
        submitBtnText,
        submitBtnIcon,
        onClose,
        onRefresh,
        onSubmit,
    } = props;

    function renderRefreshBtn() {
        if (onRefresh) {
            return (
                <button
                    type='button'
                    className={cl.re_edit_btn}
                    onClick={onRefresh}
                >
                    <span>Đặt lại</span>
                    <span><i className="fal fa-undo"></i></span>
                </button>
            )
        }
    }

    return (
        <div className={isShowModal == true ? `${cl.wrap_modal} ${cl.active}` : `${cl.wrap_modal}`}>
            <div
                className={cl.backdrop}
                onClick={onClose}
            ></div>
            <div className={cl.scroller}>
                <div
                    className={cl.main}
                    style={{marginTop: windowSize.width > 540 ? top : mobileTop}}
                >
                    <div className={cl.modal_title}>
                        <div>
                            <div>{title}</div>
                            <div>{subTitle}</div>
                        </div>
                        <button
                            type='button'
                            onClick={onClose}
                        ><i className="fal fa-times-circle"></i></button>
                    </div>
                    {props.children}
                    <div className={cl.modal_footer}>
                        <button
                            type='button'
                            className={cl.cancel_btn}
                            onClick={onClose}
                        >
                            <span>Đóng</span>
                        </button>
                        {renderRefreshBtn()}
                        <button
                            type='button'
                            className={cl.apply_btn}
                            onClick={onSubmit}
                        >
                            <span>{submitBtnText}</span>
                            <span>{submitBtnIcon}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Modal);
