import * as firebase from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        return localStorage.getItem('fcm_token');
    },
    init: async function () {
        if (!firebase.getApps().length) {
            firebase.initializeApp({
                apiKey: process.env.FIREBASE_API_KEY,
                authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                projectId: process.env.FIREBASE_PROJECT_ID,
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.FIREBASE_MESAGING_SEENDER_ID,
                appId: process.env.FIREBASE_APP_ID,
                measurementId: process.env.FIREBASE_MEASUREMENT_ID,
            })

            try {
                const messaging = getMessaging()
                const tokenInLocalForage = await this.tokenInlocalforage()
                if (tokenInLocalForage !== null) {
                    return tokenInLocalForage;
                }
                //requesting notification permission from browser
                const status = await Notification.requestPermission();
                if (status && status === 'granted') {
                    //getting token from FCM
                    const fcm_token = await getToken(messaging, {
                        vapidKey: process.env.FIREBASE_VAPID_KEY
                    });
                    if (fcm_token) {
                        //setting FCM token in indexed db using localforage
                        localStorage.setItem('fcm_token', fcm_token)
                        //return the FCM token after saving it
                        return fcm_token
                    }
                }
            } catch (error) {
                console.error(error)
                return null
            }
        } else {
            try {
                const tokenInLocalForage = await this.tokenInlocalforage()
                //if FCM token is already there just return the token
                if (tokenInLocalForage !== null) {
                    return tokenInLocalForage
                }
                const messaging = getMessaging()
                const status = await Notification.requestPermission()
                if (status && status === 'granted') {
                    //getting token from FCM
                    const fcm_token = await getToken(messaging,{
                        vapidKey: process.env.FIREBASE_VAPID_KEY
                    })
                    if (fcm_token) {
                        //setting FCM token in indexed db using localforage
                        localStorage.setItem('fcm_token', fcm_token)
                        //return the FCM token after saving it
                        return fcm_token
                    }
                }
            }catch (error) {
                console.error(error)
                return null;
            }
        }
    },
    getMessage: async function() {
        if(firebase.getApps().length > 0) {
            try {
                const messaging = getMessaging();
                onMessage(messaging, (payload) => {
                    console.log("Message Received", payload)
                } )

            }catch (error) {

            }
        }
    }
}
export { firebaseCloudMessaging }