import React from 'react';
import cl from './product.module.css';
import Link from 'next/link';
import { formatNumber } from '@/helpers/priceHelper';
import {getStringValue as getStringValueWC} from '@/config/productToiletRoom';
import {getStringValue as getStringValueBedRooms} from '@/config/productBedRoom';

const Product = (props) => {
    let {
        image,
        imageNum,
        title,
        acreage,
        wardName,
        districtName,
        provinceName,
        price,
        toiletRooms,
        bedRooms,
    } = props;

    return (
        <div className={cl.product_item}>
            <div className={cl.left_card}>
                <Link href='' className={cl.product_item_link}>
                    <div className={cl.wrap_img}>
                        <img
                            src={image}
                            alt='image'
                            loading='lazy'
                        />
                        <div className={cl.count_img_num}>
                            <span><i className="fal fa-image"></i></span>
                            <span>{imageNum}</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={cl.right_card}>
                <Link href='/detail' className={cl.product_item_link}>
                    <div className={cl.product_name}>{title}</div>
                </Link>
                <div className={cl.price}>{formatNumber(price)} / tháng</div>
                <div className={cl.product_info_item}>
                    <span><i className="fal fa-home-lg"></i></span>
                    <span>{acreage} mét</span>
                </div>
                <div className={cl.product_info_item}>
                    <span><i className="far fa-map-marker-alt"></i></span>
                    <span>{wardName}, {districtName}, {provinceName}</span>
                </div>
                <div className={cl.product_info_item}>
                    <span><i className="far fa-booth-curtain"></i></span>
                    <span>{getStringValueBedRooms(bedRooms)}, {getStringValueWC(toiletRooms)}</span>
                </div>
                <div className={cl.like_btn}>
                    <button><i className="far fa-heart"></i></button>
                    {/* <button><i className="fas fa-heart"></i></button> */}
                </div>
            </div>
        </div>
    );
}

export default Product;
