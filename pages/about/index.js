import React from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import logoImg from '../../assets/imgs/logo.png';
import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import Link from 'next/link';

const breadcrumbs = [
    {label:'Trang chủ', href:'/'},
    {label:'Về chúng tôi', href:'/'},
];

const Index = () => {
    return (
        <div className={cl.about}>
            <Breadcrumb items={breadcrumbs}></Breadcrumb>
            <TitleCenterBig title="Về Chúng Tôi"></TitleCenterBig>
            <div className={cl.brand_logo}>
                <img src={logoImg.src}></img>
            </div>
            <div className={cl.content}>
                <div>Người Việt có câu: "An cư, lạc nghiệp". Để giúp bạn "lạc nghiệp" thì <b>Stay Seeker</b> sinh ra để giúp bạn giải quyết vấn đề "An cư". Thông qua công cụ tìm kiếm mọi người có thể dễ dàng tìm thấy chúng tôi thông qua các từ khóa: <i>tìm trọ</i>, <i>tìm trọ stay seeker</i>, ... </div>
                <div><b>Stay Seeker</b> sinh ra để giải quyết nhu cầu cho ai cần tìm và thuê trọ, cũng như cho ai đang cần cho thuê trọ, ... một cách miễn phí.</div>
                <div><b>Stay Seeker</b> hiện không thu phí trên bất cứ giao dịch hoặc bài đăng của người sử dụng. Và đảm bảo thông tin đến người dùng một cách chính xác và trung thực nhất.</div>
                <div>Để đảm bảo quyền lợi cho mọi người sử dụng hệ thống, chúng tôi sẽ luôn mạnh tay đối với những hành động vi phạm vi tắc sử dụng. <Link href="/">Xem điều khoản</Link>.</div>
                <div>Hệ thống <b>Stay Seeker</b> được thành lập và phát triển 2024 với công nghệ tốt nhất nhằm đáp ứng nhu cầu sử dụng của mọi người. Và tiết kiệm chi phí phát triển với ít thành viên nhất. Nhưng vẫn đảm bảo chất lượng hệ thống cho mọi người.</div>
                <br></br>
                <TitleLeftBig title="Đối tượng sử dụng"></TitleLeftBig>
                <div>Đối tượng sử dụng của <b>Stay Seeker</b> gồm: các bạn sinh viên, nhân viên, công nhân, viên chức, ... đang xa nhà và có nhu cầu tìm một nơi để ở và làm việc một cách ổn định.</div>
                <div>Thông qua hệ thống <b>Stay Seeker</b> các bạn môi giới cũng có thể quảng bá các sản phẩm bất động sản đến tất cả mọi người.</div>
                <br></br>
                <div><b>Stay Seeker</b> cảm ơn bạn đã tin tưởng và sử dụng !</div>
                <br></br>
                <br></br>
                <div><Link href='/auth/register'>Đăng ký tài khoản</Link></div>
                <div><Link href='/auth/login'>Đăng nhập</Link></div>
                <div><Link href='/'>Về trang chủ</Link></div>
            </div>
        </div>
    );
}

export default Index;
