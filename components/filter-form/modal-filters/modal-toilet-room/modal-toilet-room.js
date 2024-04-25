import React, { useEffect, useState } from 'react';
import cl from './modal-toilet-room.module.css';
import Modal from '@/components/modals/modal/modal';
import { getOptions } from '@/config/productToiletRoom';
import { useRouter } from 'next/router';

const ModalToiletRoom = (props) => {
    let {
        onSubmit,
        onClose,
        isShowModal,
    } = props;
    let router = useRouter();
    let [selected, setSelected] = useState([]);

    useEffect(function(){
        setSelected({
            value: router.query.toilet_rooms
        });
    }, [router.query]);

    function renderRooms() {
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
            title="Số phòng vệ sinh"
            submitBtnText="Lọc kết quả"
            submitBtnIcon={<i className="fal fa-search"></i>}
            onClose={onClose}
            onRefresh={()=>{
                setSelected([]);
            }}
            onSubmit={()=>{
                onClose();
                onSubmit(selected);
            }}
        >
            <div className={cl.wrap_buttons}>
                {renderRooms()}
            </div>
        </Modal>
    );
}

export default ModalToiletRoom;
