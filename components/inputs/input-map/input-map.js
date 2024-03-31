import React, { useEffect, useState } from 'react';
import cl from './input-map.module.css';
import GoogleMapReact from 'google-map-react';
import { getLatLngFromAddress } from '@/helpers/http-requests/map';
import axios from 'axios';
import { calculateZoomLevel } from '@/helpers/map';


const config = {
    key: process.env.GOOGLE_MAP_KEY,
    language: process.env.GOOGLE_MAP_LANGUAGE,
    region: process.env.GOOGLE_MAP_LANGUAGE,
}

const InputMap = (props) => {
    let { address } = props;
    let [center, setCenter] = useState({
        lat: 0,
        lng: 0,
        zoom: 12,
    });
    let [marker, setMarker] = useState({
        lat: 0,
        lng: 0,
    });

    useEffect(function(){
        const fetchAddress = async () => {
            let result = await getLatLngFromAddress(address);
            handleSetCenter({
                lat: result?.lat,
                lng: result?.lng,
                zoom: result?.zoom,
            });
        }
        fetchAddress();
    }, [address]);

    function handleSetCenter(value) {
        let newCenter = {...center};
        newCenter.lat = value.lat;
        newCenter.lng = value.lng;
        newCenter.zoom = value.zoom;

        setCenter(newCenter);
    }

    function handleSetMarker(value) {
        let newMarker = {...marker};
        newMarker.lat = value.lat;
        newMarker.lng = value.lng;
        newMarker.zoom = value.zoom;

        setMarker(newMarker);
    }

    return (
        <div className={cl.input_map}>
            <GoogleMapReact
                bootstrapURLKeys={config}
                center={center}
                zoom={center.zoom}
                onClick={(value)=>{
                    handleSetMarker({
                        lat: value?.lat,
                        lng: value?.lng,
                    });
                }}
                onZoomAnimationEnd={(zoom)=>{
                    handleSetCenter({
                        lat: center?.lat,
                        lng: center?.lng,
                        zoom: zoom?.zoom,
                    });
                }}
            >
                <div
                    className={cl.marker}
                    lat={marker.lat}
                    lng={marker.lng}
                >
                    <div className={cl.marker_icon}>
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                </div>
            </GoogleMapReact>
        </div>
    );
}

export default InputMap;
