const HOSTEL = 1;
const FULL_HOUSE = 2;
const SLEEP_BOX = 3;
const APARTMENT = 4;
const OFFICE = 5;
const OTHER = 6;

function getStringValue(status) {
    if (status == HOSTEL) {
        return "Phòng trọ";
    } else if (status == FULL_HOUSE) {
        return "Nhà nguyên căn";
    } else if (status == SLEEP_BOX) {
        return "Sleep box";
    } else if (status == APARTMENT) {
        return "Chung cư";
    } else if (status == OFFICE) {
        return "Văn phòng";
    } else if (status == OTHER) {
        return "Khác";
    } else {
        return "Chưa cung cấp";
    }
}

export {
    HOSTEL,
    FULL_HOUSE,
    SLEEP_BOX,
    APARTMENT,
    OFFICE,
    OTHER,
    getStringValue,
};
