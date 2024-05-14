import React, { memo } from 'react';
import cl from './helper-box.module.css';
import demo1 from '@/assets/imgs/demo1.jpg';
import demo2 from '@/assets/imgs/demo2.jpg';
import demo3 from '@/assets/imgs/demo3.jpg';
import demo4 from '@/assets/imgs/demo4.jpg';
import demo5 from '@/assets/imgs/demo5.jpg';

const HelperBox = () => {
    return (
        <div className={cl.helper_box}>
            <h3 className={cl.big_title}>Kinh nghiệm thuê phòng trọ tốt nhất với chi phí hợp lý</h3>
            <div>
                <div className={cl.title}>1. Xác định nhu cầu và khả năng tài chính</div>
                <ul className={cl.ul}>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Vị trí</b>: Chọn vị trí thuận tiện cho việc học tập hoặc làm việc của bạn, đồng thời gần các tiện ích công cộng như chợ, siêu thị, bệnh viện. Vị trí còn ảnh hưởng đến giá cả, vì vậy bạn cần cân nhắc kỹ.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Diện tích và tiện nghi</b>: Chọn vị trí thuận tiện cho việc học tập hoặc làm việc của bạn, đồng thời gần các tiện ích công cộng như chợ, siêu thị, bệnh viện. Vị trí còn ảnh hưởng đến giá cả, vì vậy bạn cần cân nhắc kỹ.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Giá cả</b>: Xác định mức giá thuê phòng phù hợp với khả năng tài chính của bạn. Ngoài tiền thuê nhà, bạn cũng cần tính toán các chi phí khác như điện, nước, internet, vệ sinh. Đừng quên dự trù một khoản ngân sách cho các chi phí phát sinh.</li>
                </ul>
                <div className={cl.wrap_2_images}>
                    <div><img className={cl.img} src={demo1.src} loading='lazy' alt={demo1.src}></img></div>
                    <div><img className={cl.img} src={demo2.src} loading='lazy' alt={demo2.src}></img></div>
                </div>
            </div>
            <div>
                <div className={cl.title}>2. Tìm kiếm thông tin qua nhiều kênh</div>
                <div className={cl.sub_title}>Có nhiều cách để tìm kiếm phòng trọ, và bạn nên kết hợp sử dụng nhiều kênh để tăng cơ hội tìm được phòng ưng ý:</div>
                <ul className={cl.ul}>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Trực tuyến</b>: Sử dụng các trang web chuyên về bất động sản và cho thuê phòng trọ. Ngoài ra, các nhóm Facebook hoặc diễn đàn sinh viên cũng là nguồn thông tin phong phú. Đăng ký nhận thông báo qua email từ các trang web này để cập nhật nhanh chóng khi có phòng trọ mới được đăng.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Trực tiếp</b>: Đi dạo quanh khu vực bạn muốn thuê phòng, tìm hiểu thông tin qua các biển quảng cáo cho thuê nhà treo ở các cột điện, tường nhà. Điều này giúp bạn có cái nhìn thực tế hơn về khu vực và tình trạng phòng trọ.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Qua người quen</b>: Hỏi thăm bạn bè, người thân hoặc đồng nghiệp về các phòng trọ trống mà họ biết. Những thông tin này thường đáng tin cậy hơn và có thể giúp bạn tránh được những rủi ro không đáng có.</li>
                </ul>
                <div className={cl.wrap_1_images}>
                    <div><img className={cl.img} src={demo3.src} loading='lazy' alt={demo3.src}></img></div>
                </div>
            </div>
            <div>
                <div className={cl.title}>3. Kiểm tra kỹ trước khi thuê</div>
                <div className={cl.sub_title}>Khi đã tìm được một vài lựa chọn, bạn nên:</div>
                <ul className={cl.ul}>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Kiểm tra tình trạng phòng</b>: Đến xem trực tiếp phòng để đánh giá tình trạng thực tế, kiểm tra hệ thống điện, nước, cống thoát nước, an ninh khu vực. Hãy chú ý đến các chi tiết nhỏ như độ thông thoáng, ánh sáng tự nhiên và tình trạng vệ sinh của phòng.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Gặp gỡ chủ nhà</b>: Nên gặp trực tiếp chủ nhà để thương lượng và hiểu rõ hơn về các điều khoản thuê, cũng như để đánh giá xem chủ nhà có dễ tính và hợp tác không. Chủ nhà thân thiện, dễ gần sẽ giúp bạn có một trải nghiệm thuê nhà dễ chịu hơn.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Hợp đồng rõ ràng</b>: Đảm bảo rằng hợp đồng thuê phòng được lập thành văn bản với các điều khoản rõ ràng, chi tiết về giá thuê, tiền cọc, thời hạn thuê, các chi phí phát sinh và quyền lợi, trách nhiệm của hai bên. Đọc kỹ từng điều khoản trong hợp đồng để tránh những bất đồng sau này.</li>
                </ul>
                <div className={cl.wrap_2_images}>
                    <div><img className={cl.img} src={demo4.src} loading='lazy' alt={demo4.src}></img></div>
                    <div><img className={cl.img} src={demo5.src} loading='lazy' alt={demo5.src}></img></div>
                </div>
            </div>
            <div>
                <div className={cl.title}>4. Thương lượng giá cả và các điều khoản</div>
                <div className={cl.sub_title}>Thương lượng là bước quan trọng giúp bạn có được giá thuê tốt hơn và các điều khoản có lợi:</div>
                <ul className={cl.ul}>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Giảm giá thuê</b>: Nếu bạn có kế hoạch thuê lâu dài, hãy đề xuất với chủ nhà về việc giảm giá thuê. Một hợp đồng dài hạn thường mang lại sự ổn định cho cả hai bên. Nếu có thể, bạn cũng nên đề nghị các ưu đãi như miễn phí tháng đầu tiên hoặc giảm giá cho các tháng tiếp theo.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Chi phí phát sinh</b>: Thảo luận rõ ràng về các chi phí khác như tiền điện, nước, internet, và các dịch vụ khác. Nên yêu cầu chủ nhà cung cấp thông tin minh bạch về mức phí và cách tính phí. Hãy hỏi xem có các chi phí nào khác không được đề cập trong quảng cáo ban đầu.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Thời gian thanh toán</b>: Thỏa thuận về thời gian và cách thức thanh toán tiền thuê, có thể theo tháng hoặc theo quý, tùy theo khả năng tài chính của bạn. Nếu có thể, hãy yêu cầu hóa đơn hoặc biên nhận khi thanh toán để tránh các tranh chấp sau này.</li>
                </ul>
            </div>
            <div>
                <div className={cl.title}>5. Chú ý đến an ninh và môi trường sống</div>
                <div className={cl.sub_title}>An ninh và môi trường sống là những yếu tố không thể bỏ qua:</div>
                <ul className={cl.ul}>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>An ninh</b>: Chọn những khu vực có an ninh tốt, có bảo vệ hoặc hệ thống camera giám sát. Hãy tìm hiểu kỹ về tình hình an ninh trong khu vực bạn định thuê. Tránh các khu vực có tỷ lệ tội phạm cao hoặc thiếu ánh sáng vào ban đêm.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Môi trường sống</b>: Phòng trọ nên nằm trong khu vực yên tĩnh, sạch sẽ, không quá ồn ào để đảm bảo bạn có môi trường sống thoải mái và tập trung làm việc hoặc học tập. Hãy kiểm tra xem xung quanh có các tiện ích như cửa hàng, quán ăn, bệnh viện không. Môi trường sống tốt sẽ giúp bạn cảm thấy thoải mái và an tâm hơn.</li>
                </ul>
            </div>
            <div>
                <div className={cl.title}>6. Chuẩn bị kỹ trước khi ký hợp đồng</div>
                <div className={cl.sub_title}>Trước khi ký hợp đồng thuê phòng, bạn nên:</div>
                <ul className={cl.ul}>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Đọc kỹ hợp đồng</b>: Kiểm tra kỹ các điều khoản trong hợp đồng, đảm bảo rằng tất cả các thông tin đều chính xác và rõ ràng. Đặc biệt chú ý đến các điều khoản về giá thuê, thời hạn thuê, điều kiện chấm dứt hợp đồng và các phí phụ thu.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Đặt cọc hợp lý</b>: Thỏa thuận về số tiền đặt cọc, thường là một hoặc hai tháng tiền thuê, và yêu cầu biên nhận khi đặt cọc. Điều này sẽ giúp bạn có bằng chứng để bảo vệ quyền lợi của mình trong trường hợp có tranh chấp.</li>
                    <li><i className={`${cl.ul_dot} fas fa-dot-circle`}></i><b>Lưu giữ tài liệu</b>: Giữ lại một bản sao hợp đồng và các giấy tờ liên quan để đối chiếu và bảo vệ quyền lợi của mình trong trường hợp có tranh chấp. Hãy chụp lại các hóa đơn thanh toán và biên nhận để làm bằng chứng nếu cần.</li>
                </ul>
            </div>
        </div>
    );
}

export default memo(HelperBox);
