import React, { memo } from 'react';
import SidebarBrand from './sidebar-brand/sidebar-brand';
import SidebarUser from './sidebar-user/sidebar-user';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {

    const router = useRouter();

    function handleActiveMenuItem(itemPath) {
        if (router.pathname.startsWith(itemPath)) {
            return 'bg-info';
        };
    }

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <SidebarBrand></SidebarBrand>
            <div className="sidebar">
                <SidebarUser></SidebarUser>
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item mb-1">
                            <Link href="/admin/dashboard" className={`nav-link ${handleActiveMenuItem('/admin/dashboard')}`}>
                                <i className="nav-icon fad fa-tachometer-alt-fast"></i>
                                <p>Tổng quan</p>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <Link href="/admin/users" className={`nav-link ${handleActiveMenuItem('/admin/users')}`}>
                                <i className="nav-icon fad fa-users"></i>
                                <p>Người dùng</p>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <Link href="/admin/products" className={`nav-link ${handleActiveMenuItem('/admin/products')}`}>
                                <i className="nav-icon fad fa-copy"></i>
                                <p>Bài đăng</p>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <Link href="/admin/bug-report" className={`nav-link ${handleActiveMenuItem('/admin/bug-report')}`}>
                                <i className="nav-icon fad fa-bug"></i>
                                <p>Báo cáo lỗi</p>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <Link href="/admin/report" className={`nav-link ${handleActiveMenuItem('/admin/report')}`}>
                                <i className="nav-icon fad fa-flag"></i>
                                <p>Báo cáo vi phạm</p>
                            </Link>
                        </li>
                        <li className="nav-item mb-1">
                            <Link href="/admin/settings" className={`nav-link ${handleActiveMenuItem('/admin/settings')}`}>
                                <i className="nav-icon fad fa-cogs"></i>
                                <p>Cài đặt</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default memo(Sidebar);
