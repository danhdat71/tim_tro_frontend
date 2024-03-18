import React from 'react';
import cl from './button-booking.module.css'

const ButtonBooking = (props) => {
    return (
        <button className={cl.button_booking}>
            {props.children}
        </button>
    );
}

export default ButtonBooking;
