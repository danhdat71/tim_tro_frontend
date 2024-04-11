import React from 'react';
import Modal from '../modal/modal';
import InputGroup from '@/components/inputs/input-group/input-group';

const ModalAppId = (props) => {

    let {
        isShowModal,
        onClose,
        value,
        onChange,
    } = props;

    return (
        <Modal
            isShowModal={isShowModal}
            title="Sửa APP ID"
            subTitle="Bạn có thể chia sẻ trang cá nhân cho mọi người tìm trọ"
            submitBtnText="Xác nhận"
            onClose={onClose}
        >
            <div className='form-group'>
                <label className='label label-block'>App ID <span>*</span></label>
                <InputGroup
                    type="text"
                    min="10"
                    max="200"
                    errMsg={['lỗi']}
                    value={value}
                    onChange={onChange}
                ></InputGroup>
            </div>
        </Modal>
    );
}

export default ModalAppId;
