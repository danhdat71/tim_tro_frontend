import React, { memo, useEffect, useRef, useState } from 'react';
import cl from './slider-with-thumb.module.css';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import useWindowSize from '@/hooks/useWindowDimensions';

const SliderWithThumb = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const windowSize = useWindowSize();

    useEffect(function(){
        Fancybox.bind("[data-fancybox]", {});

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className={cl.wrap_slider_with_thumb}>
            <div className={cl.main_slider}>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    className='slider-navigation-sm'
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    lazy={true}
                >
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img data-fancybox="gallery" loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202215-a993_wm.jpeg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202215-a993_wm.jpeg" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img data-fancybox="gallery" loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/03/18/20240318214358-6c48_wm.jpg" />
                            <div className={cl.slider_bg}>
                                <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/03/18/20240318214358-6c48_wm.jpg" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.slider_item}>
                            <img data-fancybox="gallery" loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202214-4bf3_wm.jpeg" />
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
                    slidesPerView={windowSize.width > 520 ? 6 : 4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    lazy={true}
                    className='thumb-slider-fade'
                >
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/02/24/20240224202215-a993_wm.jpeg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.thumb_slider_item}>
                            <img loading="lazy" src="https://file4.batdongsan.com.vn/resize/1275x717/2024/03/18/20240318214358-6c48_wm.jpg" />
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

export default memo(SliderWithThumb);
