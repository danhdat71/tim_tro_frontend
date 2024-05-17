import React from 'react';
import cl from './index.module.css';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import TitleCenterBig from '@/components/titles/title-center-big/title-center-big';
import Link from 'next/link';

const breadcrumbs = [
    {label:'Trang chủ', href:'/'},
    {label:'Quy chế hoạt động', href:'/operating-regulation'},
];

const Index = () => {
    return (
        <div>
            <Breadcrumb items={breadcrumbs}></Breadcrumb>
            <TitleCenterBig title="Quy Chế Hoạt Động"></TitleCenterBig>
            <div className={cl.group}>
                <div className={cl.big_title}>I. GIỚI THIỆU CHUNG</div>
                <div className={cl.detail_item}>1. <b>Tên sàn giao dịch:</b> Sàn giao dịch thương mại điện tử <b>{process.env.SITE_NAME}</b> (hoặc được gọi là "Sàn", "Kênh", "Trang").</div>
                <div className={cl.detail_item}>2. <b>Chủ sở hữu:</b> {process.env.COMPANY_NAME}.</div>
                <div className={cl.detail_item}>3. <b>Mục tiêu:</b> Tạo điều kiện thuận lợi và an toàn cho các tổ chức, cá nhân, doanh nghiệp trao đổi thông tin, đăng tin, chào bán, chào mua các sản phẩm và dịch vụ bất động sản một cách hợp pháp.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>II. ĐĂNG KÝ THÀNH VIÊN</div>
                <div className={cl.detail_item}>1. <b>Thành viên:</b> Các tổ chức, cá nhân, doanh nghiệp có nhu cầu giao dịch, trao đổi thông tin về bất động sản trên Sàn.</div>
                <div className={cl.detail_item}>2. <b>Quy trình đăng ký:</b></div>
                <div className={cl.slash_item}>- Thành viên phải đăng ký tài khoản và cung cấp thông tin cá nhân bắt buộc.</div>
                <div className={cl.slash_item}>- Thông tin sẽ được xác thực trước khi tài khoản được kích hoạt.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>III. QUYỀN VÀ NHIỆM VỤ CỦA THÀNH VIÊN</div>

                <div className={cl.detail_item}>1. <b>Quyền lợi:</b></div>
                <div className={cl.slash_item}>- Đăng tin, chào bán, chào mua sản phẩm và dịch vụ bất động sản trên Sàn.</div>
                <div className={cl.slash_item}>- Thực hiện các giao dịch mua bán, trao đổi thông tin về bất động sản.</div>
                <div className={cl.slash_item}>- Sử dụng các dịch vụ hỗ trợ, chăm sóc khách hàng của Sàn.</div>

                <div className={cl.detail_item}>2. <b>Nhiệm vụ:</b></div>
                <div className={cl.slash_item}>- Đảm bảo thông tin cung cấp khi đăng ký và đăng tin là chính xác và cập nhật.</div>
                <div className={cl.slash_item}>- Tuân thủ các quy định của pháp luật và quy chế hoạt động của Sàn.</div>
                <div className={cl.slash_item}>- Không sử dụng Sàn vào mục đích gian lận hoặc vi phạm pháp luật.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>IV. NGUYÊN TẮC HOẠT ĐỘNG</div>

                <div className={cl.detail_item}>1. <b>Minh bạch và trung thực:</b></div>
                <div className={cl.slash_item}>- Các tin đăng phải cung cấp đầy đủ, chính xác và rõ ràng thông tin về sản phẩm và dịch vụ bất động sản, bao gồm địa chỉ, giá cả, diện tích, tình trạng pháp lý, và hình ảnh thực tế.</div>
                <div className={cl.slash_item}>- Thông tin về sản phẩm và dịch vụ phải được cập nhật kịp thời. Thành viên phải đảm bảo thông tin đăng tải là chính xác và không gây hiểu lầm cho người dùng.</div>

                <div className={cl.detail_item}>2. <b>Bảo mật thông tin:</b></div>
                <div className={cl.slash_item}>- {process.env.SITE_NAME} cam kết bảo mật thông tin cá nhân của thành viên. Thông tin cá nhân chỉ được sử dụng cho mục đích cung cấp dịch vụ và không chia sẻ cho bên thứ ba khi chưa có sự đồng ý của thành viên, trừ khi có yêu cầu từ cơ quan chức năng.</div>
                <div className={cl.slash_item}>- {process.env.SITE_NAME} áp dụng các biện pháp bảo mật để đảm bảo an toàn cho các giao dịch trực tuyến và bảo vệ thông tin tài khoản của thành viên.</div>

                <div className={cl.detail_item}>3. <b>Chống gian lận:</b></div>
                <div className={cl.slash_item}>- {process.env.SITE_NAME}  thực hiện việc kiểm duyệt nội dung tin đăng để phát hiện và ngăn chặn các hành vi gian lận, lừa đảo. Các tin đăng vi phạm sẽ bị xóa bỏ và tài khoản vi phạm có thể bị khóa hoặc xóa.</div>
                <div className={cl.slash_item}>- Thành viên có quyền và trách nhiệm báo cáo các hành vi gian lận, lừa đảo hoặc vi phạm quy định của sàn. Sàn sẽ xem xét và xử lý các báo cáo này một cách nghiêm túc và nhanh chóng.</div>

                <div className={cl.detail_item}>4. <b>Quyền và nghĩa vụ của các bên tham gia:</b></div>
                <div className={cl.slash_item}>- Các bên tham gia giao dịch trên Sàn TMĐT {process.env.SITE_NAME} phải tôn trọng quyền và lợi ích hợp pháp của nhau. Mọi hành vi vi phạm sẽ bị xử lý theo quy định của sàn và pháp luật.</div>
                <div className={cl.slash_item}>- Người bán phải đảm bảo sản phẩm và dịch vụ được chào bán là hợp pháp, có chất lượng như mô tả và không vi phạm quyền sở hữu trí tuệ hoặc các quy định pháp luật khác.</div>
                <div className={cl.slash_item}>- Người mua phải tuân thủ các quy định của sàn và pháp luật, thực hiện các giao dịch một cách trung thực và có trách nhiệm.</div>

                <div className={cl.detail_item}>5. <b>Tuân thủ pháp luật:</b></div>
                <div className={cl.slash_item}>- Mọi hoạt động trên Sàn TMĐT {process.env.SITE_NAME} phải tuân thủ các quy định của pháp luật Việt Nam. Các hành vi vi phạm sẽ bị xử lý theo quy định của pháp luật và quy chế hoạt động của sàn.</div>
                <div className={cl.slash_item}>- Sàn TMĐT {process.env.SITE_NAME} cam kết hợp tác với các cơ quan chức năng trong việc điều tra và xử lý các hành vi vi phạm pháp luật xảy ra trên sàn.</div>

            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>V. QUY ĐỊNH VỀ GIAO DỊCH</div>

                <div className={cl.detail_item}>1. <b>Giao dịch hợp pháp:</b> Mọi giao dịch trên Sàn phải tuân thủ pháp luật.</div>
                <div className={cl.detail_item}>2. <b>Thỏa thuận tự do:</b> Thành viên có quyền tự do thỏa thuận các điều khoản giao dịch.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>VI. GIẢI QUYẾT TRANH CHẤP</div>

                <div className={cl.detail_item}>1. <b>Thương lượng:</b> Thành viên tự thương lượng để giải quyết tranh chấp.</div>
                <div className={cl.detail_item}>2. <b>Trung gian:</b> Các bên có thể nhờ đến sự hỗ trợ của ban quản lý hoặc cơ quan chức năng.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>VII. QUY ĐỊNH VỀ PHÍ VÀ THANH TOÁN</div>

                <div className={cl.detail_item}>1. <b>Công khai chi phí:</b> Mọi chi phí liên quan đến dịch vụ được công khai minh bạch.</div>
                <div className={cl.detail_item}>2. <b>Phương thức thanh toán:</b> Sử dụng các phương thức thanh toán an toàn và bảo mật.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>VIII. HỖ TRỢ KHÁCH HÀNG</div>

                <div className={cl.detail_item}>1. <b>Dịch vụ hỗ trợ:</b> Sàn cung cấp dịch vụ hỗ trợ kỹ thuật và chăm sóc khách hàng.</div>
                <div className={cl.detail_item}>2. <b>Tiếp nhận phản hồi:</b> Tiếp nhận và xử lý phản hồi, khiếu nại của thành viên một cách nhanh chóng và hiệu quả.</div>
            </div>
            <div className={cl.group}>
                <div className={cl.big_title}>IX. ĐIỀU KHOẢN CHUNG</div>

                <div className={cl.detail_item}>1. <b>Hiệu lực:</b> Quy chế này có hiệu lực từ ngày ban hành và có thể được cập nhật theo quyết định của ban quản lý.</div>
                <div className={cl.detail_item}>2. <b>Chấp nhận quy chế:</b> Khi sử dụng dịch vụ của Sàn, các thành viên được xem là đã chấp nhận các điều khoản trong quy chế này.</div>
            </div>
        </div>
    );
}

export default Index;
