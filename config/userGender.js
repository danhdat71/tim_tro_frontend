const MALE = 0;
const FEMALE = 1;
const OTHER = 2;

function getStringValue(role) {
    if (role == MALE) {
        return "Nam";
    } else if (role == FEMALE) {
        return "Nữ";
    } else if (role == OTHER) {
        return "Khác";
    } else {
        return "Chưa cung cấp";
    }
}

export {
    MALE,
    FEMALE,
    OTHER,
    getStringValue,
};
