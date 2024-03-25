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
    } = props;

    
    let [oldAvatar, setOldAvatar] = useState();

    useEffect(function(){
        let fetchedOldAvatar = 'https://cdn.dribbble.com/users/17793/screenshots/16101765/media/beca221aaebf1d3ea7684ce067bc16e5.png';
        setOldAvatar({
            preview: fetchedOldAvatar,
        });
        document.getElementById('input-avatar').value = null;
    }, [isShowModal]);

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
                />
            )
        } else {
            if (oldAvatar?.preview != '') {
                return (
                    <img
                        src={oldAvatar?.preview}
                    />
                );
            }
        }

        return (
            <img
                src={defaultAvatarIcon.src}
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
            submitBtnDisabled={selectedAvatar ? false : true}
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
