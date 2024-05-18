import React, { memo } from 'react';
import cl from './product-detail-info.module.css';
import { getStringValue as getStringValueShareHouse } from '@/config/productShareHouse';
import { getStringValue as getStringValueUsedType } from '@/config/productUsedType';
import { getStringValue as getStringValueBedRoom } from '@/config/productBedRoom';
import { getStringValue as getStringValueToiletRoom } from '@/config/productToiletRoom';
import { getStringValue as getStringValueTimeRule } from '@/config/productTimeRule';
import { getStringValue as getStringValueAllowPet } from '@/config/productAllowPet';
import GoogleMapReact from 'google-map-react';

const config = {
    key: process.env.GOOGLE_MAP_KEY,
    language: process.env.GOOGLE_MAP_LANGUAGE,
    region: process.env.GOOGLE_MAP_LANGUAGE,
}

const ProductDetailInfo = (props) => {

    let {
        data
    } = props;

    return (
        <>
            <b className={cl.title}>Thông tin chính:</b>
            <table className={cl.detail_product_table}>
                <tbody>
                    <tr>
                        <td>
                            <span><i className="fad fa-map-marker-alt"></i></span>
                            <span>Địa chỉ:</span>
                        </td>
                        <td>{data?.detail_address}</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-pencil-ruler"></i></span>
                            <span>Diện tích:</span>
                        </td>
                        <td>{data?.acreage} m<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="far fa-house-user"></i></span>
                            <span>Chung chủ:</span>
                        </td>
                        <td>{getStringValueShareHouse(data?.is_shared_house)}</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-home-lg-alt"></i></span>
                            <span>Loại sử dụng:</span>
                        </td>
                        <td>{getStringValueUsedType(data?.used_type)}</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="far fa-person-booth"></i></span>
                            <span>Số phòng:</span>
                        </td>
                        <td>
                            <div className={cl.col_item}>{getStringValueBedRoom(data?.bed_rooms)}</div>
                            <div className={cl.col_item}>{getStringValueToiletRoom(data?.toilet_rooms)}</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-user-clock"></i></span>
                            <span>Giờ giấc:</span>
                        </td>
                        <td>{getStringValueTimeRule(data?.time_rule)}</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-paw-alt"></i></span>
                            <span>Thú cưng:</span>
                        </td>
                        <td>{getStringValueAllowPet(data?.is_allow_pet)}</td>
                    </tr>
                </tbody>
            </table>

            <b className={cl.title}>Mô tả:</b>
            <div className={cl.product_desc}>{data?.description}</div>

            <b className={cl.title}>Bản đồ</b>
            <div className={cl.map}>
                <GoogleMapReact
                    bootstrapURLKeys={config}
                    center={{lat:data?.lat, lng:data?.long}}
                    zoom={18}
                >
                    <div
                        className={cl.marker}
                        lat={data?.lat}
                        lng={data?.long}
                    >
                        <div className={cl.marker_icon}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                </GoogleMapReact>
                <a
                    className={cl.view_map_app}
                    href={`http://maps.google.com/?q=${data?.lat},${data?.long}`}
                    target='_blank'
                >
                    <span><i class="fab fa-google"></i></span>
                    <span>Xem bằng ứng dụng</span>
                </a>
            </div>
        </>
    );
}

export default memo(ProductDetailInfo);
