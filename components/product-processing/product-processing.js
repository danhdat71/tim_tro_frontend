import Link from 'next/link';
import React from 'react';
import cl from './product-processing.module.css';
import ButtonIcon from '../buttons/button-icon/button-icon';

const ProductProcessing = () => {
    return (
        <div className={cl.product_item}>
            <div className={cl.left_card}>
                <Link href='/hostels/25' className={cl.product_item_link}>
                    <div className={cl.wrap_img}>
                        <img
                            src='https://ctpt.cdn.static123.com/images/thumbs/900x600/fit/2024/03/16/z4834343444622-eeda2f9adfefabf22233c7bb3b488d25_1710572307.jpg'
                            alt='image'
                            loading='lazy'
                        />
                    </div>
                </Link>
            </div>
            <div className={cl.right_card}>
                <Link href='/detail' className={cl.product_item_link}>
                    <div className={cl.product_name}>Phòng trọ Sao Mai, Tân Bình. Phòng sạch đẹp, full nội thất, có ban công. Giá tốt, ở ngay</div>
                </Link>
                <div className={cl.price}>1.5 triệu / tháng</div>
                <div className={cl.info_item}>
                    <span>Xem lúc: </span>
                    <b>07:00 21/12/2025</b>
                </div>
                <div className={cl.info_item}>
                    <span>Trạng thái: </span>
                    {/* <span className={cl.text_waiting}>Đang yêu cầu</span> */}
                    {/* <span className={cl.text_waiting_view}>Đang chờ xem</span> */}
                    {/* <span className={cl.text_success}>Đã xem</span> */}
                    <span className={cl.text_cancel}>Đã bị huỷ</span>
                </div>
                <div className={cl.button_bar}>
                    <button className={`${cl.button} ${cl.button_cancel}`}>
                        <span>Yêu cầu huỷ</span>
                        <span><i className="far fa-ban"></i></span>
                    </button>
                    <button className={`${cl.button} ${cl.button_vote}`}>
                        <span>Đánh giá</span>
                        <span><i className="far fa-clipboard-list-check"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductProcessing;
