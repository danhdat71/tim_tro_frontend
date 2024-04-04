import React from 'react';
import cl from './product-owner.module.css';
import Link from 'next/link';

const ProductOwner = () => {
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
                    <span>Lượt xem: </span>
                    <b>10</b>
                </div>
                <div className={cl.button_bar}>
                    {/* <button className={`${cl.button} ${cl.button_green}`}>
                        <span className={cl.button_icon}><i className="far fa-eye"></i></span>
                        <span>Yêu cầu xem</span>
                        <span>(2)</span>
                    </button>
                    <button className={`${cl.button} ${cl.button_yellow}`}>
                        <span className={cl.button_icon}><i class="fal fa-edit"></i></span>
                        <span>Chỉnh sửa</span>
                    </button> */}
                    <button className={`${cl.button} ${cl.button_yellow}`}>
                        <span className={cl.button_icon}><i className="far fa-vote-yea"></i></span>
                        <span>Lượt đánh giá</span>
                        <span>(2)</span>
                    </button>
                    <button className={`${cl.button} ${cl.button_cancel}`}>
                        <span className={cl.button_icon}><i className="far fa-trash"></i></span>
                        <span>Gỡ bỏ</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductOwner;
