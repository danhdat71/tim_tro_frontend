const PROVIDER = 0;
const FINDER = 1;
const ADMIN = 10;

function getStringValue(role) {
    switch (role) {
        case PROVIDER:
            return "Người cho thuê";
        case FINDER:
            return "Người tìm thuê";
        case ADMIN:
            return "Admin";
        default:
            return "Unknown";
    }
}

export {
    PROVIDER,
    FINDER,
    ADMIN,
    getStringValue,
};
