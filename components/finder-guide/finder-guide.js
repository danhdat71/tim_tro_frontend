import React, { memo } from 'react';
import cl from './finder-guide.module.css';
import contractSignImg from '../../assets/imgs/contract_sign.png';
import searchIconImg from '../../assets/imgs/search_icon.png';
import partnerIconImg from '../../assets/imgs/partner_icon.png';
import ratetinIcon from '../../assets/imgs/rateting_icon.png';
import userLoginIcon from '../../assets/imgs/user_login_icon.png';
import calendarIcon from '../../assets/imgs/calenda_icon.png';

const FinderGuide = () => {
    return (
        <div className={cl.finder_guide}>
            <h4 className={cl.title}>Các bước dành cho người dùng</h4>
            <div className={cl.step_list}>
                <div className={cl.step_item}>
                    <div className={cl.step_item_head}>
                        <span>1. </span>
                        <span>Đăng nhập</span>
                    </div>
                    <div className={cl.step_item_img}>
                        <img src={userLoginIcon.src} alt={userLoginIcon.src}/>
                    </div>
                    <div className={cl.desc}>Bạn có thể đăng nhập với tư cách người tìm hoặc người rao.</div>
                </div>
                <div className={cl.step_item}>
                    <div className={cl.step_item_head}>
                        <span>2. </span>
                        <span>Tìm kiếm</span>
                    </div>
                    <div className={cl.step_item_img}>
                        <img src={searchIconImg.src} alt={searchIconImg.src}/>
                    </div>
                    <div className={cl.desc}>Tìm kiếm & lọc các tin đăng để tìm trọ phù hợp.</div>
                </div>
                <div className={cl.step_item}>
                    <div className={cl.step_item_head}>
                        <span>3. </span>
                        <span>Đặt lịch hẹn</span>
                    </div>
                    <div className={cl.step_item_img}>
                        <img src={calendarIcon.src} alt={calendarIcon.src}/>
                    </div>
                    <div className={cl.desc}>Thỏa thuận hẹn xem giữa người đăng và người tìm.</div>
                </div>
                <div className={cl.step_item}>
                    <div className={cl.step_item_head}>
                        <span>4. </span>
                        <span>Đến xem trọ</span>
                    </div>
                    <div className={cl.step_item_img}>
                        <img src={partnerIconImg.src} alt={calendarIcon.src}/>
                    </div>
                    <div className={cl.desc}>Liên hệ và đến xem trọ trực tiếp thông qua thỏa thuận trước.</div>
                </div>
                <div className={cl.step_item}>
                    <div className={cl.step_item_head}>
                        <span>5. </span>
                        <span>Đánh giá</span>
                    </div>
                    <div className={cl.step_item_img}>
                        <img src={ratetinIcon.src} alt={calendarIcon.src}/>
                    </div>
                    <div className={cl.desc}>Có thể để lại đánh giá giữa người đăng và người tìm.</div>
                </div>
                <div className={cl.step_item}>
                    <div className={cl.step_item_head}>
                        <span>6. </span>
                        <span>Quyết định</span>
                    </div>
                    <div className={cl.step_item_img}>
                        <img src={contractSignImg.src} alt={calendarIcon.src}/>
                    </div>
                    <div className={cl.desc}>Bước cuối cùng để đưa ra quyết định thuê.</div>
                </div>
            </div>
        </div>
    );
}

export default memo(FinderGuide);
