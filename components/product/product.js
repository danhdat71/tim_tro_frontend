import React, { useEffect, useState } from 'react';
import cl from './product.module.css';
import Link from 'next/link';
import { formatNumber } from '@/helpers/priceHelper';
import {getStringValue as getStringValueWC} from '@/config/productToiletRoom';
import {getStringValue as getStringValueBedRooms} from '@/config/productBedRoom';

const Product = (props) => {
    let {
        id,
        slug,
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
        isShowSaveButton = false,
        isSaved = false,
        onClickSave,
    } = props;

    function renderSaveButton() {
        if (isShowSaveButton == true) {
            if (isSaved == true) {
                return (
                    <div
                        className={cl.like_btn}
                        onClick={()=>{
                            onClickSave({
                                product_id: id,
                                action: 0
                            });
                        }}
                    >
                        <button><i className="fas fa-heart"></i></button>
                    </div>
                );
            } else {
                return (
                    <div
                        className={cl.like_btn}
                        onClick={()=>{
                            onClickSave({
                                product_id: id,
                                action: 1
                            });
                        }}
                    >
                        <button><i className="far fa-heart"></i></button>
                    </div>
                );
            }
        }
    }

    return (
        <div className={cl.product_item}>
            <div className={cl.left_card}>
                <Link href={`/hostels/${slug}`} className={cl.product_item_link}>
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
                <Link href={`/hostels/${slug}`} className={cl.product_item_link}>
                    <div className={cl.product_name}>{title}</div>
                </Link>
                <div className={cl.price}>{formatNumber(price)} / tháng</div>
                <div className={`${cl.product_info_item} ${cl.product_info_item_acreage}`}>
                    <span><i className="fal fa-home-lg"></i></span>
                    <span>{acreage} mét</span>
                </div>
                <div className={`${cl.product_info_item} ${cl.product_info_item_address}`}>
                    <span><i className="far fa-map-marker-alt"></i></span>
                    <span>{wardName}, {districtName}, {provinceName}</span>
                </div>
                <div className={`${cl.product_info_item} ${cl.product_info_item_rooms}`}>
                    <span><i className="far fa-booth-curtain"></i></span>
                    <span>{getStringValueBedRooms(bedRooms)}, {getStringValueWC(toiletRooms)}</span>
                </div>
                {renderSaveButton()}
            </div>
        </div>
    );
}

export default Product;
