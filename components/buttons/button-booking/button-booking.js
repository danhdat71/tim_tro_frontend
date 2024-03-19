import React, { memo } from 'react';
import cl from './button-booking.module.css'

const ButtonBooking = (props) => {

    let {handleShowModalBooking} = props;

    return (
        <button
            className={cl.button_booking}
            onClick={()=>{
                handleShowModalBooking(true);
            }}
        >
            {props.children}
        </button>
    );
}

export default memo(ButtonBooking);
