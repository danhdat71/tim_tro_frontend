import React, { useState } from 'react';
import cl from './notification-vote.module.css';
import Product from '@/components/product/product';
import { Rating } from 'react-simple-star-rating';
import ButtonIcon from '@/components/buttons/button-icon/button-icon';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import { useRouter } from 'next/router';

const NotificationVote = () => {

    const router = useRouter()
    let [starVote, setStarVote] = useState();

    function handleSetStarVote(value) {
        setStarVote(value);
    }

    return (
        <div>
            <TitleCenterBig title="Đánh giá phòng trọ"></TitleCenterBig>
            <div className='default-text'>Hi Nguyễn, xin cảm ơn bạn đã dành thời gian xem trọ ABC vào lúc 21h30 ngày 21/12/2024. Mong bạn hãy dành chút thời gian để đánh giá trọ này nhé ! Xin cảm ơn !</div>
            <Product></Product>
            <div className={cl.form_rate}>
                <div className={`form-group ${cl.star_rate}`}>
                    <Rating
                        onClick={(value)=>{
                            handleSetStarVote(value);
                        }}
                    />
                    <div className={cl.text_star}>{convertStarToStringLabel(starVote)}</div>
                </div>
                <div className='form-group'>
                    <label className='label label-block'>Cảm nhận của bạn</label>
                    <textarea
                        className='w-100 textarea'
                        rows={5}
                        spellCheck={false}
                    ></textarea>
                </div>
                <div className={`form-group ${cl.buttons_wrap}`}>
                    <ButtonIcon
                        backgroundColor="gray"
                        text="Quay lại"
                        color="white"
                        icon={<i className="far fa-long-arrow-left"></i>}
                        isIconLeft={true}
                        onClick={()=>{
                            router.back();
                        }}
                    ></ButtonIcon>
                    <ButtonIcon
                        backgroundColor="rgb(0, 153, 91)"
                        text="Gửi đánh giá"
                        color="white"
                        icon={<i className="far fa-check"></i>}
                    ></ButtonIcon>
                </div>
            </div>
            
            
        </div>
    );
}

export default NotificationVote;
