const NO_SHARED_HOUSE = 0;
const SHARED_HOUSE = 1;

function getStringValue(status) {
    if (status == NO_SHARED_HOUSE) {
        return "Không chung chủ";
    } else if (status == SHARED_HOUSE) {
        return "Chung chủ";
    } else {
        return "Chưa cung cấp";
    }
}

export {
    NO_SHARED_HOUSE,
    SHARED_HOUSE,
    getStringValue,
};
