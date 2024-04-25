import React, { useEffect, useState } from 'react';
import cl from './modal-pet.module.css';
import Modal from '@/components/modals/modal/modal';
import { useRouter } from 'next/router';
import { getOptions } from '@/config/productAllowPet';

const ModalPet = (props) => {
    let {
        onSubmit,
        onClose,
        isShowModal,
    } = props;
    let router = useRouter();
    let [selected, setSelected] = useState([]);

    useEffect(function(){
        setSelected({
            value: router.query.is_allow_pet
        });
    }, [router.query]);

    function renderPets() {
        return getOptions().map(function(val, index){
            return (
                <button
                    key={index}
                    type='button'
                    className={
                        val.value == selected.value
                            ? `input-button active`
                            : `input-button`
                    }
                    onClick={()=>{
                        setSelected({
                            label: val.label,
                            value: val.value,
                        });
                    }}
                >{val.label}</button>
            )
        });
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Cho phép thú nuôi"
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            onClose={onClose}
            onRefresh={()=>{
                setSelected([]);
            }}
            onSubmit={()=>{
                onSubmit(selected);
                onClose();
            }}
        >
            <div className={cl.wrap_buttons}>
                {renderPets()}
            </div>
        </Modal>
    );
}

export default ModalPet;
