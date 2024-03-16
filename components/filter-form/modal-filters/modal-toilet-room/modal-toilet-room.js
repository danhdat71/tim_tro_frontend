import React, { useState } from 'react';
import cl from './modal-toilet-room.module.css';

const rooms = [
    {
        value: 1,
        label : '1 phòng wc'
    },
    {
        value: 2,
        label : '2 phòng wc'
    },
    {
        value: 3,
        label : '3 phòng wc'
    },
    {
        value: 4,
        label : '4 phòng wc'
    },
    {
        value: 5,
        label : '5 phòng wc'
    }
];

const ModalToiletRoom = () => {

    let [selected, setSelected] = useState();

    function handleSelect(value) {
        if (value == selected) {
            setSelected(null);
        } else {
            setSelected(value);
        }
    }

    function renderRooms()
    {
        return rooms.map(function(val, index){
            return (
                <button
                    key={index}
                    type='button'
                    className={
                        val.value == selected
                            ? `${cl.input_box} ${cl.active}`
                            : `${cl.input_box}`
                    }
                    onClick={()=>{
                        handleSelect(val.value);
                    }}
                >{val.label}</button>
            )
        });
    }

    return (
        <div className={cl.wrap_buttons}>
            {renderRooms()}
        </div>
    );
}

export default ModalToiletRoom;
