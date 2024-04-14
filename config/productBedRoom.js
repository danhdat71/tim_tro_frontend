const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FINE = 5;

function getStringValue(status) {
    if (status == ONE) {
        return "1 phòng ngủ";
    } else if (status == TWO) {
        return "2 phòng ngủ";
    } else if (status == THREE) {
        return "3 phòng ngủ";
    } else if (status == FOUR) {
        return "4 phòng ngủ";
    } else if (status == FINE) {
        return "5 phòng ngủ";
    } else {
        return "Chưa cung cấp";
    }
}

export {
    ONE,
    TWO,
    THREE,
    FOUR,
    FINE,
    getStringValue,
};
