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

const SliderWithThumb = (props) => {
    const {
        images,
        imageThumbs
    } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const windowSize = useWindowSize();

    useEffect(function(){
        Fancybox.bind("[data-fancybox]", {});

        return () => {
            Fancybox.destroy();
        };
    }, []);

    function renderImages() {
        return images?.map(function(val, index) {
            return (
                <SwiperSlide
                    key={index}
                >
                    <div className={`${cl.slider_item}`}>
                        <img
                            data-fancybox="gallery"
                            loading="lazy"
                            src={val.url}
                        />
                        <div className={cl.slider_bg}>
                            <img
                                loading="lazy"
                                src={val.thumb_url}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            );
        });
    }

    function renderThumbImage() {
        return imageThumbs?.map(function(val, index) {
            return (
                <SwiperSlide
                    key={index}
                    className={`${index == 0 ? 'swiper-slide-thumb-active' : ''}`}
                >
                    <div className={`${cl.thumb_slider_item}`}>
                        <img
                            loading="lazy"
                            src={val.url}
                        />
                    </div>
                </SwiperSlide>
            );
        });
    }

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
                    {renderImages()}
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
                    {renderThumbImage()}
                </Swiper>
            </div>
        </div>
    );
}

export default memo(SliderWithThumb);
