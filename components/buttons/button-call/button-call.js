import React, { useState } from 'react';
import cl from './button-call.module.css';
import { formatPhoneNumber } from '@/helpers/numberHelper';

const ButtonCall = (props) => {

    let {tel} = props;

    let [isShow, setIsShow] = useState(false);
    let [call, setCall] = useState(null);

    function renderPhoneNumber(tel)
    {
        if (isShow) {
            return formatPhoneNumber(tel);
        }

        return tel.toString().substring(0, 4) + " *** ***";
    }

    return (
        <a
            className={cl.button_call}
            onClick={()=>{
                if(isShow == true) {
                    setCall(tel);
                }
                setIsShow(true);
            }}
            href={call ? `tel:${call}` : null}
        >
            <span className={cl.icon}>
                <i className="fad fa-phone-volume"></i>
            </span>
            <span className={cl.tel}>{renderPhoneNumber(tel)}</span>
            <span>{isShow == true ? 'Bấm để gọi' : 'Bấm để hiện số'}</span>
        </a>
    );
}

export default ButtonCall;
