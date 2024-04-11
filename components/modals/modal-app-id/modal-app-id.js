import React from 'react';
import Modal from '../modal/modal';
import InputGroup from '@/components/inputs/input-group/input-group';

const ModalAppId = (props) => {

    let {
        isShowModal,
        onClose,
        value,
        onChange,
        onSubmit,
        errMsg,
        submitBtnDisabled,
    } = props;

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa APP ID"
            subTitle="Bạn có thể chia sẻ trang cá nhân cho mọi người tìm trọ"
            submitBtnText="Xác nhận"
            onClose={onClose}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <div className='form-group'>
                <label className='label label-block'>App ID <span>*</span></label>
                <InputGroup
                    type="text"
                    min="5"
                    max="200"
                    errMsg={errMsg?.app_id}
                    value={value}
                    onChange={onChange}
                ></InputGroup>
            </div>
        </Modal>
    );
}

export default ModalAppId;
