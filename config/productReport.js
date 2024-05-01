const INFO_INVALID = 1;
const ADDRESS_NOT_FOUND = 2;
const SCAM = 3;
const IMAGE_NOT_ALLOW = 4;
const COPYRIGHT = 5;
const OTHER = 6;
const MAX_DESCRIPTION = 5000;

function getStringValue(status) {
    if (status == INFO_INVALID) {
        return 'Thông tin sai sự thật';
    } else if (status == ADDRESS_NOT_FOUND) {
        return 'Địa chỉ không tồn tại';
    } else if (status == SCAM) {
        return 'Lừa đảo, đa cấp, ...';
    } else if (status == IMAGE_NOT_ALLOW) {
        return 'Ảnh khoả thân, máu, tự sát, ...';
    } else if (status == COPYRIGHT) {
        return 'Bài viết sao chép từ nơi khác';
    } else if (status == OTHER) {
        return 'Khác';
    } else {
        return 'Chưa cung cấp';
    }
}

function getOptions() {
    return [
        {
            label: getStringValue(INFO_INVALID),
            value: INFO_INVALID
        },
        {
            label: getStringValue(ADDRESS_NOT_FOUND),
            value: ADDRESS_NOT_FOUND
        },
        {
            label: getStringValue(SCAM),
            value: SCAM
        },
        {
            label: getStringValue(IMAGE_NOT_ALLOW),
            value: IMAGE_NOT_ALLOW
        },
        {
            label: getStringValue(COPYRIGHT),
            value: COPYRIGHT
        },
        {
            label: getStringValue(OTHER),
            value: OTHER
        },
    ];
}

export {
    INFO_INVALID,
    ADDRESS_NOT_FOUND,
    SCAM,
    IMAGE_NOT_ALLOW,
    COPYRIGHT,
    OTHER,
    MAX_DESCRIPTION,
    getOptions,
};
