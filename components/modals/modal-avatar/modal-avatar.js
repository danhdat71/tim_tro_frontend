import React, { useEffect, useRef, useState } from 'react';
import Modal from '../modal/modal';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import cl from './modal-avatar.module.css';
import defaultAvatarIcon from '../../../assets/imgs/default_avatar.jpg';
import { isValidImage } from '@/config/image';


const ModalAvatar = (props) => {
    let {
        onClose,
        isShowModal,
        onSubmit,
        selectedAvatar,
        setSelectedAvatar,
        submitBtnDisabled,
        errors,
        defaultAvatar = defaultAvatarIcon.src,
    } = props;

    
    let [oldAvatar, setOldAvatar] = useState();

    useEffect(function(){
        setOldAvatar({
            preview: defaultAvatar,
        });
        document.getElementById('input-avatar').value = null;
    }, [isShowModal]); //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(function(){
        return () => {
            URL.revokeObjectURL(selectedAvatar?.preview);
        }
    }, [selectedAvatar]);

    function handleSelectedAvatar(avatarFile)
    {
        if (avatarFile) {
            if (!isValidImage(avatarFile)) {
                return;
            }
            avatarFile.preview = URL.createObjectURL(avatarFile);
            setSelectedAvatar(avatarFile);
        }
    }

    function renderAvatar()
    {
        if (selectedAvatar) {
            return (
                <img
                    src={selectedAvatar?.preview}
                    alt={selectedAvatar?.preview}
                />
            )
        } else {
            if (oldAvatar?.preview != '') {
                return (
                    <img
                        src={oldAvatar?.preview}
                        alt={oldAvatar?.preview}
                    />
                );
            }
        }

        return (
            <img
                src={defaultAvatarIcon.src}
                alt={defaultAvatarIcon.src}
            />
        );
    }

    return (
        <Modal
            isShowModal={isShowModal}
            title="Ảnh đại diện"
            subTitle="Chọn ảnh đẹp để bạn trông ấn tượng hơn"
            submitBtnText="Xác nhận"
            onClose={()=>{
                onClose();
                setSelectedAvatar(null);
            }}
            onSubmit={onSubmit}
            submitBtnDisabled={submitBtnDisabled}
        >
            <ButtonIcon
                className='w-100 mb-10px'
                text="Chọn ảnh đại diện"
                onClick={()=>{
                    document.getElementById('input-avatar').click();
                }}
            ></ButtonIcon>

            <div className={cl.wrap_avatar}>
                {renderAvatar()}
            </div>

            <div className='err-msg'>{errors?.avatar}</div>

            <input
                className={cl.input_avatar}
                type='file'
                accept='image/*'
                id='input-avatar'
                onChange={(e)=>{
                    handleSelectedAvatar(e.target.files[0]);
                }}
            ></input>
        </Modal>
    );
}

export default ModalAvatar;
