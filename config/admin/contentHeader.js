const DASHBOARD = 'Tổng quan';
const USERS = 'Người dùng';
const BUG_REPORT = 'Báo cáo lỗi';
const REPORT = 'Báo cáo vi phạm';
const SETTINGS = 'Cài đặt';

function getContentHeaderText(pathname) {
    if (pathname.startWith('admin/dashboard')) {
        return DASHBOARD;
    } else if (pathname.startWith('admin/users')) {
        return USERS;
    } else if (pathname.startWith('admin/bug-report')) {
        return BUG_REPORT;
    } else if (pathname.startWith('admin/report')) {
        return REPORT;
    } else if (pathname.startWith('admin/settings')) {
        return SETTINGS;
    }
}

export {
    getContentHeaderText,
}