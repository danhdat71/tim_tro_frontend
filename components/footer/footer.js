import React from 'react';
import cl from './footer.module.css';
import Link from 'next/link';
import logoImg from '../../assets/imgs/logo.png';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer_container}>
                <div className={cl.logo_brand}>
                    <Link href='/'>
                        <img src={logoImg.src} alt='logo'></img>
                    </Link>
                    <span>Stay Seeker là kênh tìm trọ tốt cho mọi người. Bằng cách đăng ký để sử dụng các tính năng của hệ thống. Mọi người có thể tìm được trọ như ý với chi phí phải chăng. Stay Seeker miễn phí & hiện không thu phí trên toàn hệ thống.</span>
                </div>
                <div className={cl.social_links}>
                    <a className={cl.social_item}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className={cl.social_item}>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className={cl.social_item}>
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className={cl.all_col}>
                    <div className={cl.col}>
                        <div className={cl.col_title}>Hỗ trợ người dùng</div>
                        <Link className={cl.col_item} href=''><div>Câu hỏi thường gặp</div></Link>
                        <Link className={cl.col_item} href=''><div>Hướng dẫn sử dụng</div></Link>
                        <Link className={cl.col_item} href=''><div>Quy định sử dụng</div></Link>
                    </div>
                    <div className={cl.col}>
                        <div className={cl.col_title}>Tài khoản</div>
                        <Link className={cl.col_item} href='/auth/register'><div>Đăng ký</div></Link>
                        <Link className={cl.col_item} href='/auth/login'><div>Đăng nhập</div></Link>
                        <Link className={cl.col_item} href='/auth/reset-password'><div>Quên mật khẩu</div></Link>
                    </div>
                    <div className={cl.col}>
                        <div className={cl.col_title}>Về chúng tôi</div>
                        <Link className={cl.col_item} href='/about'><div>Giới thiệu</div></Link>
                        <Link className={cl.col_item} href='/about-security'><div>Chính sách bảo mật</div></Link>
                    </div>
                    <div className={cl.col}>
                        <div className={cl.col_title}>Liên hệ</div>
                        <Link
                            className={cl.col_item}
                            target='_blank'
                            href={`mailto:${process.env.GMAIL}`}
                        ><div>Gmail</div></Link>
                        <Link
                            className={cl.col_item}
                            target='_blank'
                            href={`https://zalo.me/${process.env.ZALO}`}
                        ><div>Zalo</div></Link>
                        <Link
                            className={cl.col_item}
                            href={`${process.env.FACEBOOK}`}
                        ><div>Facebook</div></Link>
                    </div>
                </div>
            </div>
            <div className={cl.footer_foot}>Designed @2024. All right serverd.</div>
        </footer>
    );
}

export default Footer;
