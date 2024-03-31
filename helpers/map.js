function calculateZoomLevel(viewport) {
    const GLOBE_WIDTH = 256; // Width of the world in pixels at zoom level 0
    const mapWidth = window.innerWidth;
    const mapHeight = window.innerHeight;
    const ne = viewport.northeast;
    const sw = viewport.southwest;

    const latFraction = (ne.lat - sw.lat) / 360;
    const lngDiff = ne.lng - sw.lng;
    let lngFraction = lngDiff < 0 ? (lngDiff + 360) / 360 : lngDiff / 360;

    const latZoom = Math.log(mapHeight / GLOBE_WIDTH / latFraction) / Math.LN2;
    const lngZoom = Math.log(mapWidth / GLOBE_WIDTH / lngFraction) / Math.LN2;
    const zoom = Math.min(latZoom, lngZoom);

    return zoom;
};

export {calculateZoomLevel};