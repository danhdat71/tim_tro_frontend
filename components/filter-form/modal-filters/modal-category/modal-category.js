import React, { useEffect, useState } from 'react';
import cl from './modal-category.module.css';
import Modal from '@/components/modals/modal/modal';
import { getOptions } from '@/config/productUsedType';
import { useRouter } from 'next/router';

const ModalCategory = (props) => {

    let {
        onSubmit,
        onClose,
        isShowModal,
    } = props;
    let [selected, setSelected] = useState([]);
    let router = useRouter();

    useEffect(function(){
        // handle set selected
        let usedType = router?.query?.used_type?.split(',');
        let resultSelected = usedType?.map(function(val){
            return {
                value: val,
            }
        });
        if (resultSelected) {
            setSelected(resultSelected);
        }
    }, [router.query]);

    function handleSetSelected(select) {
        let newSelected = [...selected];
        let index = newSelected.findIndex((item)=>{
            return item.value == select.value;
        });

        if (index === -1) {
            newSelected.push(select);
        } else {
            newSelected.splice(index, 1);
        }

        setSelected(newSelected);
    }

    function renderButtons()
    {
        return getOptions().map(function(value, index) {
            return (
                <button
                    type='button'
                    key={index}
                    className={
                        selected?.findIndex((item) => {
                            return item.value == value.value;
                        }) != -1
                            ? `input-button active` 
                            : `input-button`
                    }
                    onClick={()=>{
                        handleSetSelected(value);
                    }}
                >{value.label}</button>
            );
        })
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Phân loại nhà"
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
            <div className={cl.filter_category}>
                {renderButtons()}
            </div>
        </Modal>
    );
}

export default ModalCategory;
