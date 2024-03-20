import React, { memo } from 'react';
import cl from './product-detail-info.module.css';

const ProductDetailInfo = () => {
    return (
        <>
            <b class={cl.title}>Thông tin chính:</b>
            <table className={cl.detail_product_table}>
                <tbody>
                    <tr>
                        <td>
                            <span><i className="fad fa-map-marker-alt"></i></span>
                            <span>Địa chỉ:</span>
                        </td>
                        <td>16/26/2 Đường Nguyễn Văn Đậu, Phường 11, Bình Thạnh, Hồ Chí Minh</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-pencil-ruler"></i></span>
                            <span>Diện tích:</span>
                        </td>
                        <td>30 m<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="far fa-house-user"></i></span>
                            <span>Chung chủ:</span>
                        </td>
                        <td>Không chung chủ</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-home-lg-alt"></i></span>
                            <span>Loại sử dụng:</span>
                        </td>
                        <td>Nhà nguyên căn</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="far fa-person-booth"></i></span>
                            <span>Số phòng:</span>
                        </td>
                        <td>2 phòng ngủ, phòng vệ sinh chung</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-user-clock"></i></span>
                            <span>Giờ giấc:</span>
                        </td>
                        <td>Tự do</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-paw-alt"></i></span>
                            <span>Thú cưng:</span>
                        </td>
                        <td>Chỉ chó</td>
                    </tr>
                    <tr>
                        <td>
                            <span><i className="fad fa-clock"></i></span>
                            <span>Ngày đăng:</span>
                        </td>
                        <td>21-12-2024</td>
                    </tr>
                </tbody>
            </table>

            <b class={cl.title}>Mô tả:</b>
            <div className={cl.product_desc}>
                Chính chủ cho thuê phòng mới đầy đủ nội thất cao cấp: Nguyễn Văn Đậu, Phường 11, Quận Bình Thạnh.<br />
                + Diện tích 20m², có ban công hoặc giếng trời thoáng mát.<br />
                + Máy lạnh inverter, tủ lạnh inverter, bàn gỗ, tủ gỗ, giường gỗ cao cấp, đệm cao su.<br />
                + Cửa sổ và cửa lớn hướng ra ban công.<br />
                + Có khu vực bếp ăn riêng biệt và hệ thống kệ bếp xịn xò.<br />
                + Chủ nhà set up máy giặt cửa trước ở khu vực sân thượng rộng rãi thoáng mát.<br />
                + Tầng trệt để xe thoải mái rộng rãi.<br />
                + Phòng đẹp vị trí trung tâm, ngay cạnh bách hoá xanh, hẻm xe hơi văn minh, dân trí cao nên tuyệt đối an toàn. Gần ngã tư Lê Quang Định và Nguyễn Văn Đậu nên đi sân bay 10 phút và rất tiện đi các quận 1, 2, Tân Bình, Phú Nhuận, Gò Vấp.<br />
                Giá thuê: 5,000,000 Vnd đến 5,500,000 vnd.<br />
                Chi phí khác:<br />
                Điện: 3500 vnd/ 1 số.<br />
                Nước: 100,000 vnd/ người.<br />
                Rác + dọn vệ sinh khu vực chung 1 tuần 2 lần: 100k/ người.<br />
                Internet: 50k/ người.<br />
            </div>

            <b class={cl.title}>Bản đồ</b>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.0498473918467!2d106.66451412275332!3d10.754109483219375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef09d900001%3A0xa74756f802908594!2zU2nDqnUgVGjhu4sgxJBp4buHbiBNw6F5IE7hu5lpIFRo4bqldCBDaOG7oyBM4bubbg!5e0!3m2!1sen!2s!4v1710772976729!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}

export default memo(ProductDetailInfo);
