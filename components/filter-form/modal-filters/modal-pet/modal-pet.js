import React, { useState } from 'react';
import cl from './modal-pet.module.css';

const pets = [
    {
        value: 1,
        label : 'Không cho phép'
    },
    {
        value: 2,
        label : 'Chó'
    },
    {
        value: 3,
        label : 'Mèo'
    },
    {
        value: 4,
        label : 'Chó & mèo'
    },
];


const ModalPet = () => {

    let [selected, setSelected] = useState();

    function handleSelect(value) {
        if (value == selected) {
            setSelected(null);
        } else {
            setSelected(value);
        }
    }

    function renderPets()
    {
        return pets.map(function(val, index){
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
            {renderPets()}
        </div>
    );
}

export default ModalPet;
