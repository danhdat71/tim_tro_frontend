import Header from '@/components/header/header';
import Head from 'next/head';
import cl from './layout.module.css';
import Footer from '@/components/footer/footer';
import AdsLeft from '@/components/ads/ads-left/ads-left';
import AdsRight from '@/components/ads/ads-right/ads-right';
import { useEffect, useState } from 'react';
import axios from '@/helpers/http-requests/axios';
import { useDispatch } from 'react-redux';
import { setAdsData } from '@/redux/features/ads';
import { useAppSelector } from '@/redux/store';
import { firebaseCloudMessaging } from '@/config/firebase';

const Layout = (props) => {
    const dispatch = useDispatch();
    const adsData = useAppSelector(function (state) {
        return state.adsReducer.adsData;
    });
    const authUserData = useAppSelector(function(state){
        return state.authUserReducer.user.data;
    });

    function head() {
        return (
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                {/* Google font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
                {/* Fontawesome 5 */}
                <link
                    href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
        );
    }

    useEffect(function() {
        // Retrive FCM token
        async function retriveFCMToken() {
            let token = await firebaseCloudMessaging.init();
            axios.post('/notification/store-fcm-token', {
                fcm_token: token
            }, {
                headers: {
                    Authorization : 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        }
        if (authUserData?.id != undefined) {
            retriveFCMToken();
        }
    }, [authUserData?.id]);

    useEffect(function () {
        // Get ads
        axios.get('/public-ads')
            .then(function (res) {
                if (res?.status == 200) {
                    dispatch(setAdsData(res.data));
                }
            });
    }, []);

    return (
        <>
            {head()}
            <div className={cl.container}>
                <Header></Header>
                <div className={cl.main_container}>
                    <AdsLeft
                        ads={adsData?.side_left}
                    ></AdsLeft>
                    <div className={cl.padding_container}>
                        <main>
                            {props.children}
                        </main>
                    </div>
                    <AdsRight
                        ads={adsData?.side_right}
                    ></AdsRight>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;
