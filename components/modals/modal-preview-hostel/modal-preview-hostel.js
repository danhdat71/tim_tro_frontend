import React from 'react';
import cl from './modal-preview-hostel.module.css';
import SliderWithThumb from '@/components/slider-with-thumb/slider-with-thumb';
import ProductDetailInfo from '@/components/product-detail-info/product-detail-info';

const ModalPreviewHostel = () => {
    return (
        <div>
            <SliderWithThumb></SliderWithThumb>
            <div className={cl.hostel_detail}>
                <h2 className={cl.product_name}>Cho thuê phòng trọ hẻm an ninh - xe tải tận cửa - Nguyễn Văn Đậu - Bình Thạnh</h2>
                <div className={cl.price}>1,5 triệu / tháng</div>
                <ProductDetailInfo></ProductDetailInfo>
            </div>
        </div>
    );
}

export default ModalPreviewHostel;
