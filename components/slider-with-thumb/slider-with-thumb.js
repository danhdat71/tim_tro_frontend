import React, { useRef, useState } from 'react';
import cl from './slider-with-thumb.module.css';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const SliderWithThumb = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeThumbItem, setActiveThumbItem] = useState(null);

    return (
        <div className={cl.wrap_slider_with_thumb}>
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
        </div>
    );
}

export default SliderWithThumb;
