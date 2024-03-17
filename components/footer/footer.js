import React from 'react';
import cl from './footer.module.css';
import Link from 'next/link';
import logoImg from '../../assets/imgs/logo.png';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.logo_brand}>
                <Link href='/'>
                    <img src={logoImg.src} alt='logo'></img>
                </Link>
                <span>Tìm Trọ 123 là kênh tìm trọ miễn phí cho tất cả mọi người.</span>
            </div>
            <div className={cl.social_links}>
                <a className={cl.social_item}>
                    <img alt='facebook-icon' src='https://freelogopng.com/images/all_img/1692797523facebook-logo-png-white.png'></img>
                </a>
                <a className={cl.social_item}>
                    <img alt='facebook-icon' src='https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png'></img>
                </a>
                <a className={cl.social_item}>
                    <img alt='facebook-icon' src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png'></img>
                </a>
            </div>
            <div className={cl.all_col}>
                <div className={cl.col}>
                    <div className={cl.col_title}>Hỗ trợ người đăng</div>
                    <Link className={cl.col_item} href=''><div>Câu hỏi thường gặp</div></Link>
                    <Link className={cl.col_item} href=''><div>Hướng dẫn sử dụng</div></Link>
                    <Link className={cl.col_item} href=''><div>Quy định sử dụng</div></Link>
                </div>
                <div className={cl.col}>
                    <div className={cl.col_title}>Hỗ trợ người tìm</div>
                    <Link className={cl.col_item} href=''><div>Câu hỏi thường gặp</div></Link>
                    <Link className={cl.col_item} href=''><div>Hướng dẫn sử dụng</div></Link>
                    <Link className={cl.col_item} href=''><div>Quy định sử dụng</div></Link>
                </div>
                <div className={cl.col}>
                    <div className={cl.col_title}>Về chúng tôi</div>
                    <Link className={cl.col_item} href=''><div>Giới thiệu</div></Link>
                    <Link className={cl.col_item} href=''><div>Chính sách bảo mật</div></Link>
                </div>
                <div className={cl.col}>
                    <div className={cl.col_title}>Liên hệ</div>
                    <Link className={cl.col_item} href=''><div>Gmail</div></Link>
                    <Link className={cl.col_item} href=''><div>Zalo</div></Link>
                    <Link className={cl.col_item} href=''><div>Facebook</div></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
