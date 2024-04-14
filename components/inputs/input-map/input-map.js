import React, { memo, useEffect, useState } from 'react';
import cl from './input-map.module.css';
import GoogleMapReact from 'google-map-react';
import { getLatLngFromAddress } from '@/helpers/http-requests/map';

const config = {
    key: process.env.GOOGLE_MAP_KEY,
    language: process.env.GOOGLE_MAP_LANGUAGE,
    region: process.env.GOOGLE_MAP_LANGUAGE,
}

const InputMap = (props) => {
    let { 
        address,
        onChange = function(){}
    } = props;
    let [center, setCenter] = useState({
        lat: 0,
        lng: 0,
        zoom: 18,
    });

    useEffect(function(){
        onChange(center);
    }, [center]);

    useEffect(function(){
        if (address != '') {
            const fetchAddress = async () => {
                let result = await getLatLngFromAddress(address);
                handleSetCenter({
                    lat: result?.lat,
                    lng: result?.lng,
                    zoom: result?.zoom,
                });
            }
            fetchAddress();
        } else {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    let newCenter = {...center};
                    newCenter.lat = position.coords.latitude;
                    newCenter.lng = position.coords.longitude;
                    setCenter(newCenter);
                });
            }
        }

    }, [address]);

    function handleSetCenter(value) {
        let newCenter = {...center};
        newCenter.lat = value.lat;
        newCenter.lng = value.lng;
        newCenter.zoom = value.zoom;
        setCenter(newCenter);
    }

    return (
        <div className={cl.input_map}>
            <div className={cl.wrap_map}>
                <GoogleMapReact
                    bootstrapURLKeys={config}
                    center={center}
                    zoom={center.zoom}
                    onClick={(value)=>{
                        handleSetCenter({
                            lat: value?.lat,
                            lng: value?.lng,
                            zoom: 18,
                        });
                    }}
                >
                    <div
                        className={cl.marker}
                        lat={center.lat}
                        lng={center.lng}
                    >
                        <div className={cl.marker_icon}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                </GoogleMapReact>
            </div>
            <div className={cl.helper}>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Kéo thả chuột hoặc giữ 2 ngón tay và kéo thả để di chuyển bản đồ</span>
                </div>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Nháy đúp vào bản đồ hoặc giữ Ctrl + lăn chuột để phóng to nhanh</span>
                </div>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Nháy vào bản đồ để ghim vị trí</span>
                </div>
                <div className={cl.helper_item}>
                    <span className={cl.icon}><i className="fas fa-circle"></i></span>
                    <span>Khuyến khích chọn vị trí chuẩn nhất để người tìm có thể dễ dàng tìm thấy trọ</span>
                </div>
            </div>
        </div>
    );
}

export default memo(InputMap);
