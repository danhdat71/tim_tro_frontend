import React, { memo, useEffect } from 'react';
import cl from './alert-confirm.module.css';

const AlertConfirm = (props) => {

    let {
        message = 'Bạn có chắc muốn thực hiện hành động này ?',
        sub = 'Mô tả thực hiện hành động',
        isShow = true,
        onCancel,
        onSubmit,
        submitDisabled = false,
    } = props;

    useEffect(() => {
        if (!document.body) {
            return
        }

        document.body.style.overflowY = isShow ? 'hidden' : 'scroll'

        return () => {
            document.body.style.overflowY = 'scroll'
        }
    }, [isShow])

    return (
        <div className={isShow == false ? `${cl.alert_confirm}` : `${cl.alert_confirm} ${cl.show}`}>
            <div
                className={cl.backdrop}
                onClick={onCancel}
            ></div>
            <div className={cl.main}>
                <div className={cl.message}>{message}</div>
                <div className={cl.sub}>{sub}</div>
                <div className={cl.buttons}>
                    <button
                        onClick={onCancel}
                    >Huỷ</button>
                    <button
                        className={cl.confirm}
                        onClick={onSubmit}
                        disabled={submitDisabled}
                    >Xác nhận</button>
                </div>
            </div>
        </div>
    );
}

export default memo(AlertConfirm);
