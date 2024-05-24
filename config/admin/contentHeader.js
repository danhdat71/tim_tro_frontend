const DASHBOARD = 'Tổng quan';
const USERS = 'Người dùng';
const BUG_REPORT = 'Báo cáo lỗi';
const REPORT = 'Báo cáo vi phạm';
const SETTINGS = 'Cài đặt';
const PRODUCTS = 'Bài đăng';

function getContentHeaderText(pathname) {
    if (pathname?.startsWith('/admin/dashboard')) {
        return DASHBOARD;
    } else if (pathname?.startsWith('/admin/users')) {
        return USERS;
    } else if (pathname?.startsWith('/admin/bug-report')) {
        return BUG_REPORT;
    } else if (pathname?.startsWith('/admin/report')) {
        return REPORT;
    } else if (pathname?.startsWith('/admin/settings')) {
        return SETTINGS;
    } else if (pathname?.startsWith('/admin/products')) {
        return PRODUCTS;
    }
}

export {
    getContentHeaderText,
}