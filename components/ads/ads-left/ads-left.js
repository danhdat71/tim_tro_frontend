import React, { useEffect, useState } from 'react';
import cl from './ads-left.module.css';
import axios from '@/helpers/http-requests/axios';

const AdsLeft = (props) => {
    let {
        ads
    } = props;
    let [isTop, setIsTop] = useState(false);

    useEffect(function() {
        function actionScroll(e) {
            let scroll = this.scrollY;

            if (scroll > 70) {
                if (isTop == false) {
                    setIsTop(true);
                }
            } else {
                setIsTop(false);
            }
        }

        window.addEventListener('scroll', actionScroll);
        return () => window.removeEventListener('scroll', actionScroll);
    }, []);

    async function handleClickAds()
    {
        window.open(ads?.link, '_blank').focus();
        axios.post(
            `/ads/click`,
            {
                ads_id: ads?.id
            }, 
            {
                headers: {
                    Authorization : 'Bearer ' + localStorage.getItem('access_token')
                }
            }
        );
    }

    function handleRenderAds() {
        if (ads?.img_url) {
            return (
                <div
                    className={`${cl.wrap_ads} ${isTop == true ? cl.isTop : false}`}
                    onClick={()=>{
                        handleClickAds();
                    }}
                >
                    <img src={`${process.env.BACKEND_URL}/${ads?.img_url}`} alt={ads.img_url}></img>
                </div>
            );
        }
    }

    return (
        <>
            {handleRenderAds()}
        </>
    );
}

export default AdsLeft;
