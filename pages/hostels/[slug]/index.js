"use client";

import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import cl from './detail.module.css';

export async function getServerSideProps(context) {
    let slug = context.query.slug;
    let data = await fetch(`https://nmsoft.online/offical_page/api/v1/product/${slug}`);
    data = await data.json();

    return {
        props: { data },
    }
}

const breadCrumbItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Danh sách trọ',
        href: '/'
    },
    {
        label: 'Trọ quận 1',
        href: '/'
    }
]

const Index = ({ data }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeThumbItem, setActiveThumbItem] = useState(null);

    return (
        <div className={cl.hostel_detail}>
            <Breadcrumb items={breadCrumbItems}></Breadcrumb>
            <div className={cl.main_slider}>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    lazy={true}
                >
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202215-a993_wm.jpeg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202215-a993_wm.jpeg" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={cl.thumb_slider}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    lazy={true}
                >
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202215-a993_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={cl.hostel_detail}>
                <h2>Cho thuê phòng trọ hẻm an ninh - xe tải tận cửa - Nguyễn Văn Đậu - Bình Thạnh</h2>
                <div>
                    <span><i className="far fa-map-marker-alt"></i></span>
                    <span>Đường Nguyễn Văn Đậu, Phường 11, Bình Thạnh, Hồ Chí Minh</span>
                </div>
            </div>
        </div>
    );
}

export default Index;
