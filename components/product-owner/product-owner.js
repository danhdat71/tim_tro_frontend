import React from 'react';
import cl from './product-owner.module.css';
import Link from 'next/link';
import { formatNumber } from '@/helpers/priceHelper';

const ProductOwner = (props) => {

    let {
        image,
        title,
        price
    } = props;

    return (
        <div className={cl.product_item}>
            <div className={cl.left_card}>
                <Link href='/hostels/25' className={cl.product_item_link}>
                    <div className={cl.wrap_img}>
                        <img
                            src={image}
                            alt='image'
                            loading='lazy'
                        />
                    </div>
                </Link>
            </div>
            <div className={cl.right_card}>
                <Link href='/detail' className={cl.product_item_link}>
                    <div className={cl.product_name}>{title}</div>
                </Link>
                <div className={cl.price}>{formatNumber(price)} / tháng</div>
                <div className={cl.info_item}>
                    <span>Lượt xem: </span>
                    <b>10</b>
                </div>
                <div className={cl.button_bar}>
                    <button className={`${cl.button} ${cl.button_yellow}`}>
                        <span className={cl.button_icon}><i className="far fa-vote-yea"></i></span>
                        <span>Chỉnh sửa</span>
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
