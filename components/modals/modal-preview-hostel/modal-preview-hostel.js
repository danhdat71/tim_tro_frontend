import React from 'react';
import cl from './modal-preview-hostel.module.css';
import SliderWithThumb from '@/components/slider-with-thumb/slider-with-thumb';
import ProductDetailInfo from '@/components/product-detail-info/product-detail-info';
import { convertPriceStringToVnMoneyKey, formatNumber } from '@/helpers/priceHelper';

const ModalPreviewHostel = (props) => {
    let {
        createData
    } = props;

    function getImageLinks(list) {
        return list?.map(function(value, index){
            if (value.id == null) {
                return {
                    url: value.preview,
                    thumb_url: value.preview,
                };
            } else {
                return {
                    url: `${process.env.BACKEND_URL}/${value.url}`,
                    thumb_url: `${process.env.BACKEND_URL}/${value.url}`
                }
            }
        });
    }

    return (
        <div>
            <SliderWithThumb
                imageThumbs={getImageLinks(createData?.type == 'update' ? createData.preview_images : createData?.product_images)}
                images={getImageLinks(createData?.type == 'update' ? createData.preview_images : createData?.product_images)}
            ></SliderWithThumb>
            <div className={cl.hostel_detail}>
                <h2 className={cl.product_name}>{createData?.title}</h2>
                <div className={cl.price}>{formatNumber(String(createData?.price))} / tháng</div>
                <ProductDetailInfo
                    data={createData}
                ></ProductDetailInfo>
            </div>
        </div>
    );
}

export default ModalPreviewHostel;
