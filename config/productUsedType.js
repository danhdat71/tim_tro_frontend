const HOSTEL = 1;
const FULL_HOUSE = 2;
const SLEEP_BOX = 3;
const APARTMENT = 4;
const OFFICE = 5;
const TOGETHER = 6;
const OTHER = 7;

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
    } else if (status == TOGETHER) {
        return "Ở ghép";
    } else if (status == OTHER) {
        return "Khác";
    } else {
        return "Chưa cung cấp";
    }
}

function getStringValues(arrStatus) {
    let result = "";
    result = arrStatus.map(function(val, index) {
        let str = getStringValue(val);
        if (index < arrStatus.length - 1) {
            str += ", "
        }
        return str;
    });

    return result;
}

function getOptions() {
    return [
        {
            label: getStringValue(HOSTEL),
            value: HOSTEL
        },
        {
            label: getStringValue(FULL_HOUSE),
            value: FULL_HOUSE
        },
        {
            label: getStringValue(SLEEP_BOX),
            value: SLEEP_BOX
        },
        {
            label: getStringValue(APARTMENT),
            value: APARTMENT
        },
        {
            label: getStringValue(OFFICE),
            value: OFFICE
        },
        {
            label: getStringValue(TOGETHER),
            value: TOGETHER
        },
        {
            label: getStringValue(OTHER),
            value: OTHER
        }
    ];
}

export {
    HOSTEL,
    FULL_HOUSE,
    SLEEP_BOX,
    APARTMENT,
    OFFICE,
    TOGETHER,
    OTHER,
    getStringValue,
    getOptions,
    getStringValues,
};
