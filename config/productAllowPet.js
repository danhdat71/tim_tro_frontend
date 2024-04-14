const NOT_ALLOW = 1;
const RULE_ALLOW = 2;
const ALLOW = 3;

function getStringValue(status) {
    if (status == NOT_ALLOW) {
        return "Không cho phép";
    } else if (status == RULE_ALLOW) {
        return "Cho phép & cam kết";
    } else if (status == ALLOW) {
        return "Cho phép";
    } else {
        return "Chưa cung cấp";
    }
}

export {
    NOT_ALLOW,
    RULE_ALLOW,
    ALLOW,
    getStringValue,
};
