function suggestDescription() {
    return [
        {
            label: 'Mẫu mô tả trọ 1',
            value: `Cho thuê phòng trọ ngày 1/1 có phòng
✅ Giá: 3tr5 / tháng
----------------------------
✅ Trọ đăng như mô tả, thật 100%, có hình đính kèm
✅ Diện tích: 30m2, ngay lầu
✅ Phòng mới, rộng, sạch, đẹp
✅ Có ban công, cửa sổ
🌟 Trang bị:
    📌 1 tủ quần áo
    📌 1 bàn làm việc, ghế, kệ sách
    📌 1 quạt đứng
    📌 1 giường 1m7 + nệm
    📌 1 bếp + rửa chén
✅ Giờ giấc tự do, chìa khóa riêng
✅ Có wifi
✅ Có máy giặt chung
✅ Có nhà để xe (miễn phí), camera an ninh
✅ Phù hợp sinh viên
✅ Khu dân trí, an ninh, ko ngập nước
-----------------------------
✅ Điện: 3.500đ/KW
✅ Nước máy: 100.000đ/người
✅ Rác: 50.000đ/phòng
✅ Wifi: 80.000đ/1 người
✅ Máy giặt: 100.000đ/phòng (nếu sử dụng)
✅ Xe: miễn phí
------------------------------
🌐 Địa chỉ: Đường ABC, Phường 1, Quận 1, Thành Phố ABC
Liên hệ: ABC`,
        },
        {
            label: 'Mẫu mô tả trọ 2',
            value: `Phòng trọ Full nội thất có gác giá 4tr - 4tr3
Địa chỉ: ABC, Đường ABC, Phường X, Quận Y, TP ABC
            
👉Có ban công, cửa sổ
👉Tiện ích:
    + Bếp
    + Máy lạnh
    + Tủ lạnh
    + ...
👉Gần trung tâm, ngay chợ
👉Không chung chủ, giờ giấc tự do
👉Xe free 2, máy giặt free
📱Zalo: ***(Gặp ABC)`,
        },
        {
            label: 'Mẫu mô tả trọ 3',
            value: `Cho thuê  trọ 1 phòng ngủ + ban công 
👉 2.3tr Chốt
Địa chỉ: 123, Đ.ABC, P.1, Q.1, TP.ABC
Full nội thất cao cấp: máy lạnh, tủ lạnh, máy giặt, bếp, giường, nệm,…
💧Điện 4k - Nước 100k/ ng, dịch vụ 150k phòng
🛵 Xe free 2 xe
Được nuôi thú cưng nhưng cam kết.
🎠Thang bộ, giờ giấc tự do, khóa cửa từ.
Liên hệ xem phòng`,
        },
    ]
}

function suggestTitle() {
    return [
        {
            label: 'Cho thuê phòng trọ sinh viên giá rẻ',
            value: 'Cho thuê phòng trọ sinh viên giá rẻ'
        },
        {
            label: 'Cho thuê phòng trọ nhân viên giá rẻ',
            value: 'Cho thuê phòng trọ nhân viên giá rẻ'
        },
        {
            label: 'Cho thuê phòng trọ cao cấp',
            value: 'Cho thuê phòng trọ cao cấp'
        },
        {
            label: 'Cho thuê phòng trọ tiện nghi',
            value: 'Cho thuê phòng trọ tiện nghi'
        },
    ];
}

export {
    suggestDescription,
    suggestTitle,
};