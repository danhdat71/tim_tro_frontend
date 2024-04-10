const MALE = 0;
const FEMALE = 1;
const OTHER = 2;

function getStringValue(role) {
    switch (role) {
        case MALE:
            return "Nam";
        case FEMALE:
            return "Nữ";
        case OTHER:
            return "Khác";
        default:
            return "Chưa cung cấp";
    }
}

export {
    MALE,
    FEMALE,
    OTHER,
    getStringValue,
};
