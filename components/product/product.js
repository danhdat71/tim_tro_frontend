import React from 'react';
import cl from './product.module.css';
import Link from 'next/link';

const Product = () => {
    return (
        <div className={cl.product_item}>
            <div className={cl.left_card}>
                <Link href='hostels/25' className={cl.product_item_link}>
                    <div className={cl.wrap_img}>
                        <img
                            src='https://ctpt.cdn.static123.com/images/thumbs/900x600/fit/2024/03/16/z4834343444622-eeda2f9adfefabf22233c7bb3b488d25_1710572307.jpg'
                            alt='image'
                            loading='lazy'
                        />
                        <div className={cl.count_img_num}>
                            <span><i className="fal fa-image"></i></span>
                            <span>4</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={cl.right_card}>
                <Link href='/detail' className={cl.product_item_link}>
                    <div className={cl.product_name}>Phòng trọ Sao Mai, Tân Bình. Phòng sạch đẹp, full nội thất, có ban công. Giá tốt, ở ngay</div>
                </Link>
                <div className={cl.price}>1.5 triệu / tháng</div>
                <div className={cl.product_info_item}>
                    <span><i className="fal fa-home-lg"></i></span>
                    <span>10 mét</span>
                </div>
                <div className={cl.product_info_item}>
                    <span><i className="far fa-map-marker-alt"></i></span>
                    <span>Quận Phú Nhuận, TP. Hồ Chí Minh</span>
                </div>
                <div className={cl.product_info_item}>
                    <span><i className="far fa-booth-curtain"></i></span>
                    <span>2 phòng ngủ, 1 phòng WC</span>
                </div>
                <div className={cl.like_btn}>
                    <button><i className="far fa-heart"></i></button>
                    {/* <button><i class="fas fa-heart"></i></button> */}
                </div>
            </div>
        </div>
    );
}

export default Product;
