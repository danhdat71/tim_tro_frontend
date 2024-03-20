import React, { memo } from 'react';
import cl from './button-rebooking.module.css';

const ButtonRebooking = (props) => {
    let {handleShowModalReBooking} = props;

    return (
        <button
            className={cl.button_booking}
            onClick={()=>{
                handleShowModalReBooking(true);
            }}
        >
            {props.children}
        </button>
    );
}

export default memo(ButtonRebooking);
