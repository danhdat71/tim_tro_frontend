const NO_RULE = 0;
const RULE = 1;

function getStringValue(status) {
    if (status == NO_RULE) {
        return "Tự do";
    } else if (status == RULE) {
        return "Quy định";
    } else {
        return "Chưa cung cấp";
    }
}

export {
    NO_RULE,
    RULE,
    getStringValue,
};
