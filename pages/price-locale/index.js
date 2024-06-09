import TitleLeftBig from '@/components/titles/title-left-big/title-left-big';
import React from 'react';
import Select from 'react-select';
import cl from './index.module.css';
import headerBackground from '@/assets/imgs/background_price_table.png';

const provinces =[
    {'label':'Tỉnh/thành', 'value': 1}
];
const district =[
    {'label':'Quận/huyện', 'value': 1}
];

const Index = () => {
    return (
        <div className={cl.wrap_main}>
            <div className={cl.header_bg}>
                <img src={headerBackground.src}></img>
            </div>
            <div className={cl.main}>
                <div className={cl.title_big}>Thống kê giá nhà đất theo khu vực - Tháng 5/2024</div>
                <div className={cl.title_sub}>Bảng giá trung bình theo tỉnh thành, quận huyện. Được tổng hợp từ dữ liệu các nguồn tin đăng trong 3 tháng đến nay. Đơn vị tính giá/m<sup>2</sup> so với cùng kì tháng trước.</div>
                <div className={cl.group_search}>
                    <Select
                        onChange={(selectedOption)=>{
                        }}
                        options={provinces}
                        maxMenuHeight={190}
                        value={provinces[0]}
                    ></Select>
                </div>
                <div className={cl.wrap_list}>
                    <div className={cl.item}>
                        <div><span>•</span> Quận 1</div>
                        <div>
                            <span>Giá: </span>
                            <span>2.5tr/m<sup>2</sup></span>
                        </div>
                        <div>
                            <span className={`${cl.grow_icon} ${cl.grow_icon_down}`}>
                                <i className="fas fa-sort-down"></i>
                            </span>
                            <span>Giảm 5%</span>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div><span>•</span> Quận Bình Tân</div>
                        <div>
                            <span>Giá: </span>
                            <span>2.5tr/m<sup>2</sup></span>
                        </div>
                        <div>
                            <span className={`${cl.grow_icon} ${cl.grow_icon_up}`}>
                                <i className="fas fa-sort-up"></i>
                            </span>
                            <span>Tăng 5%</span>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div><span>•</span> Quận Bình Thạnh</div>
                        <div>
                            <span>Giá: </span>
                            <span>2.5tr/m<sup>2</sup></span>
                        </div>
                        <div>
                            <span className={`${cl.grow_icon} ${cl.grow_icon_up}`}>
                                <i className="fas fa-sort-up"></i>
                            </span>
                            <span>Tăng 5%</span>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div><span>•</span> Quận Thủ Đức</div>
                        <div>
                            <span>Giá: </span>
                            <span>2.5tr/m<sup>2</sup></span>
                        </div>
                        <div>
                            <span className={`${cl.grow_icon} ${cl.grow_icon_up}`}>
                                <i className="fas fa-sort-up"></i>
                            </span>
                            <span>Tăng 5%</span>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div><span>•</span> Quận 4</div>
                        <div>
                            <span>Giá: </span>
                            <span>2.5tr/m<sup>2</sup></span>
                        </div>
                        <div>
                            <span className={`${cl.grow_icon} ${cl.grow_icon_up}`}>
                                <i className="fas fa-sort-up"></i>
                            </span>
                            <span>Tăng 5%</span>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div><span>•</span> Quận 5</div>
                        <div>
                            <span>Giá: </span>
                            <span>2.5tr/m<sup>2</sup></span>
                        </div>
                        <div>
                            <span className={`${cl.grow_icon} ${cl.grow_icon_down}`}>
                                <i className="fas fa-sort-down"></i>
                            </span>
                            <span>Giảm 5%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
