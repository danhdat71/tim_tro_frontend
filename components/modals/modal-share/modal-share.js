import React, { memo } from 'react';
import cl from './modal-share.module.css';
import Modal from '../modal/modal';
import fbIcon from '../../../assets/imgs/facebook.png';
import zlIcon from '../../../assets/imgs/zalo.png';

const ModalShare = (props) => {

    let {
        showModalShare,
        handleShowModalShare
    } = props;

    return (
        <Modal
            isShowModal={showModalShare}
            title="Chia sẻ bài đăng"
            subTitle="Hãy chia sẻ bài đăng để bạn bè cùng biết đến trọ này"
            submitBtnText="Copy link"
            onClose={()=>{
                handleShowModalShare(false);
            }}
            onSubmit={()=>{
                handleShowModalShare(false);
            }}
        >
            <div className={cl.wrap_social}>
                <a href='#' className={cl.social}>
                    <div className={cl.wrap_img}>
                        <img src={fbIcon.src} loading='lazy' alt={fbIcon.src}></img>
                    </div>
                    <div className={cl.social_name}>Facebook</div>
                </a>
                <a href='#' className={cl.social}>
                    <div className={cl.wrap_img}>
                        <img src={zlIcon.src} loading='lazy' alt={fbIcon.src}></img>
                    </div>
                    <div className={cl.social_name}>Zalo</div>
                </a>
            </div>
        </Modal>
    );
}

export default memo(ModalShare);
