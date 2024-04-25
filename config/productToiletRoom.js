const NONE = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FINE = 5;

function getStringValue(status) {
    if (status == NONE) {
        return "Phòng wc sinh chung";
    } else if (status == ONE) {
        return "1 phòng vệ sinh";
    } else if (status == TWO) {
        return "2 phòng vệ sinh";
    } else if (status == THREE) {
        return "3 phòng vệ sinh";
    } else if (status == FOUR) {
        return "4 phòng vệ sinh";
    } else if (status == FINE) {
        return "5 phòng vệ sinh";
    } else {
        return "Chưa cung cấp";
    }
}

function getOptions() {
    return [
        {
            label: getStringValue(NONE),
            value: NONE
        },
        {
            label: getStringValue(ONE),
            value: ONE
        },
        {
            label: getStringValue(TWO),
            value: TWO
        },
        {
            label: getStringValue(THREE),
            value: THREE
        },
        {
            label: getStringValue(FOUR),
            value: FOUR
        },
        {
            label: getStringValue(FINE),
            value: FINE
        },
    ];
}

export {
    NONE,
    ONE,
    TWO,
    THREE,
    FOUR,
    FINE,
    getStringValue,
    getOptions,
};
