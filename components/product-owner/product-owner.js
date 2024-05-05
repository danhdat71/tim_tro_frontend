import React from 'react';
import cl from './product-owner.module.css';
import Link from 'next/link';
import { formatNumber } from '@/helpers/priceHelper';
import { DRAFT } from '@/config/productStatus';

const ProductOwner = (props) => {

    let {
        id,
        image,
        title,
        price,
        slug,
        onClickRemove,
        viewedCount=0,
        status,
        detailAddress
    } = props;

    function handleRenderViewCount() {
        if (status != DRAFT) {
            return (
                <div className={cl.info_item}>
                    <span>Lượt xem: </span>
                    <b>{viewedCount}</b>
                </div>
            )
        }
    }

    return (
        <div className={cl.product_item}>
            <div className={cl.left_card}>
                <Link href={status != DRAFT ? `/hostels/${slug}` : '#'} className={cl.product_item_link}>
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
                <Link href={status != DRAFT ? `/hostels/${slug}` : '#'} className={cl.product_item_link}>
                    <div className={cl.product_name}>{title}</div>
                </Link>
                <div className={cl.price}>{formatNumber(price)} / tháng</div>
                <div className={cl.detail_address}>{detailAddress}</div>
                {handleRenderViewCount()}
                <div className={cl.button_bar}>
                    <Link
                        href={status == DRAFT ? `/provider/hostel-draft-edit/${slug}` : `/provider/hostel-edit/${slug}`}
                    >
                        <button className={`${cl.button} ${cl.button_yellow}`}>
                            <span className={cl.button_icon}><i className="far fa-vote-yea"></i></span>
                            <span>Chỉnh sửa</span>
                        </button>
                    </Link>
                    <button className={`${cl.button} ${cl.button_cancel}`} onClick={()=>{onClickRemove(id)}}>
                        <span className={cl.button_icon}><i className="far fa-trash"></i></span>
                        <span>Gỡ bỏ</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductOwner;
