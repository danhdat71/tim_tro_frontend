import React from 'react';
import cl from './ads-box-1.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import axios from '@/helpers/http-requests/axios';

const AdsBox1 = (props) => {

    let {
        ads=[]
    } = props;

    async function handleClickAds(adsItem)
    {
        window.open(adsItem?.link, '_blank').focus();
        axios.post(
            `/ads/click`,
            {
                ads_id: adsItem?.id
            }, 
            {
                headers: {
                    Authorization : 'Bearer ' + localStorage.getItem('access_token')
                }
            }
        );
    }

    function handleRenderAdsItem()
    {
        return ads?.map(function(item, index){
            return (
                <SwiperSlide
                    key={index}
                >
                    <div
                        className={`${cl.slider_item}`}
                        target='_blank'
                        href='#'
                        onClick={()=>{
                            handleClickAds(item);
                        }}
                    >
                        <img
                            loading="lazy"
                            src={`${process.env.BACKEND_URL}/${item.img_url}`}
                            alt={`${process.env.BACKEND_URL}/${item.img_url}`}
                        />
                        <div className={cl.slider_bg}>
                            <img
                                loading="lazy"
                                src={`${process.env.BACKEND_URL}/${item.img_url}`}
                                alt={`${process.env.BACKEND_URL}/${item.img_url}`}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            )
        });
    }

    return (
        <div className={`slider-ads-1 ${ads?.lenght == 0 ? cl.hide : false}`}>
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
            {handleRenderAdsItem()}
            </Swiper>
        </div>
    );
}

export default AdsBox1;
