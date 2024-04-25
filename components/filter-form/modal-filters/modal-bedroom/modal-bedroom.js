import React, { useEffect, useState } from 'react';
import cl from './modal-bedroom.module.css';
import Modal from '@/components/modals/modal/modal';
import { getOptions } from '@/config/productBedRoom';
import { useRouter } from 'next/router';

const ModalBedroom = (props) => {

    let router = useRouter();
    let [selected, setSelected] = useState([]);
    let {
        onSubmit,
        onClose,
        isShowModal,
    } = props;

    useEffect(function(){
        setSelected({
            value: router.query.bed_rooms
        })
    }, [router.query]);

    function renderRooms()
    {
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
                            value: val.value,
                            label: val.label,
                        });
                    }}
                >{val.label}</button>
            )
        });
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Số phòng ngủ"
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
                {renderRooms()}
            </div>
        </Modal>
    );
}

export default ModalBedroom;
