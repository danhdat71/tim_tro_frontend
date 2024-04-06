import React, { memo, useState } from 'react';
import cl from './other-area-box.module.css';
import Link from 'next/link';

const OtherAreaBox = (props) => {

    let {
        items
    } = props;

    let [isMore, setIsMore] = useState(false);

    function renderItems() {
        if (items && items.length > 0) {
            if (isMore) {
                return items.map(function(val, index) {
                    return (
                        <tr key={index}>
                            <td>{val.label}</td>
                            <td><b>{val.price}</b> / tháng</td>
                            <td>
                                <Link href={val.href} className={cl.result_link}>Xem {val.result} kết quả</Link>
                            </td>
                        </tr>
                    )
                });
            } else {
                return items.map(function(val, index) {
                    if (index < 3) {
                        return (
                            <tr key={index}>
                                <td>{val.label}</td>
                                <td><b>{val.price}</b> / tháng</td>
                                <td>
                                    <Link href={val.href} className={cl.result_link}>Xem {val.result} kết quả</Link>
                                </td>
                            </tr>
                        )
                    }
                });
            }
        }

        return (
            <tr>
                <td
                    colSpan={3}
                >
                    <div
                        className={cl.no_data}
                    >Hiện chưa có dữ liệu</div>
                </td>
            </tr>
        );
    }

    function renderLoadMore() {
        if (items && items.length > 0 && !isMore) {
            return (
                <button
                    onClick={()=>{
                        setIsMore(!isMore);
                    }}
                >
                    <span>Xem tiếp</span>
                    <span><i className="far fa-angle-down"></i></span>
                </button>
            );
        } else {
            return (
                <button
                    onClick={()=>{
                        setIsMore(!isMore);
                    }}
                >
                    <span>Thu nhỏ</span>
                    <span><i className="far fa-angle-up"></i></span>
                </button>
            );
        }
    }

    return (
        <div className={cl.other_area_box}>
            <div className={cl.sub}>Giúp bạn tìm các trọ, văn phòng,... giá rẻ hơn cùng khu vực</div>
            <div className={cl.table_scroll}>
                <table className={cl.table}>
                    <thead>
                        <tr>
                            <th width={'30%'}>
                                <div>Khu vực</div>
                                <div className={cl.header_sub}>Quận 4</div>
                            </th>
                            <th width={'30%'}>
                                <div>Mức giá</div>
                                <div className={cl.header_sub}>Rẻ hơn hoặc bằng</div>
                            </th>
                            <th width={'40%'}>
                                <div>Tổng số tìm thấy</div>
                                <div className={cl.header_sub}>1.022 kết quả</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItems()}
                    </tbody>
                </table>
            </div>
            <div className={cl.view_more}>
                {renderLoadMore()}
            </div>
        </div>
    );
}

export default memo(OtherAreaBox);
