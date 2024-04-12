import React from 'react';
import Modal from '../modal/modal';
import InputGroup from '@/components/inputs/input-group/input-group';
import TextareaInputWithCount from '@/components/inputs/textarea-input-with-count/textarea-input-with-count';

const ModalAboutDesc = (props) => {
    let {
        isShowModal,
        onClose,
        value,
        onChange,
        onSubmit,
        errMsg,
        submitBtnDisabled,
    } = props

    return (
        <Modal
            isShowModal={isShowModal}
            title="Giới thiệu"
            subTitle="Bạn có thể giới thiệu về các phòng trọ của mình"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>Giới thiệu</label>
                <TextareaInputWithCount
                    max='5000'
                    className='textarea w-100'
                    style={{height:'200px'}}
                    errMsg={errMsg?.description}
                    onChange={onChange}
                    value={value}
                ></TextareaInputWithCount>
            </div>
        </Modal>
    );
}

export default ModalAboutDesc;
