import React from 'react';
import cl from './ads-box-1.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const AdsBox1 = () => {
    return (
        <div className='slider-ads-1'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                className='slider-navigation-sm'
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                lazy={true}
                loop={true}
            >
                <SwiperSlide>
                    <a className={`${cl.slider_item}`} target='_blank' href='#'>
                        <img
                            loading="lazy"
                            src='https://static.topcv.vn/img/AWC_banner1.png'
                        />
                        <div className={cl.slider_bg}>
                            <img
                                loading="lazy"
                                src='https://static.topcv.vn/img/AWC_banner1.png'
                            />
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className={`${cl.slider_item}`} target='_blank' href='#'>
                        <img
                            loading="lazy"
                            src='https://static.topcv.vn/img/wrhlQ5Qiu2W8dktNngWo3GoVqmsiF8OI_1717579647____b92afeaae0785f603e00ffcf850bed56.png'
                        />
                        <div className={cl.slider_bg}>
                            <img
                                loading="lazy"
                                src='https://static.topcv.vn/img/wrhlQ5Qiu2W8dktNngWo3GoVqmsiF8OI_1717579647____b92afeaae0785f603e00ffcf850bed56.png'
                            />
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AdsBox1;
