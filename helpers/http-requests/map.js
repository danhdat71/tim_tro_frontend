import axios from 'axios';
import { calculateZoomLevel } from '../map';

async function getLatLngFromAddress(address) {
    console.log(address);
    if (address == "") {
        address = "Việt Nam";
    }
    let res = await axios.get(`${process.env.GOOGLE_MAP_API}&address=${address}`);
    res = res.data.results;
    res.lat = res[0]?.geometry.location.lat;
    res.lng = res[0]?.geometry.location.lng;
    res.zoom = calculateZoomLevel(res[0]?.geometry.viewport);

    return res;
}

export {
    getLatLngFromAddress,
};